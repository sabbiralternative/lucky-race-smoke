import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { setShowMenu } from "../../../redux/features/global/globalSlice";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import BetRecord from "../../shared/BetRecord/BetRecord";
import BetRecordDetails from "../../shared/BetRecord/BetRecordDetails";
import Settings from "../../shared/Settings/Settings";

const Menu = () => {
  const [eventId, setEventId] = useState(null);
  const [roundId, setRoundId] = useState(null);
  const [activeTab, setActiveTab] = useState("setting");
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setShowMenu(false));
    setActiveTab("setting");
  };
  return (
    <Fragment>
      <div className="van-overlay" role="button" style={{ zIndex: 1001 }}></div>
      <ModalWrapper onClose={handleClose}>
        <div
          style={{
            position: "absolute",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <div
            role="dialog"
            tabIndex={0}
            className="van-popup van-popup--round van-popup--bottom"
            style={{ zIndex: 1001, height: "460.36px" }}
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
                data-v-4d436a68
                data-v-547ebaa8-s
                className="item-view"
                style={{
                  display: activeTab === "bet-details" ? "none" : "block",
                }}
              >
                <div
                  data-v-caeac72a
                  data-v-4d436a68
                  data-v-547ebaa8-s
                  className="flex fdr-c game-menu"
                >
                  <header
                    data-v-fe647d40
                    data-v-caeac72a
                    className="cg-header header"
                  >
                    <div
                      data-v-fe647d40
                      className="header-left"
                      onClick={handleClose}
                    >
                      <div data-v-fe647d40 className="leading-content">
                        <img
                          data-v-103f45dc
                          data-v-caeac72a
                          data-v-fe647d40-s
                          className="cg_icon close"
                          src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_close_small.png.webp"
                          style={{ width: "var(--cg-px-56)" }}
                        />
                      </div>
                    </div>
                    <div data-v-fe647d40 className="title">
                      Menu
                    </div>
                    <div data-v-fe647d40 className="header-right" />
                  </header>
                  <div data-v-caeac72a className="flex fdr-c content">
                    <div data-v-caeac72a className="tab-section">
                      <div data-v-caeac72a className="tab-container">
                        <div
                          data-v-823a3766
                          data-v-caeac72a
                          className="cg-tab"
                          style={{ width: "100%" }}
                        >
                          <div
                            data-v-823a3766
                            className="cg_nav"
                            style={{ width: "100%" }}
                          >
                            <dl data-v-823a3766 style={{ width: "100%" }}>
                              <dt
                                onClick={() => setActiveTab("setting")}
                                data-tab="Settings"
                                data-v-823a3766
                                className={`nav_item ${activeTab === "setting" ? "active" : ""}`}
                                style={{ flex: "1 1 0%" }}
                              >
                                Settings
                              </dt>
                              <dt
                                onClick={() => setActiveTab("betRecord")}
                                data-tab="Bet Record"
                                data-v-823a3766
                                className={`nav_item  ${activeTab === "betRecord" ? "active" : ""}`}
                                style={{ flex: "1 1 0%" }}
                              >
                                Bet Record
                              </dt>
                              <dd
                                data-v-823a3766
                                className="active_bg"
                                style={{
                                  transform:
                                    activeTab === "setting"
                                      ? "translateX(0px)"
                                      : "translateX(100%)",
                                  width: "50%",
                                }}
                              />
                              <dd
                                data-v-823a3766
                                className="indicator"
                                style={{
                                  transform: "translateX(0px)",
                                  display: "none",
                                }}
                              />
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-caeac72a
                      className="flex fdr-c content__swipe-container"
                    >
                      <div
                        data-v-1f6a537f
                        data-v-caeac72a
                        className="swipe-container swipe-content"
                      >
                        <div data-v-1f6a537f className="van-swipe swipe">
                          <div
                            className="van-swipe__track"
                            style={{
                              transitionDuration: "500 ms",
                              transform:
                                activeTab === "setting"
                                  ? "translateX(0px)"
                                  : "translateX(-100%)",
                              width: "100%",
                            }}
                          >
                            <Settings />
                            <BetRecord
                              setActiveTab={setActiveTab}
                              setEventId={setEventId}
                              setRoundId={setRoundId}
                            />
                          </div>
                        </div>
                        <div data-v-1f6a537f className="indicator-slot" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {activeTab === "bet-details" && (
                <BetRecordDetails
                  eventId={eventId}
                  roundId={roundId}
                  setActiveTab={setActiveTab}
                />
              )}
            </div>
          </div>
        </div>
      </ModalWrapper>
    </Fragment>
  );
};

export default Menu;
