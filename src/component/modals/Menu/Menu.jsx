import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { setShowMenu } from "../../../redux/features/global/globalSlice";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const Menu = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setShowMenu(false));
  };
  return (
    <Fragment>
      <div className="van-overlay" role="button" style={{ zIndex: 1001 }}></div>
      <ModalWrapper onClose={handleClose}>
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
            <div data-v-4d436a68 data-v-547ebaa8-s className="item-view">
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
                              data-v-823a3766
                              className="nav_item active"
                              style={{ flex: "1 1 0%" }}
                            >
                              Settings
                            </dt>
                            <dt
                              data-v-823a3766
                              className="nav_item"
                              style={{ flex: "1 1 0%" }}
                            >
                              Bet Record
                            </dt>
                            <dd
                              data-v-823a3766
                              className="active_bg"
                              style={{
                                transform: "translateX(0%)",
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
                            transitionDuration: "0ms",
                            transform: "translateX(0px)",
                            width: "640px",
                          }}
                        >
                          <div
                            data-v-caeac72a
                            data-v-1f6a537f-s
                            className="van-swipe-item"
                            style={{ width: "320px" }}
                          >
                            <div
                              data-v-9b23d154
                              data-v-caeac72a
                              className="flex fdr-c game-settings"
                            >
                              <div
                                data-v-9b23d154
                                className="flex icon-item-container"
                              >
                                <div
                                  data-v-c60202cc
                                  data-v-9b23d154
                                  className="flex fdr-c ai-c jc-c game-setting-icon-item item"
                                >
                                  <img
                                    data-v-103f45dc
                                    data-v-c60202cc
                                    className="cg_icon"
                                    src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_heart.png.webp"
                                    style={{ width: "var(--cg-px-48)" }}
                                  />
                                  <div data-v-c60202cc className="title">
                                    Favorite
                                  </div>
                                </div>
                                <div
                                  data-v-c60202cc
                                  data-v-9b23d154
                                  className="flex fdr-c ai-c jc-c game-setting-icon-item item"
                                >
                                  <img
                                    data-v-103f45dc
                                    data-v-c60202cc
                                    className="cg_icon"
                                    src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_bet_rank.png.webp"
                                    style={{ width: "var(--cg-px-48)" }}
                                  />
                                  <div data-v-c60202cc className="title">
                                    Ranking
                                  </div>
                                </div>
                                <div
                                  data-v-c60202cc
                                  data-v-9b23d154
                                  className="flex fdr-c ai-c jc-c game-setting-icon-item item"
                                >
                                  <img
                                    data-v-103f45dc
                                    data-v-c60202cc
                                    className="cg_icon"
                                    src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_game_rule.png.webp"
                                    style={{ width: "var(--cg-px-48)" }}
                                  />
                                  <div data-v-c60202cc className="title">
                                    Game Rules
                                  </div>
                                </div>
                              </div>
                              <div
                                data-v-9b23d154
                                className="flex fdr-c list-item-container"
                              >
                                <div
                                  data-v-0712cbe4
                                  data-v-9b23d154
                                  className="container"
                                >
                                  <div
                                    data-v-0712cbe4
                                    className="flex ta-c ai-c jc-sb game-setting-item"
                                    style={{ flexDirection: "row" }}
                                  >
                                    <img
                                      data-v-103f45dc
                                      data-v-0712cbe4
                                      className="cg_icon"
                                      src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_sound_effect.png.webp"
                                      style={{ width: "var(--cg-px-40)" }}
                                    />
                                    <div
                                      data-v-0712cbe4
                                      className="title"
                                      style={{
                                        left: "var(--cg-px-80)",
                                        position: "absolute",
                                      }}
                                    >
                                      Sound &amp; Video Settings
                                    </div>
                                    <img
                                      data-v-103f45dc
                                      data-v-0712cbe4
                                      className="cg_icon"
                                      src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_arrow_right.png.webp"
                                      style={{ width: "var(--cg-px-24)" }}
                                    />
                                  </div>
                                  <div
                                    data-v-0712cbe4
                                    className="children-wrapper"
                                    style={{ height: "0px" }}
                                  >
                                    <div data-v-0712cbe4 />
                                  </div>
                                </div>
                                <div
                                  data-v-0712cbe4
                                  data-v-9b23d154
                                  className="container"
                                >
                                  <div
                                    data-v-0712cbe4
                                    className="flex ta-c ai-c jc-sb game-setting-item expandable"
                                    style={{ flexDirection: "row" }}
                                  >
                                    <img
                                      data-v-103f45dc
                                      data-v-0712cbe4
                                      className="cg_icon"
                                      src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_notify_setting.png.webp"
                                      style={{ width: "var(--cg-px-40)" }}
                                    />
                                    <div
                                      data-v-0712cbe4
                                      className="title"
                                      style={{
                                        left: "var(--cg-px-80)",
                                        position: "absolute",
                                      }}
                                    >
                                      Notification Settings
                                    </div>
                                    <img
                                      data-v-103f45dc
                                      data-v-0712cbe4
                                      className="cg_icon"
                                      src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_arrow_right.png.webp"
                                      style={{ width: "var(--cg-px-24)" }}
                                    />
                                  </div>
                                  <div
                                    data-v-0712cbe4
                                    className="children-wrapper"
                                    style={{ height: "0px" }}
                                  >
                                    <div data-v-0712cbe4>
                                      <div
                                        data-v-0712cbe4
                                        data-v-9b23d154
                                        data-v-0712cbe4-s
                                        className="container"
                                      >
                                        <div
                                          data-v-0712cbe4
                                          className="flex ta-c ai-c jc-sb game-setting-item child-item"
                                          style={{
                                            flexDirection: "row-reverse",
                                          }}
                                        >
                                          <div
                                            data-v-0712cbe4
                                            className="title child-title"
                                            style={{
                                              left: "var(--cg-px-80)",
                                              position: "absolute",
                                            }}
                                          >
                                            Smart Betting
                                          </div>
                                          <div
                                            data-v-251ee439
                                            data-v-0712cbe4
                                            className="cg-switch switch off"
                                          >
                                            <div
                                              data-v-251ee439
                                              className="content off"
                                            >
                                              <div
                                                data-v-251ee439
                                                className="circle off"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          data-v-0712cbe4
                                          className="children-wrapper"
                                          style={{ height: "0px" }}
                                        >
                                          <div data-v-0712cbe4 />
                                        </div>
                                      </div>
                                      <div
                                        data-v-0712cbe4
                                        data-v-9b23d154
                                        data-v-0712cbe4-s
                                        className="container"
                                      >
                                        <div
                                          data-v-0712cbe4
                                          className="flex ta-c ai-c jc-sb game-setting-item child-item"
                                          style={{
                                            flexDirection: "row-reverse",
                                          }}
                                        >
                                          <div
                                            data-v-0712cbe4
                                            className="title child-title"
                                            style={{
                                              left: "var(--cg-px-80)",
                                              position: "absolute",
                                            }}
                                          >
                                            Settlement Notification
                                          </div>
                                          <div
                                            data-v-251ee439
                                            data-v-0712cbe4
                                            className="cg-switch switch on"
                                          >
                                            <div
                                              data-v-251ee439
                                              className="content on"
                                            >
                                              <div
                                                data-v-251ee439
                                                className="circle on"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          data-v-0712cbe4
                                          className="children-wrapper"
                                          style={{ height: "0px" }}
                                        >
                                          <div data-v-0712cbe4 />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-0712cbe4
                                  data-v-9b23d154
                                  className="container"
                                >
                                  <div
                                    data-v-0712cbe4
                                    className="flex ta-c ai-c jc-sb game-setting-item"
                                    style={{ flexDirection: "row" }}
                                  >
                                    <img
                                      data-v-103f45dc
                                      data-v-0712cbe4
                                      className="cg_icon"
                                      src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_language_switch.png.webp"
                                      style={{ width: "var(--cg-px-40)" }}
                                    />
                                    <div
                                      data-v-0712cbe4
                                      className="title"
                                      style={{
                                        left: "var(--cg-px-80)",
                                        position: "absolute",
                                      }}
                                    >
                                      Language Switch
                                    </div>
                                    <img
                                      data-v-103f45dc
                                      data-v-0712cbe4
                                      className="cg_icon"
                                      src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_arrow_right.png.webp"
                                      style={{ width: "var(--cg-px-24)" }}
                                    />
                                  </div>
                                  <div
                                    data-v-0712cbe4
                                    className="children-wrapper"
                                    style={{ height: "0px" }}
                                  >
                                    <div data-v-0712cbe4 />
                                  </div>
                                </div>
                                <div
                                  data-v-0712cbe4
                                  data-v-9b23d154
                                  className="container"
                                >
                                  <div
                                    data-v-0712cbe4
                                    className="flex ta-c ai-c jc-sb game-setting-item expandable"
                                    style={{ flexDirection: "row" }}
                                  >
                                    <img
                                      data-v-103f45dc
                                      data-v-0712cbe4
                                      className="cg_icon"
                                      src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_skin_setting.png.webp"
                                      style={{ width: "var(--cg-px-40)" }}
                                    />
                                    <div
                                      data-v-0712cbe4
                                      className="title"
                                      style={{
                                        left: "var(--cg-px-80)",
                                        position: "absolute",
                                      }}
                                    >
                                      Skins
                                    </div>
                                    <img
                                      data-v-103f45dc
                                      data-v-0712cbe4
                                      className="cg_icon"
                                      src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_arrow_right.png.webp"
                                      style={{ width: "var(--cg-px-24)" }}
                                    />
                                  </div>
                                  <div
                                    data-v-0712cbe4
                                    className="children-wrapper"
                                    style={{ height: "0px" }}
                                  >
                                    <div data-v-0712cbe4>
                                      <div
                                        data-v-9c7d5500
                                        data-v-9b23d154
                                        data-v-0712cbe4-s
                                        className="flex ai-c fdr-c skin-setting-content"
                                      >
                                        <div
                                          data-v-9c7d5500
                                          className="skin-options-container"
                                        >
                                          <div
                                            data-v-9c7d5500
                                            className="skin-option-item current"
                                          >
                                            <img
                                              data-v-9c7d5500
                                              className="app-image skin-icon"
                                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/common/skin-dark.png.webp"
                                              loading="lazy"
                                            />
                                            <div
                                              data-v-9c7d5500
                                              className="option-footer"
                                            >
                                              <span
                                                data-v-103f45dc
                                                data-v-9c7d5500
                                                className="css_i_check_circle_active ratio"
                                                style={{
                                                  width: "var(--cg-px-28)",
                                                  height: "var(--cg-px-28)",
                                                }}
                                              />
                                              <span data-v-9c7d5500>Dark</span>
                                            </div>
                                          </div>
                                          <div
                                            data-v-9c7d5500
                                            className="skin-option-item"
                                          >
                                            <img
                                              data-v-9c7d5500
                                              className="app-image skin-icon"
                                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/common/skin-light.png.webp"
                                              loading="lazy"
                                            />
                                            <div
                                              data-v-9c7d5500
                                              className="option-footer"
                                            >
                                              <img
                                                data-v-103f45dc
                                                data-v-9c7d5500
                                                className="cg_icon ratio"
                                                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_ring.png.webp"
                                                style={{
                                                  width: "var(--cg-px-28)",
                                                  height: "var(--cg-px-28)",
                                                }}
                                              />
                                              <span data-v-9c7d5500>Light</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          data-v-9c7d5500
                                          className="flex ai-c jc-sb follow-system-area"
                                        >
                                          <span data-v-9c7d5500>
                                            Follow System
                                          </span>
                                          <div
                                            data-v-251ee439
                                            data-v-9c7d5500
                                            className="cg-switch switch on"
                                          >
                                            <div
                                              data-v-251ee439
                                              className="content on"
                                            >
                                              <div
                                                data-v-251ee439
                                                className="circle on"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-0712cbe4
                                  data-v-9b23d154
                                  className="container"
                                >
                                  <div
                                    data-v-0712cbe4
                                    className="flex ta-c ai-c jc-sb game-setting-item expandable"
                                    style={{ flexDirection: "row" }}
                                  >
                                    <img
                                      data-v-103f45dc
                                      data-v-0712cbe4
                                      className="cg_icon"
                                      src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_bacLayout_setting.png.webp"
                                      style={{ width: "var(--cg-px-40)" }}
                                    />
                                    <div
                                      data-v-0712cbe4
                                      className="title"
                                      style={{
                                        left: "var(--cg-px-80)",
                                        position: "absolute",
                                      }}
                                    >
                                      Baccarat Betting View Settings
                                    </div>
                                    <img
                                      data-v-103f45dc
                                      data-v-0712cbe4
                                      className="cg_icon"
                                      src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_arrow_right.png.webp"
                                      style={{ width: "var(--cg-px-24)" }}
                                    />
                                  </div>
                                  <div
                                    data-v-0712cbe4
                                    className="children-wrapper"
                                    style={{ height: "0px" }}
                                  >
                                    <div data-v-0712cbe4>
                                      <div
                                        data-v-3ae74c42
                                        data-v-9b23d154
                                        data-v-0712cbe4-s
                                        className="bac-layout-content"
                                      >
                                        <div
                                          data-v-3ae74c42
                                          className="bac-layout-options"
                                        >
                                          <div
                                            data-v-3ae74c42
                                            className="bac-layout-item current"
                                          >
                                            <div
                                              data-v-3ae74c42
                                              className="bac-layout-header"
                                            >
                                              <span
                                                data-v-103f45dc
                                                data-v-3ae74c42
                                                className="css_i_check_circle_active"
                                                style={{
                                                  width: "var(--cg-px-28)",
                                                  height: "var(--cg-px-28)",
                                                }}
                                              />
                                              <div
                                                data-v-3ae74c42
                                                className="bac-layout-text"
                                              >
                                                <div
                                                  data-v-3ae74c42
                                                  className="bac-layout-desc"
                                                >
                                                  Classic Layout
                                                </div>
                                                <div
                                                  data-v-3ae74c42
                                                  className="bac-layout-sub-desc"
                                                >
                                                  Swipe to switch to other
                                                  betting options
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              data-v-3ae74c42
                                              className="bac-layout-icon"
                                            >
                                              <img
                                                data-v-103f45dc
                                                data-v-3ae74c42
                                                className="cg_icon"
                                                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_classicLayout_active.png.webp"
                                                style={{
                                                  width: "var(--cg-px-96)",
                                                }}
                                              />
                                            </div>
                                          </div>
                                          <div
                                            data-v-3ae74c42
                                            className="bac-layout-item"
                                          >
                                            <div
                                              data-v-3ae74c42
                                              className="bac-layout-header"
                                            >
                                              <img
                                                data-v-103f45dc
                                                data-v-3ae74c42
                                                className="cg_icon"
                                                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_ring.png.webp"
                                                style={{
                                                  width: "var(--cg-px-28)",
                                                }}
                                              />
                                              <div
                                                data-v-3ae74c42
                                                className="bac-layout-text"
                                              >
                                                <div
                                                  data-v-3ae74c42
                                                  className="bac-layout-desc"
                                                >
                                                  Tile Layout
                                                </div>
                                                <div
                                                  data-v-3ae74c42
                                                  className="bac-layout-sub-desc"
                                                >
                                                  All betting options displayed
                                                </div>
                                              </div>
                                            </div>
                                            <div
                                              data-v-3ae74c42
                                              className="bac-layout-icon"
                                            >
                                              <img
                                                data-v-103f45dc
                                                data-v-3ae74c42
                                                className="cg_icon"
                                                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_tileLayout.png.webp"
                                                style={{
                                                  width: "var(--cg-px-96)",
                                                }}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-0712cbe4
                                  data-v-9b23d154
                                  className="container"
                                >
                                  <div
                                    data-v-0712cbe4
                                    className="flex ta-c ai-c jc-sb game-setting-item"
                                    style={{ flexDirection: "row" }}
                                  >
                                    <img
                                      data-v-103f45dc
                                      data-v-0712cbe4
                                      className="cg_icon"
                                      src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_network.png.webp"
                                      style={{ width: "var(--cg-px-40)" }}
                                    />
                                    <div
                                      data-v-0712cbe4
                                      className="title"
                                      style={{
                                        left: "var(--cg-px-80)",
                                        position: "absolute",
                                      }}
                                    >
                                      Network Detection
                                    </div>
                                    <img
                                      data-v-103f45dc
                                      data-v-0712cbe4
                                      className="cg_icon"
                                      src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_arrow_right.png.webp"
                                      style={{ width: "var(--cg-px-24)" }}
                                    />
                                  </div>
                                  <div
                                    data-v-0712cbe4
                                    className="children-wrapper"
                                    style={{ height: "0px" }}
                                  >
                                    <div data-v-0712cbe4 />
                                  </div>
                                </div>
                              </div>
                              <span
                                data-v-9b23d154
                                className="version"
                                href="#"
                              >
                                Version-3.4.4
                              </span>
                            </div>
                          </div>
                          <div
                            data-v-caeac72a
                            data-v-1f6a537f-s
                            className="van-swipe-item"
                            style={{ width: "320px" }}
                          >
                            <div
                              data-v-490aa2c8
                              className="flex fdr-c bet-record default-layout__content-no-padding popup-mode"
                            >
                              <div
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
                                    <div
                                      data-v-e9080dee
                                      className="flex ai-c title"
                                    >
                                      All
                                    </div>
                                  </div>
                                </div>
                                <div
                                  data-v-490aa2c8
                                  className="flex ai-c date-range-tabs popup-mode"
                                >
                                  <span
                                    data-v-490aa2c8
                                    className="date-tab active"
                                  >
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
                                        style={{
                                          marginTop: "var(--cg-px-160)",
                                        }}
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
                      <div data-v-1f6a537f className="indicator-slot" />
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

export default Menu;
