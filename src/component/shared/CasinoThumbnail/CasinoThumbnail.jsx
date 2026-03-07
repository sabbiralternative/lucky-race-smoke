import { useNavigate } from "react-router-dom";
import { useGetCasinoThumbnail } from "../../../hooks/casino";
import Loader from "../Loader/Loader";

const CasinoThumbnail = ({ title, id }) => {
  const navigate = useNavigate();
  const { data, isLoading, isFetching } = useGetCasinoThumbnail({ id });

  const handleNavigate = (casino) => {
    const formatLink = `/game/${casino?.slug}/${casino?.eventTypeId}/${casino?.eventId}`;

    if (title === "Originals") {
      window.open(casino?.url);
    } else {
      navigate(formatLink);
    }
  };

  if (isLoading || isFetching) {
    return <Loader />;
  }

  return (
    <div data-v-58411ceb data-v-2e21701c className="main">
      <div
        data-v-58411ceb
        className="content"
        style={{
          flex: "1 1 0%",
          height: "100%",
          overflowY: "hidden",
        }}
      >
        <div
          data-v-aa0859a6
          data-v-58411ceb
          className="flex jc-c game-room-list-container"
        >
          <div data-v-aa0859a6 className="cg-list" style={{}}>
            <div className="van-pull-refresh">
              <div
                className="van-pull-refresh__track"
                style={{ transitionDuration: "0ms" }}
              >
                <div className="van-pull-refresh__head" />

                <div data-v-75ed50d0 className="container">
                  <div
                    data-v-aa0859a6
                    data-v-75ed50d0-s
                    className="game-room-list"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto auto",
                      gap: "10px",
                    }}
                  >
                    {data?.map((game) => {
                      return (
                        <div
                          key={game?.eventId}
                          onClick={() => handleNavigate(game)}
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
                            <div data-v-1501a6a8 className="betting-status">
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
                            <div data-v-1501a6a8 className="room-name-wrapper">
                              <div data-v-1501a6a8 className="room-name">
                                <span
                                  data-v-1501a6a8
                                  className="room-name-content"
                                >
                                  {game?.category}
                                </span>
                              </div>
                            </div>
                            <div data-v-1501a6a8 className="bet-amount-wrap">
                              <img
                                data-v-103f45dc
                                data-v-1501a6a8
                                className="cg_icon"
                                src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/i_gold_coin.png.webp"
                                style={{ width: "var(--cg-px-18)" }}
                              />
                              <span data-v-1501a6a8 className="bet-amount">
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
  );
};

export default CasinoThumbnail;
