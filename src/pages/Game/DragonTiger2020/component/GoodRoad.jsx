import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setBalance } from "../../../../redux/features/auth/authSlice";

const GoodRoad = ({
  data,
  totalWinAmount,
  setTotalWinAmount,
  setShowWinLossResult,
  showWinLossResult,
  setCurrentRoundWinAmount,
}) => {
  const dispatch = useDispatch();
  const totalBetPlace = localStorage.getItem("totalBetPlace");
  const { eventId } = useParams();
  const { balance } = useSelector((state) => state.auth);

  let totalBetAmount = 0;
  if (totalBetPlace) {
    const parseTotalBet = JSON.parse(totalBetPlace);

    if (parseTotalBet?.length > 0) {
      const filterOrderByEventId = parseTotalBet?.filter(
        (order) => order?.eventId == eventId,
      );
      for (const order of filterOrderByEventId) {
        totalBetAmount = parseFloat((totalBetAmount + order?.stake).toFixed(2));
      }
    }
  }

  useEffect(() => {
    let totalWin = 0;

    if (totalBetPlace) {
      const parseTotalBet = JSON.parse(totalBetPlace);

      if (parseTotalBet && parseTotalBet.length > 0) {
        data?.forEach((games) => {
          games?.runners?.forEach((runner) => {
            if (runner?.status === "WINNER") {
              const winnerFilter = parseTotalBet?.filter(
                (order) =>
                  order?.selection_id === runner?.id &&
                  runner?.status === "WINNER",
              );

              const looserFilter = parseTotalBet?.filter(
                (order) =>
                  order?.selection_id === runner?.id &&
                  runner?.status === "ACTIVE",
              );

              let WinnerSum = 0;
              let looserSum = 0;
              if (looserFilter) {
                for (const looser of looserFilter) {
                  looserSum = looserSum + -looser?.stake;
                }
              }

              if (winnerFilter) {
                for (const winner of winnerFilter) {
                  WinnerSum += winner?.price * winner?.stake;
                }
              }

              totalWin += looserSum + WinnerSum;

              setTotalWinAmount(totalWin);
              setCurrentRoundWinAmount(totalWin);
              setShowWinLossResult(true);
            }
          });
        });
      }
    }
  }, [data, totalBetPlace]);

  useEffect(() => {
    if (totalBetPlace && (totalWinAmount != null || showWinLossResult)) {
      const parseTotalBet = JSON.parse(totalBetPlace);
      const filterOrderByEventId = parseTotalBet?.filter(
        (order) => order?.eventId == eventId,
      );
      if (totalWinAmount > 0 && filterOrderByEventId?.length > 0) {
        dispatch(setBalance(balance + parseFloat(totalWinAmount)));
        // if (sound) {
        //   playWinSound();
        // }
      }

      const filterCurrentEventBet = parseTotalBet?.filter(
        (bet) => bet?.eventId != eventId,
      );

      localStorage.setItem(
        "totalBetPlace",
        JSON.stringify(filterCurrentEventBet),
      );
    }
  }, [eventId, totalWinAmount, showWinLossResult]);
  return (
    <div
      data-v-2f0bdb7a
      data-v-3e382ff1
      className="good-road"
      style={{
        height: "auto",
        flex: "0 0 var(--cg-px-auto)",
        borderRadius: "var(--cg-px-0) var(--cg-px-0) 0 0",
      }}
    >
      <div data-v-2bbb8546 data-v-2f0bdb7a className="good-road-header">
        <div
          data-v-2bbb8546
          className="bet-settle-info"
          style={{ width: "calc(100% - var(--cg-px-184))" }}
        >
          <div data-v-2bbb8546 className="balance-info flex-info">
            <span data-v-2bbb8546>Balance(INR)</span>
            <p data-v-2bbb8546>786.50</p>
          </div>
          <div data-v-2bbb8546 className="bet-info flex-info">
            <span data-v-2bbb8546>Bet</span>
            <p data-v-2bbb8546>0.00</p>
          </div>
          <div data-v-2bbb8546 className="win-loss-info flex-info">
            <span data-v-2bbb8546>WinLose</span>
            <p data-v-2bbb8546 className>
              0.00
            </p>
          </div>
        </div>
        <div data-v-2bbb8546 className="good-road-recommendation">
          GoodRoad{" "}
          <span data-v-2bbb8546 className="good-road-num">
            13{" "}
            <span
              data-v-2bbb8546
              className="new-add-notice"
              style={{ display: "none" }}
            >
              +0
            </span>
          </span>
        </div>
      </div>
      <div data-v-2f0bdb7a className="good-road-body">
        <div data-v-2f0bdb7a className="good-road-content">
          <div data-v-2f0bdb7a className="bead-plate-road">
            <ul data-v-2f0bdb7a>
              <li data-v-2f0bdb7a>
                <div data-v-2f0bdb7a className="bead-plate-row dragonrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-dragoncurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp dragoncurp dragonDGcurp"
                    >
                      D
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row tigerrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tigercurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tigercurp tigerDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row tigerrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tigercurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tigercurp tigerDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row tigerrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tigercurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tigercurp tigerDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row tigerrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tigercurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tigercurp tigerDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row tierow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tiecurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tiecurp tieDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
              </li>
              <li data-v-2f0bdb7a>
                <div data-v-2f0bdb7a className="bead-plate-row tigerrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tigercurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tigercurp tigerDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row tigerrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tigercurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tigercurp tigerDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row tigerrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tigercurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tigercurp tigerDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row dragonrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-dragoncurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp dragoncurp dragonDGcurp"
                    >
                      D
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row dragonrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-dragoncurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp dragoncurp dragonDGcurp"
                    >
                      D
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row dragonrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-dragoncurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp dragoncurp dragonDGcurp"
                    >
                      D
                    </p>
                  </div>
                </div>
              </li>
              <li data-v-2f0bdb7a>
                <div data-v-2f0bdb7a className="bead-plate-row dragonrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-dragoncurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp dragoncurp dragonDGcurp"
                    >
                      D
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row tigerrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tigercurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tigercurp tigerDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row dragonrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-dragoncurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp dragoncurp dragonDGcurp"
                    >
                      D
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row tigerrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tigercurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tigercurp tigerDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row tigerrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tigercurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tigercurp tigerDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row tigerrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tigercurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tigercurp tigerDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
              </li>
              <li data-v-2f0bdb7a>
                <div data-v-2f0bdb7a className="bead-plate-row tigerrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tigercurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tigercurp tigerDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row dragonrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-dragoncurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp dragoncurp dragonDGcurp"
                    >
                      D
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row tigerrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tigercurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tigercurp tigerDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row tigerrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tigercurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tigercurp tigerDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row dragonrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-dragoncurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp dragoncurp dragonDGcurp"
                    >
                      D
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row dragonrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-dragoncurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp dragoncurp dragonDGcurp"
                    >
                      D
                    </p>
                  </div>
                </div>
              </li>
              <li data-v-2f0bdb7a>
                <div data-v-2f0bdb7a className="bead-plate-row dragonrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-dragoncurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp dragoncurp dragonDGcurp"
                    >
                      D
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row tierow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tiecurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tiecurp tieDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row tigerrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tigercurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tigercurp tigerDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row dragonrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-dragoncurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp dragoncurp dragonDGcurp"
                    >
                      D
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row tierow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tiecurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tiecurp tieDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row tigerrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-tigercurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp tigercurp tigerDGcurp"
                    >
                      T
                    </p>
                  </div>
                </div>
              </li>
              <li data-v-2f0bdb7a>
                <div data-v-2f0bdb7a className="bead-plate-row dragonrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-dragoncurr"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp dragoncurp dragonDGcurp"
                    >
                      D
                    </p>
                  </div>
                </div>
                <div data-v-2f0bdb7a className="bead-plate-row dragonrow">
                  <div
                    data-v-2f0bdb7a
                    className="bead-plate-basecurr bead-plate-dragoncurr last"
                  >
                    <p
                      data-v-2f0bdb7a
                      className="bead-plate-basecurp dragoncurp dragonDGcurp"
                    >
                      D
                    </p>
                  </div>
                </div>
                <div
                  data-v-2f0bdb7a
                  className="bead-plate-row bead-plate-background"
                >
                  <div data-v-2f0bdb7a className>
                    <p data-v-2f0bdb7a className />
                  </div>
                </div>
                <div
                  data-v-2f0bdb7a
                  className="bead-plate-row bead-plate-background"
                >
                  <div data-v-2f0bdb7a className>
                    <p data-v-2f0bdb7a className />
                  </div>
                </div>
                <div
                  data-v-2f0bdb7a
                  className="bead-plate-row bead-plate-background"
                >
                  <div data-v-2f0bdb7a className>
                    <p data-v-2f0bdb7a className />
                  </div>
                </div>
                <div
                  data-v-2f0bdb7a
                  className="bead-plate-row bead-plate-background"
                >
                  <div data-v-2f0bdb7a className>
                    <p data-v-2f0bdb7a className />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div data-v-2f0bdb7a className="big-small-road">
            <ul data-v-2f0bdb7a>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
              <li data-v-2f0bdb7a>
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
                <div
                  data-v-2f0bdb7a
                  className="big-small-row big-small-background"
                />
              </li>
            </ul>
            <div data-v-2f0bdb7a className="big-road">
              <ul data-v-2f0bdb7a>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div
                      data-v-2f0bdb7a
                      className="basecurr big-tigercurr last"
                    >
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        5
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        J
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        Q
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragoncurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragoncurp big-dragonDGcurp"
                      >
                        5
                      </p>
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragoncurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragoncurp big-dragonDGcurp"
                      >
                        K
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        5
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragoncurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragoncurp big-dragonDGcurp"
                      >
                        9
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragon1curr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragon1curp big-dragonDGcurp"
                      >
                        9
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        Q
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragoncurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragoncurp big-dragonDGcurp"
                      >
                        7
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragoncurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragoncurp big-dragonDGcurp"
                      >
                        Q
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        J
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        10
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        10
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tiger1curr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tiger1curp big-tigerDGcurp"
                      >
                        3
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        9
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        10
                      </p>
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragoncurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragoncurp big-dragonDGcurp"
                      >
                        6
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragoncurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragoncurp big-dragonDGcurp"
                      >
                        10
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragoncurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragoncurp big-dragonDGcurp"
                      >
                        3
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragoncurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragoncurp big-dragonDGcurp"
                      >
                        5
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        10
                      </p>
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        K
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragoncurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragoncurp big-dragonDGcurp"
                      >
                        J
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        7
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        10
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        3
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        J
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragoncurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragoncurp big-dragonDGcurp"
                      >
                        Q
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        8
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        Q
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragoncurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragoncurp big-dragonDGcurp"
                      >
                        8
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragoncurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragoncurp big-dragonDGcurp"
                      >
                        3
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragon1curr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragon1curp big-dragonDGcurp"
                      >
                        8
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        7
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragon1curr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragon1curp big-dragonDGcurp"
                      >
                        8
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row tigerrow">
                    <div data-v-2f0bdb7a className="basecurr big-tigercurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-tigercurp big-tigerDGcurp"
                      >
                        8
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragoncurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragoncurp big-dragonDGcurp"
                      >
                        10
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row dragonrow">
                    <div data-v-2f0bdb7a className="basecurr big-dragoncurr">
                      <p
                        data-v-2f0bdb7a
                        className="big-basecurp big-dragoncurp big-dragonDGcurp"
                      >
                        K
                      </p>
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
                <li data-v-2f0bdb7a>
                  <div data-v-2f0bdb7a className="row">
                    <div data-v-2f0bdb7a className>
                      <p data-v-2f0bdb7a className />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div data-v-2f0bdb7a className="bottom-three-road">
              <div data-v-2f0bdb7a className="big-eye-road">
                <ul data-v-2f0bdb7a>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row patternedrow big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-patternedcurr last"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row patternedrow big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row patternedrow big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row patternedrow big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row randomrow big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row patternedrow big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row patternedrow big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row patternedrow big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row randomrow big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row randomrow big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row patternedrow big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row randomrow big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row patternedrow big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row patternedrow big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row randomrow big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row randomrow big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row randomrow big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row randomrow big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row patternedrow big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row randomrow big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row randomrow big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row randomrow big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row patternedrow big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row patternedrow big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row randomrow big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even big-eye-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="big-eye-row row big-eye-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="big-eye-basecurr big-eye-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="big-eye-basecurp big-eye-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div data-v-2f0bdb7a className="small-road">
                <ul data-v-2f0bdb7a>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="small-row patternedrow small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-patternedcurr last"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="small-row randomrow small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="small-row patternedrow small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="small-row randomrow small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row randomrow small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row randomrow small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row randomrow small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="small-row patternedrow small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row patternedrow small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="small-row randomrow small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="small-row patternedrow small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row patternedrow small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="small-row randomrow small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row randomrow small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="small-row patternedrow small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="small-row randomrow small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row randomrow small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row randomrow small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="small-row patternedrow small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="small-row randomrow small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even small-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="small-row row small-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="small-basecurr small-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="small-basecurp small-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div data-v-2f0bdb7a className="cockroach-road">
                <ul data-v-2f0bdb7a>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row patternedrow cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-patternedcurr last"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row patternedrow cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row patternedrow cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row patternedrow cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row patternedrow cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row randomrow cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row randomrow cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row patternedrow cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row patternedrow cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row randomrow cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row randomrow cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row randomrow cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row patternedrow cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row patternedrow cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row patternedrow cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row randomrow cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row patternedrow cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row randomrow cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row randomrow cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row patternedrow cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row patternedrow cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row patternedrow cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row randomrow cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row patternedrow cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row patternedrow cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-patternedcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-patternedcurp patternedDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row randomrow cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row randomrow cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row randomrow cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-randomcurr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-randomcurp randomDGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-odd"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even cockroach-row-display"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                  <li data-v-2f0bdb7a>
                    <div
                      data-v-2f0bdb7a
                      className="cockroach-row row cockroach-row-even"
                    >
                      <div
                        data-v-2f0bdb7a
                        className="cockroach-basecurr cockroach-curr"
                      >
                        <p
                          data-v-2f0bdb7a
                          className="cockroach-basecurp cockroach-curp DGcurp"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div data-v-2f0bdb7a className="good-road-footer">
          <div data-v-2f0bdb7a className="game-num-wrap">
            <div data-v-2f0bdb7a className="game-num">
              <span data-v-2f0bdb7a className="text-name text-b">
                D
              </span>
              <span data-v-2f0bdb7a className="text-num-b">
                26
              </span>
            </div>
            <div data-v-2f0bdb7a className="game-num not-first-num">
              <span data-v-2f0bdb7a className="text-name text-p">
                T
              </span>
              <span data-v-2f0bdb7a className="text-num-p">
                34
              </span>
            </div>
            <div data-v-2f0bdb7a className="game-num not-first-num">
              <span data-v-2f0bdb7a className="text-name text-t">
                T
              </span>
              <span data-v-2f0bdb7a className="text-num-t">
                8
              </span>
            </div>

            <div data-v-2f0bdb7a className="game-num not-first-num">
              <span data-v-2f0bdb7a className="text-name text-all">
                T
              </span>
              <span data-v-2f0bdb7a className="text-num-all">
                68
              </span>
            </div>
          </div>
          <div
            data-v-2f0bdb7a
            className="flex ai-c jc-sb asked-road-wrap-container"
          >
            <div data-v-2f0bdb7a className="asked-road-wrap">
              <div data-v-2f0bdb7a className="asked-road banker-asked-road">
                <p data-v-2f0bdb7a className="asked-road-name">
                  Dragon
                </p>
                <div data-v-2f0bdb7a className="asked-road-content">
                  <div data-v-2f0bdb7a className="asked-road-container">
                    <div
                      data-v-2f0bdb7a
                      className="asked-road-basecurr big-eye-patternedcurr"
                    />
                  </div>
                  <div data-v-2f0bdb7a className="asked-road-container">
                    <div
                      data-v-2f0bdb7a
                      className="asked-road-basecurr small-patternedcurr"
                    />
                  </div>
                  <div data-v-2f0bdb7a className="asked-road-container">
                    <div
                      data-v-2f0bdb7a
                      className="asked-road-basecurr asked-road-cockroach-patternedcurr"
                    />
                  </div>
                </div>
              </div>
              <div data-v-2f0bdb7a className="asked-road player-asked-road">
                <p data-v-2f0bdb7a className="asked-road-name">
                  Tiger
                </p>
                <div data-v-2f0bdb7a className="asked-road-content">
                  <div data-v-2f0bdb7a className="asked-road-container">
                    <div
                      data-v-2f0bdb7a
                      className="asked-road-basecurr big-eye-randomcurr"
                    />
                  </div>
                  <div data-v-2f0bdb7a className="asked-road-container">
                    <div
                      data-v-2f0bdb7a
                      className="asked-road-basecurr small-randomcurr"
                    />
                  </div>
                  <div data-v-2f0bdb7a className="asked-road-container">
                    <div
                      data-v-2f0bdb7a
                      className="asked-road-basecurr asked-road-cockroach-randomcurr"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div data-v-2f0bdb7a className="flex fdr-c ai-fe jc-sb room-info">
              <span data-v-2f0bdb7a>7FRyww</span>
              <span data-v-2f0bdb7a>15229/68</span>
            </div>
          </div>
        </div>
      </div>
      <div data-v-5a0bd1da data-v-2f0bdb7a className="good-road-recommendation">
        <div data-v-399a7156 className="cg-select">
          <div data-v-399a7156 />
        </div>
        <div
          data-v-547ebaa8
          data-v-5c6b63b8
          data-v-5a0bd1da
          className="app-bottom-sheet"
        />
      </div>
    </div>
  );
};

export default GoodRoad;
