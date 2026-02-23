import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

export const SliderThumbnail = ({ data, title }) => {
  const navigate = useNavigate();
  const getCasinoLink = (casino) =>
    `/game/${casino?.slug}/${casino?.eventTypeId}/${casino?.eventId}`;

  const handleNavigate = (casino) => {
    navigate(getCasinoLink(casino));
  };

  return (
    <Fragment>
      {data && data?.length > 0 && (
        <div data-v-1dbbb793 className="card-wrapper">
          <div
            data-v-427fd976
            data-v-1dbbb793
            className="card-drawer-container"
          >
            <div data-v-427fd976 className="title">
              <div data-v-427fd976 className="title-left">
                {/* <img
                  data-v-427fd976
                  className="app-image title-icon"
                  src="https://cdn2.aig1234.com/images/prod/game_nav/1770623612541636.png.webp"
                  alt=""
                  loading="lazy"
                /> */}
                <div data-v-427fd976 className="title-left-text">
                  {title}
                </div>
              </div>
            </div>
            <div data-v-427fd976 className="game-room-list-container">
              <div
                data-v-427fd976
                className="cg-list"
                style={{ display: "block" }}
              >
                <div className="van-pull-refresh">
                  <div
                    className="van-pull-refresh__track"
                    style={{ transitionDuration: "0ms" }}
                  >
                    <div className="van-pull-refresh__head" />

                    <div data-v-75ed50d0 className="container">
                      <div
                        data-v-427fd976
                        data-v-75ed50d0-s
                        className="content-wrapper"
                      >
                        <div
                          data-v-427fd976
                          data-v-75ed50d0-s
                          className="content-list"
                        >
                          {data?.map((game) => {
                            return (
                              <div
                                onClick={() => handleNavigate(game)}
                                key={game?.eventId}
                                data-v-427fd976
                                data-v-75ed50d0-s
                                data-inst-id="prGNVM"
                                className="content-item"
                              >
                                <div
                                  data-v-1501a6a8
                                  data-v-427fd976
                                  data-v-75ed50d0-s
                                  className="standard-card"
                                >
                                  <img
                                    data-v-1501a6a8
                                    className="app-image item-bg"
                                    src={game?.image}
                                    alt=""
                                    loading="lazy"
                                    draggable="false"
                                  />
                                  <div
                                    data-v-1501a6a8
                                    className="mask"
                                    style={{
                                      background: `linear-gradient(
                                    rgba(61, 113, 255, 0) 0%,
                                    rgb(61, 113, 255) 80%
                                  )`,
                                    }}
                                  />
                                  <div
                                    data-v-1501a6a8
                                    className="betting-status"
                                  >
                                    <img
                                      data-v-103f45dc
                                      data-v-1501a6a8
                                      className="cg_icon clock-icon"
                                      src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_clock_normal.png.webp"
                                      style={{ width: "var(--cg-px-22)" }}
                                    />
                                    <span
                                      data-v-1501a6a8
                                      className="countdown-text betting-status-num countdown-txt-color-normal"
                                    >
                                      13
                                    </span>
                                  </div>
                                  <img
                                    data-v-103f45dc
                                    data-v-1501a6a8
                                    className="cg_icon icon-marker"
                                    src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/i_new_sign.png.webp"
                                    style={{ width: "var(--cg-px-60)" }}
                                  />
                                  <div data-v-1501a6a8 className="game-name">
                                    {game?.name}
                                  </div>
                                  <div
                                    data-v-1501a6a8
                                    className="room-name-wrapper"
                                  >
                                    <div data-v-1501a6a8 className="room-name">
                                      <span
                                        data-v-1501a6a8
                                        className="room-name-content"
                                      >
                                        {game?.category}
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    data-v-1501a6a8
                                    className="bet-amount-wrap"
                                  >
                                    <img
                                      data-v-103f45dc
                                      data-v-1501a6a8
                                      className="cg_icon"
                                      src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/i_gold_coin.png.webp"
                                      style={{ width: "var(--cg-px-18)" }}
                                    />
                                    <span
                                      data-v-1501a6a8
                                      className="bet-amount"
                                    >
                                      {game?.min}
                                    </span>
                                  </div>
                                  <div data-v-1501a6a8 className="guest-info">
                                    <img
                                      data-v-103f45dc
                                      data-v-1501a6a8
                                      className="cg_icon"
                                      src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/home/i_guest.png.webp"
                                      style={{ width: "var(--cg-px-12)" }}
                                    />
                                    <span data-v-1501a6a8 className="guest-num">
                                      {game?.users}
                                    </span>
                                  </div>
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
        </div>
      )}
    </Fragment>
  );
};
