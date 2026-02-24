import { Fragment, useState } from "react";
import ChipModal from "../../../component/shared/ChipModal/ChipModal";
import BetRecord from "../../../component/modals/BetRecord/BetRecord";

const Chip = () => {
  const [showChipListModal, setShowChipListModal] = useState(false);
  const [showBetRecordModal, setShowBetRecord] = useState(false);
  return (
    <Fragment>
      {showChipListModal && (
        <ChipModal setShowChipListModal={setShowChipListModal} />
      )}
      {showBetRecordModal && <BetRecord setShowBetRecord={setShowBetRecord} />}
      <div data-v-3e382ff1 className="bet-footer">
        <div data-v-3e382ff1 className="bet-footer-left">
          <div
            data-v-029c9be4
            className="flex ai-c jc-sb bet-chip-list-wrapper"
          >
            <img
              onClick={() => setShowChipListModal(true)}
              data-v-029c9be4
              className="app-image setting-item-bg"
              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-setting.png.webp"
              loading="lazy"
            />
            <div data-v-029c9be4 className="chip-swipe-container">
              <div
                data-v-1f6a537f
                data-v-029c9be4
                className="swipe-container chip-swipe"
              >
                <div data-v-1f6a537f className="van-swipe swipe">
                  <div
                    className="van-swipe__track"
                    style={{
                      transitionDuration: "0ms",
                      transform: "translateX(0px)",
                      width: "1240px",
                    }}
                  >
                    <div
                      data-v-029c9be4
                      data-v-1f6a537f-s
                      className="van-swipe-item"
                      style={{ width: "248px" }}
                    >
                      <div data-v-029c9be4 className="bet-chip-list">
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div
                            data-v-4e072ab6
                            className="chip-content current-chip"
                          >
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-10.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div data-v-4e072ab6 className="chip-content">
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-50.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div data-v-4e072ab6 className="chip-content">
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-100.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div data-v-4e072ab6 className="chip-content">
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-500.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div data-v-4e072ab6 className="chip-content">
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-2K.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div data-v-4e072ab6 className="chip-content">
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-10K.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-029c9be4
                      data-v-1f6a537f-s
                      className="van-swipe-item"
                      style={{ width: "248px" }}
                    >
                      <div data-v-029c9be4 className="bet-chip-list">
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div data-v-4e072ab6 className="chip-content">
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-1.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div data-v-4e072ab6 className="chip-content">
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-2.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div data-v-4e072ab6 className="chip-content">
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-5.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div data-v-4e072ab6 className="chip-content">
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-20.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div data-v-4e072ab6 className="chip-content">
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-25.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div data-v-4e072ab6 className="chip-content">
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-200.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-029c9be4
                      data-v-1f6a537f-s
                      className="van-swipe-item"
                      style={{ width: "248px" }}
                    ></div>
                    <div
                      data-v-029c9be4
                      data-v-1f6a537f-s
                      className="van-swipe-item"
                      style={{ width: "248px" }}
                    ></div>
                    <div
                      data-v-029c9be4
                      data-v-1f6a537f-s
                      className="van-swipe-item"
                      style={{ width: "248px" }}
                    >
                      <div data-v-029c9be4 className="bet-chip-list">
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div data-v-4e072ab6 className="chip-content">
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-2M.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div data-v-4e072ab6 className="chip-content">
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-5M.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div data-v-4e072ab6 className="chip-content">
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-10M.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div data-v-4e072ab6 className="chip-content">
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-20M.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div data-v-4e072ab6 className="chip-content">
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-50M.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div
                          data-v-4e072ab6
                          data-v-029c9be4
                          className="chip-item"
                        >
                          <div data-v-4e072ab6 className="chip-content">
                            <img
                              data-v-4e072ab6
                              className="app-image item-bg"
                              src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-100M.png.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-v-1f6a537f className="indicator-slot">
                  <div
                    data-v-029c9be4
                    data-v-1f6a537f-s
                    className="indicator-box-wrapper"
                  >
                    <div
                      data-v-029c9be4
                      data-v-1f6a537f-s
                      className="indicator-box"
                    >
                      <div
                        data-v-029c9be4
                        data-v-1f6a537f-s
                        className="custom-indicator active-indicator"
                      />
                      <div
                        data-v-029c9be4
                        data-v-1f6a537f-s
                        className="custom-indicator"
                      />
                      <div
                        data-v-029c9be4
                        data-v-1f6a537f-s
                        className="custom-indicator"
                      />
                      <div
                        data-v-029c9be4
                        data-v-1f6a537f-s
                        className="custom-indicator"
                      />
                      <div
                        data-v-029c9be4
                        data-v-1f6a537f-s
                        className="custom-indicator"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-v-0f33e8a8 data-v-029c9be4 className="bet-chip-config">
            <div data-v-399a7156 className="cg-select">
              <div data-v-399a7156 />
            </div>
          </div>
        </div>
        <img
          onClick={() => setShowBetRecord(true)}
          data-v-103f45dc
          data-v-3e382ff1
          className="cg_icon bet-footer-right"
          src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/i_history_in_game.png.webp"
          style={{ width: "var(--cg-px-64)" }}
        />
      </div>
    </Fragment>
  );
};

export default Chip;
