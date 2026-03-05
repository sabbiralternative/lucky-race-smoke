import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useOrderMutation } from "../../../../redux/features/events/events";
import { Status } from "../../../../const";
import { handleStoreRecentPlay } from "../../../../utils/handleStorateRecentPlay";
import { setBalance } from "../../../../redux/features/auth/authSlice";
import { keyNames } from "./const";
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
    console.log(status);
    if (status === Status.OPEN || status === Status.SUSPENDED || !status) {
      handleStoreRecentPlay(username, eventId, "roulette");
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

  console.log(stakeState);

  return (
    <div
      data-v-12491877
      data-v-3e382ff1
      className="bet-area"
      style={{ opacity: 1 }}
    >
      <div
        className={`absolute h-[70%]  origin-bottom  flex flex-col justify-end items-center px-2 w-full mx-auto gap-1 perspective transition-all ease-in-out duration-1000 bottom-36   scale-[92%] lg:scale-[70%] ${
          status === Status.SUSPENDED ? "applyPerspective----" : ""
        }`}
      >
        <span className>
          <div className="flex justify-center items-start  w-full h-full mx-auto transition-all ease-in-out  duration-1000 ">
            <div className="grid grid-cols-2 mt-[15px] min-h-[416px] lg:min-h-[601px]  grid-rows-13 w-[70px] ">
              <div
                onClick={() =>
                  handleStakeChange({
                    key: keyNames.oneToEighteen,
                    data,
                    dataIndex: 0,
                    runnerIndex: 0,
                    type: "back",
                  })
                }
                className="relative flex flex-col items-center justify-center border-l-[1px]  border-b-[1px] border-gold bg-[#64646452]   
               border-t-[1px]
               col-span-1 row-span-2
               "
                id="1to18"
              >
                <span
                  className="absolute whitespace-nowrap uppercase  -rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white
                  -rotate-90 
                  "
                >
                  <span>1-18</span>
                </span>
                <div className="absolute bottom-1/2 lg:rotate-90 scale-[60%] origin-center z-50 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <Stake
                    runner={keyNames.oneToEighteen}
                    stakeState={stakeState}
                  />
                </div>
              </div>
              <div
                onClick={() =>
                  handleStakeChange({
                    key: keyNames.firstTwelve,
                    data,
                    dataIndex: 0,
                    runnerIndex: 0,
                    type: "back",
                  })
                }
                className="relative flex flex-col items-center justify-center border-l-[1px]  border-b-[1px] border-gold bg-[#64646452]   
               border-t-[1px]
               col-span-1 row-span-4 
               "
                id="1st12"
              >
                <span
                  className="absolute whitespace-nowrap uppercase  -rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white
                  -rotate-90 
                  "
                >
                  <span>
                    1<sup className="lowercase">st </sup>12
                  </span>
                </span>
                <div className="absolute bottom-1/2 lg:rotate-90 scale-[60%] origin-center z-50 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <Stake
                    runner={keyNames.firstTwelve}
                    stakeState={stakeState}
                  />
                </div>
              </div>
              <div
                onClick={() =>
                  handleStakeChange({
                    key: keyNames.even,
                    data,
                    dataIndex: 0,
                    runnerIndex: 0,
                    type: "back",
                  })
                }
                className="relative flex flex-col items-center justify-center border-l-[1px]  border-b-[1px] border-gold bg-[#64646452]   
               col-span-1 row-span-2
               "
                id="even"
              >
                <span
                  className="absolute whitespace-nowrap uppercase  -rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white
                  -rotate-90 
                  "
                >
                  even
                </span>
                <div className="absolute bottom-1/2 lg:rotate-90 scale-[60%] origin-center z-50 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <Stake runner={keyNames.even} stakeState={stakeState} />
                </div>
              </div>
              <div
                onClick={() =>
                  handleStakeChange({
                    key: keyNames.red,
                    data,
                    dataIndex: 0,
                    runnerIndex: 0,
                    type: "back",
                  })
                }
                className="relative flex flex-col items-center justify-center border-l-[1px]  border-b-[1px] border-gold bg-[#64646452]   
               col-span-1 row-span-2
               "
                id="red"
              >
                <span
                  className="absolute whitespace-nowrap uppercase  -rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white
                  text-[10px]
                  -rotate-90 
                  "
                >
                  red
                </span>
                <div className="absolute bottom-1/2 lg:rotate-90 scale-[60%] origin-center z-50 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <Stake runner={keyNames.red} stakeState={stakeState} />
                </div>
                <span className="rotate-90 absolute">
                  <div
                    className="w-[40px] border-2 border-white/70 aspect-square  bg-[#f3090999]"
                    style={{ transform: "rotateX(60deg) rotateZ(45deg)" }}
                  />
                </span>
              </div>
              <div
                onClick={() =>
                  handleStakeChange({
                    key: keyNames.secondTwelve,
                    data,
                    dataIndex: 0,
                    runnerIndex: 0,
                    type: "back",
                  })
                }
                className="relative flex flex-col items-center justify-center border-l-[1px]  border-b-[1px] border-gold bg-[#64646452]   
               col-span-1 row-span-4 
               "
                id="2nd12"
              >
                <span
                  className="absolute whitespace-nowrap uppercase  -rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white
                  -rotate-90 
                  "
                >
                  <span>
                    2<sup className="lowercase">nd </sup>12
                  </span>
                </span>
                <div className="absolute bottom-1/2 lg:rotate-90 scale-[60%] origin-center z-50 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <Stake
                    runner={keyNames.secondTwelve}
                    stakeState={stakeState}
                  />
                </div>
              </div>
              <div
                onClick={() =>
                  handleStakeChange({
                    key: keyNames.black,
                    data,
                    dataIndex: 0,
                    runnerIndex: 0,
                    type: "back",
                  })
                }
                className="relative flex flex-col items-center justify-center border-l-[1px]  border-b-[1px] border-gold bg-[#64646452]   
               col-span-1 row-span-2
               "
                id="black"
              >
                <span
                  className="absolute whitespace-nowrap uppercase  -rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white
                  text-[10px]
                  -rotate-90 
                  "
                >
                  black
                </span>
                <div className="absolute bottom-1/2 lg:rotate-90 scale-[60%] origin-center z-50 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <Stake runner={keyNames.black} stakeState={stakeState} />
                </div>
                <span className="rotate-90 absolute">
                  <div
                    className="w-[40px] border-2 border-white/70 aspect-square  bg-black"
                    style={{ transform: "rotateX(60deg) rotateZ(45deg)" }}
                  />
                </span>
              </div>
              <div
                onClick={() =>
                  handleStakeChange({
                    key: keyNames.odd,
                    data,
                    dataIndex: 0,
                    runnerIndex: 0,
                    type: "back",
                  })
                }
                className="relative flex flex-col items-center justify-center border-l-[1px]  border-b-[1px] border-gold bg-[#64646452]   
               col-span-1 row-span-2
               "
                id="odd"
              >
                <span
                  className="absolute whitespace-nowrap uppercase  -rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white
                  -rotate-90 
                  "
                >
                  odd
                </span>
                <div className="absolute bottom-1/2 lg:rotate-90 scale-[60%] origin-center z-50 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <Stake runner={keyNames.odd} stakeState={stakeState} />
                </div>
              </div>
              <div
                onClick={() =>
                  handleStakeChange({
                    key: keyNames.thirdTwelve,
                    data,
                    dataIndex: 0,
                    runnerIndex: 0,
                    type: "back",
                  })
                }
                className="relative flex flex-col items-center justify-center border-l-[1px]  border-b-[1px] border-gold bg-[#64646452]   
               col-span-1 row-span-4 
               "
                id="3rd12"
              >
                <span
                  className="absolute whitespace-nowrap uppercase  -rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white
                  -rotate-90 
                  "
                >
                  <span>
                    3<sup className="lowercase">rd </sup>12
                  </span>
                </span>
                <div className="absolute bottom-1/2 lg:rotate-90 scale-[60%] origin-center z-50 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <Stake
                    runner={keyNames.thirdTwelve}
                    stakeState={stakeState}
                  />
                </div>
              </div>
              <div
                onClick={() =>
                  handleStakeChange({
                    key: keyNames.nineteenToThirtySix,
                    data,
                    dataIndex: 0,
                    runnerIndex: 0,
                    type: "back",
                  })
                }
                className="relative flex flex-col items-center justify-center border-l-[1px]  border-b-[1px] border-gold bg-[#64646452]   
               col-span-1 row-span-2
               "
                id="19to36"
              >
                <span
                  className="absolute whitespace-nowrap uppercase  -rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white
                  -rotate-90 
                  "
                >
                  <span>19-36</span>
                </span>
                <div className="absolute bottom-1/2 lg:rotate-90 scale-[60%] origin-center z-50 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <Stake
                    runner={keyNames.nineteenToThirtySix}
                    stakeState={stakeState}
                  />
                </div>
              </div>
            </div>
            <span className="relative flex flex-col ">
              <span
                className="absolute aspect-square w-[148px] -top-[74px]   -z-10 left-[31px] border-[4px] border-gold bg-[#5ea94f] "
                style={{ transform: "rotateX(82deg) rotateZ(46deg)" }}
              />
              <div
                onClick={() =>
                  handleStakeChange({
                    key: keyNames.zero,
                    data,
                    dataIndex: 0,
                    runnerIndex: 0,
                    type: "back",
                  })
                }
              >
                <div
                  id={0}
                  className="flex relative  bg-[#5ea94f]  h-4 justify-center items-end text-white border-x-[1px] border-b-[1px] border-gold
                  "
                >
                  0
                  <div className="absolute bottom-[90%] lg:rotate-90   scale-[60%] origin-center z-50 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <Stake runner={keyNames.zero} stakeState={stakeState} />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 grid-rows-13   w-[210px] min-h-[450px]   lg:min-h-[600px]  ">
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.one,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#ea1e1ee8]
                  "
                  id={1}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    1
                  </span>
                  <div className="absolute absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.one} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.two,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#060606]
                  "
                  id={2}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    2
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.two} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.three,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  border-r-[1px]
                  bg-[#ea1e1ee8]
                  "
                  id={3}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    3
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.three} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.four,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#060606]
                  "
                  id={4}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    4
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.four} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.five,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#ea1e1ee8]
                  "
                  id={5}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    5
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.five} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.six,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  border-r-[1px]
                  bg-[#060606]
                  "
                  id={6}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    6
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.six} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.seven,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#ea1e1ee8]
                  "
                  id={7}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    7
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.seven} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.eight,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#060606]
                  "
                  id={8}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    8
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.eight} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.nine,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  border-r-[1px]
                  bg-[#ea1e1ee8]
                  "
                  id={9}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    9
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.nine} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.ten,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#060606]
                  "
                  id={10}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    10
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.ten} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.eleven,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#060606]
                  "
                  id={11}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    11
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.eleven} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.twelve,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  border-r-[1px]
                  bg-[#ea1e1ee8]
                  "
                  id={12}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    12
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.twelve} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.thirteen,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#060606]
                  "
                  id={13}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    13
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.thirteen} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.fourteen,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#ea1e1ee8]
                  "
                  id={14}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    14
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.fourteen} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.fifteen,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  border-r-[1px]
                  bg-[#060606]
                  "
                  id={15}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    15
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.fifteen} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.sixteen,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#ea1e1ee8]
                  "
                  id={16}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    16
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.sixteen} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.seventeen,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#060606]
                  "
                  id={17}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    17
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.seventeen}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.eighteen,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  border-r-[1px]
                  bg-[#ea1e1ee8]
                  "
                  id={18}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    18
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.eighteen} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.nineteen,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#ea1e1ee8]
                  "
                  id={19}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    19
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.nineteen} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.twenty,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#060606]
                  "
                  id={20}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    20
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.twenty} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.twentyOne,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  border-r-[1px]
                  bg-[#ea1e1ee8]
                  "
                  id={21}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    21
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.twentyOne}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.twentyTwo,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#060606]
                  "
                  id={22}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    22
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.twentyTwo}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.twentyThree,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#ea1e1ee8]
                  "
                  id={23}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    23
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.twentyThree}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.twentyFour,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  border-r-[1px]
                  bg-[#060606]
                  "
                  id={24}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    24
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.twentyFour}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.twentyFive,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#ea1e1ee8]
                  "
                  id={25}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    25
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.twentyFive}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.twentySix,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#060606]
                  "
                  id={26}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    26
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.twentySix}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.twentySeven,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  border-r-[1px]
                  bg-[#ea1e1ee8]
                  "
                  id={27}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    27
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.twentySeven}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.twentyEight,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#060606]
                  "
                  id={28}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    28
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.twentyEight}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.twentyNine,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#060606]
                  "
                  id={29}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    29
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.twentyNine}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.thirty,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  border-r-[1px]
                  bg-[#ea1e1ee8]
                  "
                  id={30}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    30
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake runner={keyNames.thirty} stakeState={stakeState} />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.thirtyOne,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#060606]
                  "
                  id={31}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    31
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.thirtyOne}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.thirtyTwo,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#ea1e1ee8]
                  "
                  id={32}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    32
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.thirtyTwo}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.thirtyThree,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  border-r-[1px]
                  bg-[#060606]
                  "
                  id={33}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    33
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.thirtyThree}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.thirtyFour,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#ea1e1ee8]
                  "
                  id={34}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    34
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.thirtyFour}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.thirtyFive,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#060606]
                  "
                  id={35}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    35
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.thirtyFive}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.thirtySix,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  border-r-[1px]
                  bg-[#ea1e1ee8]
                  "
                  id={36}
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    36
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.thirtySix}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.oneToThirtyFour,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#64646452]
                  "
                  id="1-34"
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    1-34
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.oneToThirtyFour}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.twoToThirtyFive,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  bg-[#64646452]
                  "
                  id="2-35"
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    2-35
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.twoToThirtyFive}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
                <div
                  onClick={() =>
                    handleStakeChange({
                      key: keyNames.threeToThirtySix,
                      data,
                      dataIndex: 0,
                      runnerIndex: 0,
                      type: "back",
                    })
                  }
                  className="relative  flex flex-col items-center justify-center  border-l-[1px]  border-b-[1px] border-gold   
                  border-r-[1px]
                  bg-[#64646452]
                  "
                  id="3-36"
                >
                  <span className="absolute lg:rotate-90 top-0 z-20 left-0 flex items-center justify-center w-full h-full  text-white">
                    3-36
                  </span>
                  <div className=" absolute lg:rotate-90  origin-center z-50 scale-[60%]">
                    <Stake
                      runner={keyNames.threeToThirtySix}
                      stakeState={stakeState}
                    />
                  </div>
                </div>
              </div>
            </span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default BetArea;
