import { useDispatch, useSelector } from "react-redux";
import { useOrderMutation } from "../../../redux/features/events/events";
import { Status } from "../../../const";
import { handleStoreRecentPlay } from "../../../utils/handleStorateRecentPlay";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { setBalance } from "../../../redux/features/auth/authSlice";
import Stake from "../../../component/UI/Stake/Stake";

const BetArea = ({
  double,
  data,
  status,
  setStakeState,
  stakeState,
  setTotalWinAmount,
  setShowWinLossResult,
  animation,
  setAnimation,
  initialState,
}) => {
  const result = data?.[0]?.runners;
  const { eventId } = useParams();
  const { username, balance } = useSelector((state) => state.auth);
  const [addOrder] = useOrderMutation();
  const { stake } = useSelector((state) => state.global);
  const [showSuspendedWarning, setShowSuspendedWarning] = useState(false);
  const dispatch = useDispatch();

  const handleStakeChange = (payload) => {
    if (status === Status.OPEN || status === Status.SUSPENDED) {
      if (stakeState?.dragon?.show) {
        if (payload?.key === "tiger") {
          return;
        }
      }
      if (stakeState?.tiger?.show) {
        if (payload?.key === "dragon") {
          return;
        }
      }
      handleStoreRecentPlay(username, eventId, "dragon-tiger");
      const isRepeatTheBet = Object.values(stakeState).find(
        (item) => item?.selection_id && item?.show === false,
      );
      if (isRepeatTheBet) {
        setStakeState(initialState);
      }
      // if (sound) {
      //   playPlaceChip();
      // }
      const { key, data, dataIndex, runnerIndex, type } = payload;
      setAnimation([key]);
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
        setAnimation([]);
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

  console.log(data);
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
              key: "dragon",
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
              {result?.[0]?.name}
            </span>
            <span
              data-v-a792280e
              className="text-content overlay"
              style={{ fontSize: "27px" }}
            >
              {result?.[0]?.name}
            </span>
          </div>
          <span data-v-3aa2fe16 className="item-odds">
            {result?.[0]?.back?.[0]?.price}
          </span>
          <img
            data-v-103f45dc
            data-v-3aa2fe16
            className="cg_icon item-help center"
            src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_help.png.webp"
            style={{ width: "var(--cg-px-28)", display: "none" }}
          />
          <div data-v-3aa2fe16 className="bet-statics no-background">
            <img
              data-v-103f45dc
              data-v-3aa2fe16
              className="cg_icon gold-coin"
              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/i_gold_coin.png.webp"
              style={{ width: "var(--cg-px-20)" }}
            />
            <div data-v-3aa2fe16 className="bet-desc">
              <span data-v-3aa2fe16>9600 / 36</span>
            </div>
          </div>

          <div
            data-v-3aa2fe16
            className="bet-detail"
            style={{ display: "block" }}
          >
            <div
              data-v-3aa2fe16
              className="bet-chip-container"
              style={{ "--bottomRatio": "0.05" }}
            >
              {/* <div data-v-3aa2fe16 className="bet-chip-container__inner" /> */}
              <Stake runner="dragon" stake={stake} stakeState={stakeState} />
            </div>
            <div data-v-3aa2fe16 className="bet-amount">
              0
            </div>
          </div>
          <div
            data-v-3aa2fe16
            className="ratio-wrapper"
            data-ratio="0.21152363115566816"
            style={{
              "--ratio": "0.21152363115566816",
              "--last": "0.7884763688443318",
              "--stroke-color": "var(--ag-baccarat-stroke-color-bet-banker)",
            }}
          >
            <svg data-v-3aa2fe16 className="ratio" viewBox="0 0 44 44">
              <circle
                data-v-3aa2fe16
                className="circle"
                cx={22}
                cy={22}
                r={20}
              />
              <circle data-v-3aa2fe16 className="bar" cx={22} cy={22} r={20} />
            </svg>
          </div>
          <div
            data-v-3aa2fe16
            className="win-effect flashing"
            style={{ display: "none" }}
          />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "tie",
              data,
              dataIndex: 0,
              runnerIndex: 2,
              type: "back",
            })
          }
          data-v-3aa2fe16
          data-v-12491877
          className="flex fdr-c ai-c bet-item bet-column second-row green"
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
              {result?.[2]?.name}
            </span>
            <span
              data-v-a792280e
              className="text-content overlay"
              style={{ fontSize: "27px" }}
            >
              {result?.[2]?.name}
            </span>
          </div>
          <span data-v-3aa2fe16 className="item-odds">
            {result?.[2]?.back?.[0]?.price}
          </span>
          <img
            data-v-103f45dc
            data-v-3aa2fe16
            className="cg_icon item-help center"
            src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_help.png.webp"
            style={{ width: "var(--cg-px-28)", display: "none" }}
          />
          <div data-v-3aa2fe16 className="bet-statics no-background">
            <img
              data-v-103f45dc
              data-v-3aa2fe16
              className="cg_icon gold-coin"
              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/i_gold_coin.png.webp"
              style={{ width: "var(--cg-px-20)" }}
            />
            <div data-v-3aa2fe16 className="bet-desc">
              <span data-v-3aa2fe16>100 / 1</span>
            </div>
          </div>

          <div
            data-v-3aa2fe16
            className="bet-detail"
            style={{ display: "block" }}
          >
            <div
              data-v-3aa2fe16
              className="bet-chip-container"
              style={{ "--bottomRatio": "0.05" }}
            >
              {/* <div data-v-3aa2fe16 className="bet-chip-container__inner" /> */}
              <Stake runner="tie" stake={stake} stakeState={stakeState} />
            </div>
            <div data-v-3aa2fe16 className="bet-amount">
              0
            </div>
          </div>
          <div
            data-v-3aa2fe16
            className="ratio-wrapper"
            data-ratio="0.0022033711578715435"
            style={{
              "--ratio": "0.0022033711578715435",
              "--last": "0.9977966288421285",
              "--stroke-color": "var(--ag-baccarat-stroke-color-bet-tie)",
            }}
          >
            <svg data-v-3aa2fe16 className="ratio" viewBox="0 0 44 44">
              <circle
                data-v-3aa2fe16
                className="circle"
                cx={22}
                cy={22}
                r={20}
              />
              <circle data-v-3aa2fe16 className="bar" cx={22} cy={22} r={20} />
            </svg>
          </div>
          <div
            data-v-3aa2fe16
            className="win-effect flashing"
            style={{ display: "none" }}
          />
        </div>
        <div
          onClick={() =>
            handleStakeChange({
              key: "tiger",
              data,
              dataIndex: 0,
              runnerIndex: 1,
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
              style={{ fontSize: "27px" }}
            >
              {result?.[1]?.name}
            </span>
            <span
              data-v-a792280e
              className="text-content overlay"
              style={{ fontSize: "27px" }}
            >
              {result?.[1]?.name}
            </span>
          </div>
          <span data-v-3aa2fe16 className="item-odds">
            {result?.[1]?.back?.[0]?.price}
          </span>
          <img
            data-v-103f45dc
            data-v-3aa2fe16
            className="cg_icon item-help center"
            src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_help.png.webp"
            style={{ width: "var(--cg-px-28)", display: "none" }}
          />
          <div data-v-3aa2fe16 className="bet-statics no-background">
            <img
              data-v-103f45dc
              data-v-3aa2fe16
              className="cg_icon gold-coin"
              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/i_gold_coin.png.webp"
              style={{ width: "var(--cg-px-20)" }}
            />
            <div data-v-3aa2fe16 className="bet-desc">
              <span data-v-3aa2fe16>35K / 42</span>
            </div>
          </div>

          <div
            data-v-3aa2fe16
            className="bet-detail"
            style={{ display: "block" }}
          >
            <div
              data-v-3aa2fe16
              className="bet-chip-container"
              style={{ "--bottomRatio": "0.05" }}
            >
              {/* <div data-v-3aa2fe16 className="bet-chip-container__inner" /> */}
              <Stake runner="tiger" stake={stake} stakeState={stakeState} />
            </div>
            <div data-v-3aa2fe16 className="bet-amount">
              0
            </div>
          </div>
          <div
            data-v-3aa2fe16
            className="ratio-wrapper"
            data-ratio="0.7862729976864603"
            style={{
              "--ratio": "0.7862729976864603",
              "--last": "0.2137270023135397",
              "--stroke-color": "var(--ag-baccarat-stroke-color-bet-player)",
            }}
          >
            <svg data-v-3aa2fe16 className="ratio" viewBox="0 0 44 44">
              <circle
                data-v-3aa2fe16
                className="circle"
                cx={22}
                cy={22}
                r={20}
              />
              <circle data-v-3aa2fe16 className="bar" cx={22} cy={22} r={20} />
            </svg>
          </div>
          <div
            data-v-3aa2fe16
            className="win-effect flashing"
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div data-v-12491877 className="bet-row row-second">
        <div
          onClick={() =>
            handleStakeChange({
              key: "suitedTie",
              data,
              dataIndex: 0,
              runnerIndex: 3,
              type: "back",
            })
          }
          data-v-3aa2fe16
          data-v-12491877
          className="flex fdr-c ai-c bet-item bet-column second-row green"
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
              {result?.[3]?.name}
            </span>
            <span
              data-v-a792280e
              className="text-content overlay"
              style={{ fontSize: "27px" }}
            >
              {result?.[3]?.name}
            </span>
          </div>
          <span data-v-3aa2fe16 className="item-odds">
            {result?.[3]?.back?.[0]?.price}
          </span>
          <img
            data-v-103f45dc
            data-v-3aa2fe16
            className="cg_icon item-help center"
            src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_help.png.webp"
            style={{ width: "var(--cg-px-28)", display: "none" }}
          />
          <div data-v-3aa2fe16 className="bet-statics no-background">
            <img
              data-v-103f45dc
              data-v-3aa2fe16
              className="cg_icon gold-coin"
              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/i_gold_coin.png.webp"
              style={{ width: "var(--cg-px-20)" }}
            />
            <div data-v-3aa2fe16 className="bet-desc">
              <span data-v-3aa2fe16>100 / 1</span>
            </div>
          </div>

          <div
            data-v-3aa2fe16
            className="bet-detail"
            style={{ display: "block" }}
          >
            <div
              data-v-3aa2fe16
              className="bet-chip-container"
              style={{ "--bottomRatio": "0.05" }}
            >
              {/* <div data-v-3aa2fe16 className="bet-chip-container__inner" /> */}
              <Stake runner="suitedTie" stake={stake} stakeState={stakeState} />
            </div>
            <div data-v-3aa2fe16 className="bet-amount">
              0
            </div>
          </div>
          <div
            data-v-3aa2fe16
            className="ratio-wrapper"
            data-ratio="0.0022033711578715435"
            style={{
              "--ratio": "0.0022033711578715435",
              "--last": "0.9977966288421285",
              "--stroke-color": "var(--ag-baccarat-stroke-color-bet-tie)",
            }}
          >
            <svg data-v-3aa2fe16 className="ratio" viewBox="0 0 44 44">
              <circle
                data-v-3aa2fe16
                className="circle"
                cx={22}
                cy={22}
                r={20}
              />
              <circle data-v-3aa2fe16 className="bar" cx={22} cy={22} r={20} />
            </svg>
          </div>
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
