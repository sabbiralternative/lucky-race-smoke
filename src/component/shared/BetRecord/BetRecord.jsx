import { useCallback, useEffect, useRef, useState } from "react";
import { useGetHistory } from "../../../hooks/history";

const BetRecord = ({ setActiveTab, setRoundId, setEventId }) => {
  const [page, setPage] = useState(1);
  const [allHistoryData, setAllHistoryData] = useState([]); // Store all accumulated data
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const scrollableRef = useRef(null);

  const { data, isLoading } = useGetHistory({ page });

  // Handle new data when page changes
  useEffect(() => {
    if (data?.result?.length > 0) {
      if (page === 1) {
        // First page - replace all data
        setAllHistoryData(data.result);
      } else {
        // Subsequent pages - merge with existing data
        setAllHistoryData((prevData) => [...prevData, ...data.result]);
      }

      // Check if there's more data (assuming less than expected means no more data)
      if (data.result.length < 10) {
        // Assuming 10 is your page size
        setHasMore(false);
      }
    } else if (data?.result?.length === 0 && page > 1) {
      // No more data available
      setHasMore(false);
    }

    setLoading(false);
  }, [data, page]);

  // Scroll handler for pagination
  const handleScroll = useCallback(
    (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      const threshold = 5; // pixels from bottom to trigger load

      if (
        scrollHeight - scrollTop <= clientHeight + threshold &&
        !loading &&
        !isLoading &&
        hasMore
      ) {
        setLoading(true);
        setPage((prevPage) => prevPage + 1);
      }
    },
    [loading, isLoading, hasMore],
  );

  let totalBet = 0;
  let totalWinLoss = 0;
  if (allHistoryData?.length > 0) {
    totalBet = allHistoryData.reduce((acc, val) => acc + val.bet, 0);
    totalWinLoss = allHistoryData.reduce((acc, val) => acc + val.win_lose, 0);
  }
  const handleShowGameHistory = (item) => {
    setActiveTab("bet-details");
    setRoundId(item?.round_id);
    setEventId(item?.event_id);
  };
  return (
    <div
      data-v-caeac72a
      data-v-1f6a537f-s
      className="van-swipe-item"
      style={{ width: "100%" }}
    >
      <div
        data-v-490aa2c8
        className="flex fdr-c bet-record default-layout__content-no-padding popup-mode"
      >
        {/* <div
          data-v-490aa2c8
          className="flex jc-sb filter-menu popup-mode"
          style={{ marginTop: "var(--cg-px-0)" }}
        >
          <div
            data-v-0856d222
            data-v-490aa2c8
            className="dropdown-menu dropdown-menu-outer popup-mode"
            style={{ "--angle": "0deg" }}
          >
            <div
              data-v-e9080dee
              className="dropdown-item"
              style={{
                color: "rgb(51, 51, 51)",
                "--347d7fb0": "#333",
                "--325158f7": "#3395dc",
              }}
            >
              <div data-v-e9080dee className="flex ai-c title">
                All
              </div>
            </div>
          </div>
          <div data-v-490aa2c8 className="flex ai-c date-range-tabs popup-mode">
            <span data-v-490aa2c8 className="date-tab active">
              <a data-v-490aa2c8>Today</a>
              <span data-v-490aa2c8 className="divider">
                |
              </span>
            </span>
            <span data-v-490aa2c8 className="date-tab">
              <a data-v-490aa2c8>7 Day</a>
              <span data-v-490aa2c8 className="divider">
                |
              </span>
            </span>
            <span data-v-490aa2c8 className="date-tab">
              <a data-v-490aa2c8>30 Day</a>
            </span>
          </div>
        </div> */}
        <div
          ref={scrollableRef}
          onScroll={handleScroll}
          data-v-490aa2c8
          className="content"
          style={{ paddingBottom: "var(--cg-px-64)" }}
        >
          <div data-v-490aa2c8 className="summary-show">
            <div data-v-490aa2c8 className="summary-list">
              <div data-v-490aa2c8 className="sum-li">
                <div data-v-490aa2c8 className="s-nr">
                  <div data-v-490aa2c8 className="s-ti">
                    Total Bet Amount
                  </div>
                  <div data-v-490aa2c8 className="s-v">
                    {totalBet}
                  </div>
                </div>
              </div>
              <div data-v-490aa2c8 className="sum-li">
                <div data-v-490aa2c8 className="s-nr">
                  <div data-v-490aa2c8 className="s-ti">
                    Total Valid Turnover
                  </div>
                  <div data-v-490aa2c8 className="s-v">
                    0.00
                  </div>
                </div>
              </div>
              <div data-v-490aa2c8 className="sum-li">
                <div data-v-490aa2c8 className="s-nr">
                  <div data-v-490aa2c8 className="s-ti">
                    Total Win/Loss
                  </div>
                  <div data-v-490aa2c8 className="s-v">
                    {totalWinLoss}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-v-490aa2c8 className="cg-list">
            {allHistoryData?.map((item, index) => {
              return (
                <div
                  onClick={() => handleShowGameHistory(item)}
                  key={index}
                  className="van-pull-refresh"
                >
                  <div
                    className="van-pull-refresh__track"
                    style={{ transitionDuration: "0ms" }}
                  >
                    <div className="van-pull-refresh__head" />

                    <div>
                      <div
                        data-v-490aa2c8
                        className="bet-record-item popup-mode"
                      >
                        <div data-v-1b966656 data-v-490aa2c8 className>
                          <div
                            data-v-1b966656
                            className="flex ai-c jc-sb top-section"
                          >
                            <div data-v-1b966656 className="flex ai-c bet-time">
                              <span data-v-1b966656 className="desc">
                                {item?.date}
                              </span>
                            </div>
                            <img
                              data-v-103f45dc
                              data-v-1b966656
                              className="cg_icon"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_arrow_right.png.webp"
                              style={{
                                width: "var(--cg-px-24)",
                              }}
                            />
                            <p data-v-1b966656 className="divider" />
                          </div>
                          <div data-v-1b966656 className="bottom-section">
                            <div data-v-1b966656 className="sec-row1">
                              <div data-v-1b966656 className="le">
                                <span data-v-1b966656 className="name">
                                  Bet Amount（INR）
                                </span>
                                <span data-v-1b966656 className="desc">
                                  {item?.bet}
                                </span>
                              </div>
                              <div data-v-1b966656 className="ri">
                                <span data-v-1b966656 className="name">
                                  Win Loss Amount
                                </span>
                                <span data-v-1b966656 className="desc">
                                  {item?.win_lose}
                                </span>
                              </div>
                            </div>
                            <div data-v-1b966656 className="sec-row2">
                              <span
                                data-v-1b966656
                                className="desc"
                                style={{
                                  color:
                                    "var(--ag-bet-record-txt-color-result-player)",
                                }}
                              >
                                {item?.game}
                              </span>
                              {/* <div
                                data-v-1b966656
                                className="flex result-detail"
                              >
                                <span data-v-1b966656>D</span>
                                <span data-v-1b966656 className="card-span">
                                  ♣
                                </span>
                                <span data-v-1b966656>3</span>
                              </div> */}
                              {/* <div
                                data-v-1b966656
                                className="flex result-detail"
                              >
                                <span data-v-1b966656>T</span>
                                <span data-v-1b966656 className="card-span">
                                  ♠
                                </span>
                                <span data-v-1b966656>4</span>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bottom__observable"
                        style={{ height: "1px" }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            {!hasMore && (
              <div
                style={{
                  textAlign: "center",
                  padding: "20px",
                  color: "#fff",
                }}
              >
                No more data to load
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetRecord;
