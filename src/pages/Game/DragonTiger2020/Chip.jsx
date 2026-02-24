import { Fragment, useState } from "react";
import ChipModal from "../../../component/shared/ChipModal/ChipModal";
import BetRecord from "../../../component/modals/BetRecord/BetRecord";
import { useSelector } from "react-redux";

const Chip = () => {
  const { chipItems } = useSelector((state) => state.global);
  const sortedChipItems = [...chipItems].sort((a, b) => {
    return Number(b.visible) - Number(a.visible);
  });
  const [showChipListModal, setShowChipListModal] = useState(false);
  const [showBetRecordModal, setShowBetRecord] = useState(false);
  const [activeChip, setActiveChip] = useState(null);

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
                        {sortedChipItems?.map((chip) => {
                          return (
                            <div
                              onClick={() => setActiveChip(chip.label)}
                              key={chip.label}
                              data-v-4e072ab6
                              data-v-029c9be4
                              className="chip-item"
                            >
                              <div
                                data-v-4e072ab6
                                className={`chip-content  ${chip.label === activeChip ? "current-chip" : ""}`}
                              >
                                <img
                                  data-v-4e072ab6
                                  className="app-image item-bg"
                                  src={`https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-${chip.label}.png.webp`}
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
