import assets from "../../../assets";
import { useGetBets } from "../../../hooks/bets";

const BetRecordDetails = ({ eventId, roundId, setActiveTab }) => {
  const { data } = useGetBets({ round_id: roundId, eventId });

  let totalBet = 0;
  let totalWinLoss = 0;
  if (data?.result?.bet_details?.length > 0) {
    totalBet = data?.result?.bet_details.reduce(
      (acc, val) => acc + Number(val.bet),
      0,
    );
    totalWinLoss = data?.result?.bet_details.reduce(
      (acc, val) => acc + Number(val.win),
      0,
    );
  }

  return (
    <div data-v-4d436a68 data-v-547ebaa8-s className="item-view">
      <div
        data-v-281596bb
        data-v-4d436a68
        data-v-547ebaa8-s
        className="flex fdr-c bet-record-detail default-layout__content-no-padding popup-mode"
      >
        <header data-v-fe647d40 data-v-281596bb className="cg-header header">
          <div
            data-v-fe647d40
            className="header-left"
            onClick={() => setActiveTab("betRecord")}
          >
            <div data-v-fe647d40 className="leading-content">
              <img
                data-v-103f45dc
                data-v-281596bb
                data-v-fe647d40-s
                className="cg_icon back"
                src={assets.arrowLeft}
                style={{ width: "var(--cg-px-56)" }}
              />
            </div>
          </div>
          <div data-v-fe647d40 className="title">
            <div
              data-v-281596bb
              data-v-fe647d40-s
              className="flex ai-c title popup-mode"
            >
              Bet Detail
            </div>
          </div>
          <div data-v-fe647d40 className="header-right" />
        </header>
        <div data-v-281596bb className="content">
          <div
            data-v-36d328bc
            data-v-281596bb
            className="flex fdr-c bet-record-detail-content popup-mode"
          >
            <div data-v-36d328bc className="flex ai-c top-section">
              <div
                data-v-36d328bc
                className="flex fdr-c jc-s section popup-mode"
              >
                <span data-v-36d328bc className="name">
                  Bet Amount
                </span>
                <span data-v-36d328bc className="desc">
                  {totalBet}
                </span>
              </div>
              <div
                data-v-36d328bc
                className="flex fdr-c jc-s section not-first popup-mode"
              >
                <span data-v-36d328bc className="name">
                  Real Bet Amount
                </span>
                <span data-v-36d328bc className="desc">
                  {totalBet}
                </span>
              </div>
              <div
                data-v-36d328bc
                className="flex fdr-c jc-s section not-first popup-mode"
              >
                <span data-v-36d328bc className="name">
                  Win Loss Amount
                </span>
                <span data-v-36d328bc className="desc">
                  {totalWinLoss}
                </span>
              </div>
            </div>
            <div data-v-36d328bc className="flex middle-section">
              <div
                data-v-36d328bc
                className="flex fdr-c jc-s section popup-mode"
              >
                <span data-v-36d328bc className="name">
                  Bet Options
                </span>
                <p data-v-36d328bc className="desc bet-options">
                  {data?.result?.game_details?.table}
                </p>
              </div>
              <div
                data-v-36d328bc
                className="flex fdr-c jc-s section not-first popup-mode"
              >
                <span data-v-36d328bc className="name">
                  Game Winner
                </span>
                <span
                  data-v-36d328bc
                  className="desc"
                  style={{
                    color: "var(--ag-bet-record-txt-color-result-player)",
                  }}
                >
                  {data?.result?.game_details?.winner}
                </span>
                {/* <div data-v-36d328bc className="flex ai-c jc-s result-detail">
                  <span data-v-36d328bc>Dragon</span>
                  <img
                    data-v-36d328bc
                    className="app-image card-icon"
                    src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/common/dark/poker-club.png.webp"
                    loading="lazy"
                  />
                  <span data-v-36d328bc>3</span>
                </div>
                <div
                  data-v-36d328bc
                  className="flex ai-c jc-s result-detail last"
                >
                  <span data-v-36d328bc>Tiger</span>
                  <img
                    data-v-36d328bc
                    className="app-image card-icon"
                    src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/common/dark/poker-spade.png.webp"
                    loading="lazy"
                  />
                  <span data-v-36d328bc>4</span>
                </div> */}
              </div>
            </div>
            <p data-v-36d328bc className="divider" />
            <div data-v-36d328bc className="flex fdr-c ai-c bottom-section">
              <div data-v-36d328bc className="flex ai-c jc-sb info">
                <span data-v-36d328bc className="name">
                  Table Name
                </span>
                <span data-v-36d328bc className="desc">
                  {data?.result?.game_details?.table}
                </span>
              </div>

              <div data-v-36d328bc className="flex ai-c jc-sb info">
                <span data-v-36d328bc className="name">
                  Round ID
                </span>
                <span data-v-36d328bc className="desc">
                  {data?.result?.game_details?.game_number}
                </span>
              </div>

              <div data-v-36d328bc className="flex ai-c jc-sb info">
                <span data-v-36d328bc className="name">
                  Game Resolved
                </span>
                <span data-v-36d328bc className="desc">
                  {data?.result?.game_details?.game_resolved}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetRecordDetails;
