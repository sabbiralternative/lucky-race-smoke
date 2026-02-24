import { Fragment } from "react";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const BetRecord = ({ setShowBetRecord }) => {
  const onClose = () => {
    setShowBetRecord(false);
  };
  return (
    <Fragment>
      <div className="van-overlay" role="button" style={{ zIndex: 1001 }}></div>
      <ModalWrapper onClose={onClose}>
        <div
          role="dialog"
          tabIndex={0}
          className="van-popup van-popup--round van-popup--bottom"
          style={{ zIndex: 1001, height: "473.9px" }}
        >
          <div
            data-v-547ebaa8
            className="app-bottom-sheet__content"
            style={{
              height: "100%",
              overflow: "hidden auto",
              borderRadius: "var(--cg-px-16) var(--cg-px-16) 0 0",
              transform: "translateY(0px)",
            }}
          >
            <div
              data-v-a2006a2a
              data-v-547ebaa8-s
              className="history-in-game-container"
            >
              <div data-v-a2006a2a data-v-547ebaa8-s className="item-view">
                <div
                  data-v-490aa2c8
                  className="flex fdr-c bet-record default-layout__content-no-padding popup-mode history-in-game-mode"
                >
                  <header
                    data-v-fe647d40
                    data-v-490aa2c8
                    className="cg-header header"
                  >
                    <div data-v-fe647d40 className="header-left">
                      <div data-v-fe647d40 className="leading-content" />
                    </div>
                    <div data-v-fe647d40 className="title">
                      <div
                        data-v-490aa2c8
                        data-v-fe647d40-s
                        className="flex ai-c title"
                      >
                        Bet Record
                      </div>
                    </div>
                    <div
                      onClick={onClose}
                      data-v-fe647d40
                      className="header-right"
                    >
                      <img
                        data-v-103f45dc
                        data-v-490aa2c8
                        data-v-fe647d40-s
                        className="cg_icon close"
                        src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_close.png.webp"
                        style={{ width: "var(--cg-px-40)" }}
                      />
                    </div>
                  </header>
                  <div
                    data-v-490aa2c8
                    className="flex jc-sb filter-menu popup-mode"
                    style={{ marginTop: "var(--cg-px-87)" }}
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
                          Dragon Tiger
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-490aa2c8
                      className="flex ai-c date-range-tabs popup-mode"
                    >
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
                  </div>
                  <div
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
                              0.00
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
                              0.00
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-490aa2c8 className="cg-list">
                      <div className="van-pull-refresh">
                        <div
                          className="van-pull-refresh__track"
                          style={{ transitionDuration: "0ms" }}
                        >
                          <div className="van-pull-refresh__head" />
                          <div
                            data-v-490aa2c8
                            className="flex fdr-c ai-c bet-record-list-empty"
                            style={{ marginTop: "var(--cg-px-360)" }}
                          >
                            <img
                              data-v-103f45dc
                              data-v-490aa2c8
                              className="cg_icon"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_no_data.png.webp"
                              style={{ width: "var(--cg-px-80)" }}
                            />
                            <span data-v-490aa2c8>No data yet</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalWrapper>
    </Fragment>
  );
};

export default BetRecord;
