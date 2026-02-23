import { useLocation, useNavigate } from "react-router-dom";

const ScrollbarNavItems = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <div data-v-2e21701c className="flex jc-sb game-type-container">
      <div data-v-3ef22dfa data-v-2e21701c className="game-nav-box">
        <div
          data-v-3ef22dfa
          className="game-nav-scroll hide-scrollbar"
          data-overlayscrollbars="host"
        >
          <div className="os-size-observer">
            <div className="os-size-observer-listener" />
          </div>
          <div
            className
            data-overlayscrollbars-viewport="scrollbarHidden overflowXScroll overflowYHidden"
            tabIndex={-1}
            style={{
              marginRight: "0px",
              marginBottom: "0px",
              marginLeft: "0px",
              top: "0px",
              right: "auto",
              left: "0px",
              width: "calc(100% + 0px)",
              padding: "0px",
            }}
          >
            <div data-v-3ef22dfa className="game-nav-list">
              <div
                data-v-3ef22dfa
                className={`li  ${location?.pathname === "/lobby" ? "active" : ""}`}
                onClick={() => handleNavigate("/")}
              >
                <img
                  data-v-3ef22dfa
                  className="app-image li-img"
                  src={`https://storage.googleapis.com/bw-prod-os/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/home/i_lobby_${location.pathname === "/" ? "yes" : "no"}.png.webp`}
                  loading="lazy"
                />
                <div data-v-3ef22dfa className="flex ai-c jc-c ta-c li-txt">
                  Lobby
                </div>
              </div>
              <div
                data-v-3ef22dfa
                className="li"
                onClick={() => handleNavigate("/casino")}
              >
                <img
                  data-v-3ef22dfa
                  className="app-image li-img"
                  src="https://cdn2.aig1234.com/images/prod/game_nav/1770623370475928.png.webp"
                  loading="lazy"
                />
                <div data-v-3ef22dfa className="flex ai-c jc-c ta-c li-txt">
                  Casino
                </div>
              </div>
              <div
                onClick={() => handleNavigate("/originals")}
                data-v-3ef22dfa
                className="li"
              >
                <img
                  data-v-3ef22dfa
                  className="app-image li-img"
                  src="https://cdn2.aig1234.com/images/prod/game_nav/1770623423347143.png.webp"
                  loading="lazy"
                />
                <img
                  data-v-103f45dc
                  data-v-3ef22dfa
                  className="cg_icon new"
                  src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_new.png.webp"
                  style={{ width: "var(--cg-px-48)" }}
                />
                <div data-v-3ef22dfa className="flex ai-c jc-c ta-c li-txt">
                  Originals
                </div>
              </div>
              <div
                onClick={() => handleNavigate("/fast-games")}
                data-v-3ef22dfa
                className="li"
              >
                <img
                  data-v-3ef22dfa
                  className="app-image li-img"
                  src="https://cdn2.aig1234.com/images/prod/game_nav/1770623448169250.png.webp"
                  loading="lazy"
                />
                <div data-v-3ef22dfa className="flex ai-c jc-c ta-c li-txt">
                  Fast Game
                </div>
              </div>
              <div
                onClick={() => handleNavigate("/bollywood")}
                data-v-3ef22dfa
                className="li"
              >
                <img
                  data-v-3ef22dfa
                  className="app-image li-img"
                  src="https://cdn2.aig1234.com/images/prod/game_nav/1770623472450063.png.webp"
                  loading="lazy"
                />
                <img
                  data-v-103f45dc
                  data-v-3ef22dfa
                  className="cg_icon new"
                  src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_hot.png.webp"
                  style={{ width: "var(--cg-px-48)" }}
                />
                <div data-v-3ef22dfa className="flex ai-c jc-c ta-c li-txt">
                  Bollywood
                </div>
              </div>
              <div
                onClick={() => handleNavigate("/teenpatti")}
                data-v-3ef22dfa
                className="li"
              >
                <img
                  data-v-3ef22dfa
                  className="app-image li-img"
                  src="https://cdn2.aig1234.com/images/prod/game_nav/1770623534952614.png.webp"
                  loading="lazy"
                />
                <div data-v-3ef22dfa className="flex ai-c jc-c ta-c li-txt">
                  Teenpatti
                </div>
              </div>
              <div
                onClick={() => handleNavigate("/roulette")}
                data-v-3ef22dfa
                className="li"
              >
                <img
                  data-v-3ef22dfa
                  className="app-image li-img"
                  src="https://cdn2.aig1234.com/images/prod/game_nav/1770623493240860.png.webp"
                  loading="lazy"
                />
                <div data-v-3ef22dfa className="flex ai-c jc-c ta-c li-txt">
                  Roulette
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollbarNavItems;
