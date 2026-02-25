import { useParams } from "react-router-dom";

import BetHeader from "./component/BetHeader";
import CardDisplay from "./component/CardDisplay";
import LiveShowTopPart from "./component/LiveShowTopPart";
import ResultDisplay from "./component/ResultDisplay";
import ScoreDisplay from "./component/ScoreDisplay";
import { useGetEventDetailsQuery } from "../../../redux/features/events/events";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Status } from "../../../const";
import Winner from "./component/Winner";
import BetArea from "./component/BetArea";
import Chip from "./component/Chip";
import GoodRoad from "./component/GoodRoad";

const DragonTiger2020 = () => {
  const [double, setDouble] = useState(false);
  const [animation, setAnimation] = useState([]);
  const [showWinLossResult, setShowWinLossResult] = useState(false);
  const [totalWinAmount, setTotalWinAmount] = useState(null);
  const [currentRoundWinAmount, setCurrentRoundWinAmount] = useState(null);
  const { stake } = useSelector((state) => state.global);
  const initialState = {
    dragon: { show: false, stake },
    tiger: { show: false, stake },
    tie: { show: false, stake },
    suitedTie: { show: false, stake },
  };
  const [stakeState, setStakeState] = useState(initialState);
  const { eventTypeId, eventId } = useParams();
  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    { pollingInterval: 1000 },
  );

  const firstEvent = data?.result?.[0];

  return (
    <div id="App" data-v-app style={{ width: "100%", height: "100%" }}>
      <div data-v-1971eb1e className="app-root">
        <div data-v-a2a30962 data-v-1971eb1e className="default-layout">
          <div data-v-a2a30962 className="default-layout__content">
            <div data-v-3e382ff1 className="subclass">
              <LiveShowTopPart firstEvent={firstEvent} />

              <div data-v-3e382ff1 className="bet-wrapper">
                <BetHeader />
                <BetArea
                  initialState={initialState}
                  double={double}
                  animation={animation}
                  setAnimation={setAnimation}
                  setShowWinLossResult={setShowWinLossResult}
                  setTotalWinAmount={setTotalWinAmount}
                  stakeState={stakeState}
                  setStakeState={setStakeState}
                  data={data?.result}
                  status={firstEvent?.status}
                />
                <Chip />
                <div
                  data-v-18259776
                  data-v-3e382ff1
                  className="flex fdr-c ai-c bet-popup-wrapper"
                />
                {firstEvent?.status === Status.SUSPENDED && (
                  <div
                    data-v-6c15a629
                    data-v-3e382ff1
                    className="result-container"
                  >
                    <ScoreDisplay firstEvent={firstEvent} />
                    <CardDisplay firstEvent={firstEvent} />
                    <ResultDisplay firstEvent={firstEvent} />
                    <Winner
                      firstEvent={firstEvent}
                      currentRoundWinAmount={currentRoundWinAmount}
                    />
                  </div>
                )}
              </div>

              <GoodRoad
                showWinLossResult={showWinLossResult}
                setShowWinLossResult={setShowWinLossResult}
                setTotalWinAmount={setTotalWinAmount}
                totalWinAmount={totalWinAmount}
                data={data?.result}
                setCurrentRoundWinAmount={setCurrentRoundWinAmount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragonTiger2020;
