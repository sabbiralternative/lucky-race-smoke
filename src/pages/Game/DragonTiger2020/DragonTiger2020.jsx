import { useParams } from "react-router-dom";
import BetArea from "./BetArea";
import BetHeader from "./BetHeader";
import CardDisplay from "./CardDisplay";
import Chip from "./Chip";
import GoodRoad from "./GoodRoad";
import LiveShowTopPart from "./LiveShowTopPart";
import ResultDisplay from "./ResultDisplay";
import ScoreDisplay from "./ScoreDisplay";
import { useGetEventDetailsQuery } from "../../../redux/features/events/events";

const DragonTiger2020 = () => {
  const { eventTypeId, eventId } = useParams();
  const { data } = useGetEventDetailsQuery(
    { eventTypeId, eventId },
    { pollingInterval: 1000 },
  );
  console.log(data);

  return (
    <div id="App" data-v-app style={{ width: "100%", height: "100%" }}>
      <div data-v-1971eb1e className="app-root">
        <div data-v-a2a30962 data-v-1971eb1e className="default-layout">
          <div data-v-a2a30962 className="default-layout__content">
            <div data-v-3e382ff1 className="subclass">
              <LiveShowTopPart />

              <div data-v-3e382ff1 className="bet-wrapper">
                <BetHeader />
                <BetArea />
                <Chip />
                <div
                  data-v-18259776
                  data-v-3e382ff1
                  className="flex fdr-c ai-c bet-popup-wrapper"
                />

                {/* <div
                  data-v-6c15a629
                  data-v-3e382ff1
                  className="result-container"
                >
                  <ScoreDisplay />
                  <CardDisplay />
                  <ResultDisplay />
                  <div
                    data-v-6c15a629
                    className="win-aminate"
                    style={{ display: "none" }}
                  >
                    <div data-v-6c15a629>
                      <div data-v-6c15a629 className="win-aminate-nr">
                        <img
                          data-v-6c15a629
                          className="app-image w_a_n-bg"
                          src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/dark/banker-win-card-bg.png.webp"
                          loading="lazy"
                        />
                        <div data-v-6c15a629 className="w_a_nr">
                          <p data-v-6c15a629 className="w_a_n_p1">
                            Dragon Wins
                          </p>
                          <p data-v-6c15a629 className="w_a_n_p2">
                            {" "}
                            +0.00
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>

              <GoodRoad />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragonTiger2020;
