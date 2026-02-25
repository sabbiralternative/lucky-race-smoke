import { Fragment } from "react";
import ModalWrapper from "../../modals/ModalWrapper/ModalWrapper";
import { useDispatch, useSelector } from "react-redux";
import { setChipItems } from "../../../redux/features/global/globalSlice";

const ChipModal = ({ setShowChipListModal }) => {
  const dispatch = useDispatch();
  const { chipItems } = useSelector((state) => state.global);
  const closeModal = () => {
    setShowChipListModal(false);
  };

  const handleChipChange = (clickedChip) => {
    const updated = chipItems.map((chip) =>
      chip.label === clickedChip.label
        ? { ...chip, visible: !chip.visible }
        : chip,
    );

    dispatch(setChipItems(updated));
  };

  const visibleLength = chipItems?.filter((chip) => chip.visible).length;

  return (
    <Fragment>
      <div data-v-a2a30962="" id="swipeClone" draggable="false"></div>
      <div data-v-399a7156 className="cg_action_sheet">
        <div
          className="van-overlay"
          role="button"
          tabIndex={0}
          style={{ zIndex: 10000 }}
        ></div>
        <ModalWrapper onClose={closeModal}>
          <div
            role="dialog"
            tabIndex={0}
            className="van-popup van-popup--round van-popup--bottom van-safe-area-bottom van-action-sheet"
            style={{ zIndex: 10000 }}
          >
            <div className="van-action-sheet__content">
              <div
                data-v-399a7156
                className="select_sheet"
                style={{
                  borderRadius:
                    "var(--cg-px-24) var(--cg-px-24) var(--cg-px-0) var(--cg-px-0)",
                  height: "var(--cg-px-816)",
                  background: "var(--ag-baccarat-bg-color-bet-chip-config)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  data-v-399a7156
                  className="select_sheet_head"
                  style={{
                    height: "var(--cg-px-88)",
                    margin: "var(--cg-px-0)",
                    padding:
                      "var(--cg-px-0) var(--cg-px-32) var(--cg-px-0) var(--cg-px-32)",
                  }}
                >
                  <div data-v-399a7156 className="custom-header">
                    <div
                      data-v-0f33e8a8
                      data-v-399a7156-s
                      className="bet-chip-config-header"
                    >
                      <div
                        data-v-0f33e8a8
                        data-v-399a7156-s
                        className="flex ai-c jc-sb title-bar"
                      >
                        <img
                          onClick={closeModal}
                          data-v-103f45dc
                          data-v-0f33e8a8
                          data-v-399a7156-s
                          className="cg_icon close"
                          src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_close.png.webp"
                          style={{ width: "var(--cg-px-40)" }}
                        />
                        <div
                          data-v-0f33e8a8
                          data-v-399a7156-s
                          className="title"
                        >
                          Please choose 6 common chips
                        </div>
                        <div
                          onClick={closeModal}
                          data-v-0f33e8a8
                          data-v-399a7156-s
                          className="save"
                        >
                          Save
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-399a7156
                  className="sheet_conetnt"
                  style={{
                    alignItems: "center",
                    margin: "var(--cg-px-0)",
                    padding: "var(--cg-px-0)",
                  }}
                >
                  <div data-v-399a7156 className="sheet_list">
                    <div
                      data-v-0f33e8a8
                      data-v-399a7156-s
                      className="bet-chip-config-content"
                    >
                      <div
                        data-v-0f33e8a8
                        data-v-399a7156-s
                        className="flex ai-c bet-chip-config-list-container"
                      >
                        <div
                          data-v-0f33e8a8
                          data-v-399a7156-s
                          className="bet-chip-config-list"
                        >
                          {chipItems?.map((chip) => {
                            return (
                              <div
                                style={{
                                  pointerEvents:
                                    visibleLength > 5 && !chip?.visible
                                      ? "none"
                                      : "auto",
                                }}
                                onClick={() => handleChipChange(chip)}
                                key={chip?.label}
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="bet-chip-config-item"
                              >
                                <div
                                  data-v-0f33e8a8
                                  data-v-399a7156-s
                                  className={`chip-content  ${chip.visible ? "current-chip" : ""}`}
                                >
                                  <img
                                    data-v-0f33e8a8
                                    data-v-399a7156-s
                                    className="app-image item-bg"
                                    src={`/src/assets/images/bet-chip/bet-chip-${chip.label}.png.webp`}
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div
                          data-v-0f33e8a8
                          data-v-399a7156-s
                          className="bet-chip-custom-list"
                        >
                          <div
                            data-v-0f33e8a8
                            data-v-399a7156-s
                            className="bet-chip-config-item bet-chip-custom-item"
                          >
                            <div
                              data-v-0f33e8a8
                              data-v-399a7156-s
                              className="chip-content custom-chip-content"
                            >
                              <img
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="app-image item-bg"
                                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-custom.png.webp"
                                loading="lazy"
                              />
                              <div
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="flex ai-c jc-c item-text"
                                style={{ font: "var(--cg-font-900-24)" }}
                              >
                                AIG
                              </div>
                            </div>
                            <div
                              data-v-0f33e8a8
                              data-v-399a7156-s
                              className="flex ai-c jc-c item-custom-entrance"
                            >
                              <img
                                data-v-103f45dc
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="cg_icon setting"
                                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_setting_gold.png.webp"
                                style={{ width: "var(--cg-px-24)" }}
                              />
                            </div>
                          </div>
                          <div
                            data-v-0f33e8a8
                            data-v-399a7156-s
                            className="bet-chip-config-item bet-chip-custom-item"
                          >
                            <div
                              data-v-0f33e8a8
                              data-v-399a7156-s
                              className="chip-content custom-chip-content"
                            >
                              <img
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="app-image item-bg"
                                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-custom.png.webp"
                                loading="lazy"
                              />
                              <div
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="flex ai-c jc-c item-text"
                                style={{ font: "var(--cg-font-900-24)" }}
                              >
                                AIG
                              </div>
                            </div>
                            <div
                              data-v-0f33e8a8
                              data-v-399a7156-s
                              className="flex ai-c jc-c item-custom-entrance"
                            >
                              <img
                                data-v-103f45dc
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="cg_icon setting"
                                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_setting_gold.png.webp"
                                style={{ width: "var(--cg-px-24)" }}
                              />
                            </div>
                          </div>
                          <div
                            data-v-0f33e8a8
                            data-v-399a7156-s
                            className="bet-chip-config-item bet-chip-custom-item"
                          >
                            <div
                              data-v-0f33e8a8
                              data-v-399a7156-s
                              className="chip-content custom-chip-content"
                            >
                              <img
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="app-image item-bg"
                                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-custom.png.webp"
                                loading="lazy"
                              />
                              <div
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="flex ai-c jc-c item-text"
                                style={{ font: "var(--cg-font-900-24)" }}
                              >
                                AIG
                              </div>
                            </div>
                            <div
                              data-v-0f33e8a8
                              data-v-399a7156-s
                              className="flex ai-c jc-c item-custom-entrance"
                            >
                              <img
                                data-v-103f45dc
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="cg_icon setting"
                                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_setting_gold.png.webp"
                                style={{ width: "var(--cg-px-24)" }}
                              />
                            </div>
                          </div>
                          <div
                            data-v-0f33e8a8
                            data-v-399a7156-s
                            className="bet-chip-config-item bet-chip-custom-item"
                          >
                            <div
                              data-v-0f33e8a8
                              data-v-399a7156-s
                              className="chip-content custom-chip-content"
                            >
                              <img
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="app-image item-bg"
                                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-custom.png.webp"
                                loading="lazy"
                              />
                              <div
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="flex ai-c jc-c item-text"
                                style={{ font: "var(--cg-font-900-24)" }}
                              >
                                AIG
                              </div>
                            </div>
                            <div
                              data-v-0f33e8a8
                              data-v-399a7156-s
                              className="flex ai-c jc-c item-custom-entrance"
                            >
                              <img
                                data-v-103f45dc
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="cg_icon setting"
                                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_setting_gold.png.webp"
                                style={{ width: "var(--cg-px-24)" }}
                              />
                            </div>
                          </div>
                          <div
                            data-v-0f33e8a8
                            data-v-399a7156-s
                            className="bet-chip-config-item bet-chip-custom-item"
                          >
                            <div
                              data-v-0f33e8a8
                              data-v-399a7156-s
                              className="chip-content custom-chip-content"
                            >
                              <img
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="app-image item-bg"
                                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-custom.png.webp"
                                loading="lazy"
                              />
                              <div
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="flex ai-c jc-c item-text"
                                style={{ font: "var(--cg-font-900-24)" }}
                              >
                                AIG
                              </div>
                            </div>
                            <div
                              data-v-0f33e8a8
                              data-v-399a7156-s
                              className="flex ai-c jc-c item-custom-entrance"
                            >
                              <img
                                data-v-103f45dc
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="cg_icon setting"
                                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_setting_gold.png.webp"
                                style={{ width: "var(--cg-px-24)" }}
                              />
                            </div>
                          </div>
                          <div
                            data-v-0f33e8a8
                            data-v-399a7156-s
                            className="bet-chip-config-item bet-chip-custom-item"
                          >
                            <div
                              data-v-0f33e8a8
                              data-v-399a7156-s
                              className="chip-content custom-chip-content"
                            >
                              <img
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="app-image item-bg"
                                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/baccarat/bet-chip-custom.png.webp"
                                loading="lazy"
                              />
                              <div
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="flex ai-c jc-c item-text"
                                style={{ font: "var(--cg-font-900-24)" }}
                              >
                                AIG
                              </div>
                            </div>
                            <div
                              data-v-0f33e8a8
                              data-v-399a7156-s
                              className="flex ai-c jc-c item-custom-entrance"
                            >
                              <img
                                data-v-103f45dc
                                data-v-0f33e8a8
                                data-v-399a7156-s
                                className="cg_icon setting"
                                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_setting_gold.png.webp"
                                style={{ width: "var(--cg-px-24)" }}
                              />
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
      </div>
    </Fragment>
  );
};

export default ChipModal;
