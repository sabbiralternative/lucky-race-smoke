import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useOrderMutation } from "../../../../redux/features/events/events";
import { Status } from "../../../../const";
import { handleStoreRecentPlay } from "../../../../utils/handleStorateRecentPlay";
import { setBalance } from "../../../../redux/features/auth/authSlice";
import Stake from "../../../../component/shared/Game/Stake/Stake";

const BetArea = ({
  data,
  status,
  setStakeState,
  stakeState,
  setTotalWinAmount,
  setShowWinLossResult,
  initialState,
}) => {
  const { eventId } = useParams();
  const { username, balance } = useSelector((state) => state.auth);
  const [addOrder] = useOrderMutation();
  const { stake } = useSelector((state) => state.global);
  const [showSuspendedWarning, setShowSuspendedWarning] = useState(false);
  const dispatch = useDispatch();

  const handleStakeChange = (payload) => {
    if (status === Status.OPEN) {
      handleStoreRecentPlay(username, eventId, "center-card");
      const isRepeatTheBet = Object.values(stakeState).find(
        (item) => item?.selection_id && item?.show === false,
      );
      if (isRepeatTheBet) {
        setStakeState(initialState);
      }
      // new Audio("/bet.mp3").play();
      const { key, data, dataIndex, runnerIndex, type } = payload;

      const formatData = {
        marketId: data?.[dataIndex]?.marketId,
        roundId: data?.[dataIndex]?.roundId,
        name: data?.[dataIndex]?.name,
        eventId: data?.[dataIndex]?.eventId,
        eventName: data?.[dataIndex]?.eventName,
        selection_id: data?.[dataIndex]?.runners?.[runnerIndex]?.id,
        runner_name: data?.[dataIndex]?.runners?.[runnerIndex]?.name,
        isback: type === "back" ? 0 : 1,
        event_id: data?.[dataIndex]?.eventId,
        event_type_id: data?.[dataIndex]?.event_type_id,
        price: data?.[dataIndex]?.runners?.[runnerIndex]?.[type]?.[0]?.price,
      };
      const timeout = setTimeout(() => {
        setStakeState((prev) => {
          const maxSerial = Math.max(
            0,
            ...Object.values(prev)
              .map((item) => item.serial)
              .filter((serial) => serial !== undefined),
          );

          return {
            ...prev,
            [key]: {
              roundId: formatData?.roundId,
              name: formatData?.name,
              eventId: formatData?.eventId,
              eventName: formatData?.eventName,
              show: true,
              animation: false,
              stake: prev[key]?.show
                ? prev[key].stake + prev[key].actionBy
                : prev[key].stake,
              marketId: formatData?.marketId,
              selection_id: formatData?.selection_id,
              price: formatData?.price,
              runner_name: formatData?.runner_name,
              isback: formatData?.isback,
              serial: prev[key]?.serial ? prev[key]?.serial : maxSerial + 1,
              actionBy: stake,
              undo: [...(prev[key]?.undo || []), stake],
            },
          };
        });
      }, 500);

      return () => clearTimeout(timeout);
    }
  };

  // Reset state when status is OPEN
  useEffect(() => {
    if (status === Status.OPEN) {
      setStakeState((prev) => {
        const updatedState = { ...prev };
        Object.keys(updatedState).forEach((key) => {
          if (updatedState[key].show) {
            updatedState[key] = {
              ...updatedState[key],
              show: false,
            };
          }
        });
        return updatedState;
      });
    }
    if (showSuspendedWarning) {
      setTimeout(() => {
        setShowSuspendedWarning(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, showSuspendedWarning]);

  useEffect(() => {
    setStakeState((prev) => {
      const updatedState = {};
      for (const key in prev) {
        updatedState[key] = {
          ...prev[key],
          stake: prev[key].show ? prev[key].stake : stake,
          actionBy: stake,
        };
      }
      return updatedState;
    });
  }, [stake]); // Runs when stake value changes

  useEffect(() => {
    const filterPlacedBet = Object.values(stakeState).filter((bet) => bet.show);
    let payload = filterPlacedBet.map((bet) => ({
      roundId: bet?.roundId,
      name: bet?.name,
      eventId: bet?.eventId,
      eventName: bet?.eventName,
      marketId: bet?.marketId,
      selection_id: bet?.selection_id,
      runner_name: bet?.runner_name,
      stake: bet?.stake,
      isback: bet?.isback,
      price: bet?.price,
    }));

    if (status === Status.SUSPENDED && payload?.length > 0) {
      const handleOrder = async () => {
        const res = await addOrder(payload).unwrap();

        payload = [];
        if (res?.success) {
          setShowWinLossResult(false);
          setTotalWinAmount(null);

          let totalBets = [];
          let totalAmountPlaced = 0;

          for (let bet of filterPlacedBet) {
            totalAmountPlaced = totalAmountPlaced + bet?.stake;
            totalBets.push({
              selection_id: bet.selection_id,
              price: bet?.price,
              eventId: bet?.eventId,
              marketId: bet?.marketId,
              name: bet?.name,
              stake: bet?.stake,
            });
          }

          localStorage.setItem("totalBetPlace", JSON.stringify(totalBets));

          dispatch(setBalance(balance - parseFloat(totalAmountPlaced)));
        }
      };
      handleOrder();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addOrder, status]);

  return (
    <div
      data-v-12491877
      data-v-3e382ff1
      className="bet-area"
      style={{ opacity: 1 }}
    >
      <div data-v-12491877 className="bet-row row-second">
        <div
          onClick={() =>
            handleStakeChange({
              key: "centerYes",
              data,
              dataIndex: 0,
              runnerIndex: 0,
              type: "back",
            })
          }
          data-v-3aa2fe16
          data-v-12491877
          className="flex fdr-c ai-c bet-item bet-column second-row red"
        >
          <div
            data-v-a792280e
            data-v-3aa2fe16
            className="text-container item-name-style"
            style={{ height: "31px" }}
          >
            <span
              data-v-a792280e
              className="text-content isDark isDarkBig"
              style={{ fontSize: "27px" }}
            >
              {data?.[0]?.runners[0]?.name}
            </span>
            <span
              data-v-a792280e
              className="text-content overlay"
              style={{ fontSize: "27px" }}
            >
              {data?.[0]?.runners[0]?.name}
            </span>
          </div>
          <span data-v-3aa2fe16 className="item-odds">
            {data?.[0]?.runners[0]?.back?.[0]?.price}
          </span>
          <img
            data-v-103f45dc
            data-v-3aa2fe16
            className="cg_icon item-help center"
            src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_help.png.webp"
            style={{ width: "var(--cg-px-28)", display: "none" }}
          />

          <Stake runner="centerYes" stakeState={stakeState} />

          <div
            data-v-3aa2fe16
            className="win-effect flashing"
            style={{ display: "none" }}
          />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "centerNo",
              data,
              dataIndex: 1,
              runnerIndex: 0,
              type: "back",
            })
          }
          data-v-3aa2fe16
          data-v-12491877
          className="flex fdr-c ai-c bet-item bet-column second-row blue"
        >
          <div
            data-v-a792280e
            data-v-3aa2fe16
            className="text-container item-name-style"
            style={{ height: "31px" }}
          >
            <span
              data-v-a792280e
              className="text-content isDark isDarkBig"
              style={{ fontSize: "25px" }}
            >
              {data?.[1]?.runners[0]?.name}
            </span>
            <span
              data-v-a792280e
              className="text-content overlay"
              style={{ fontSize: "25px" }}
            >
              {data?.[1]?.runners[0]?.name}
            </span>
          </div>
          <span data-v-3aa2fe16 className="item-odds">
            {data?.[1]?.runners[0]?.back?.[0]?.price}
          </span>
          <img
            data-v-103f45dc
            data-v-3aa2fe16
            className="cg_icon item-help center"
            src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_help.png.webp"
            style={{ width: "var(--cg-px-28)", display: "none" }}
          />

          <Stake runner="centerNo" stakeState={stakeState} />

          <div
            data-v-3aa2fe16
            className="win-effect flashing"
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BetArea;
