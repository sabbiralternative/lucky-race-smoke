import { useLocation, useNavigate } from "react-router-dom";

const ScrollbarNavItems = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
                onClick={() => navigate("/lobby")}
              >
                <img
                  data-v-3ef22dfa
                  className="app-image li-img"
                  src={`https://storage.googleapis.com/bw-prod-os/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/home/i_lobby_${location.pathname === "/lobby" ? "yes" : "no"}.png.webp`}
                  loading="lazy"
                />
                <div data-v-3ef22dfa className="flex ai-c jc-c ta-c li-txt">
                  Lobby
                </div>
              </div>
              <div data-v-3ef22dfa className="li">
                <img
                  data-v-3ef22dfa
                  className="app-image li-img"
                  src="https://cdn2.aig1234.com/images/prod/game_nav/1770623370475928.png.webp"
                  loading="lazy"
                />
                <div data-v-3ef22dfa className="flex ai-c jc-c ta-c li-txt">
                  Baccarat
                </div>
              </div>
              <div data-v-3ef22dfa className="li">
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
                  LiveBac
                </div>
              </div>
              <div data-v-3ef22dfa className="li">
                <img
                  data-v-3ef22dfa
                  className="app-image li-img"
                  src="https://cdn2.aig1234.com/images/prod/game_nav/1770623448169250.png.webp"
                  loading="lazy"
                />
                <div data-v-3ef22dfa className="flex ai-c jc-c ta-c li-txt">
                  DragonTiger
                </div>
              </div>
              <div data-v-3ef22dfa className="li">
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
                  MatchingLace
                </div>
              </div>
              <div data-v-3ef22dfa className="li">
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
              <div data-v-3ef22dfa className="li">
                <img
                  data-v-3ef22dfa
                  className="app-image li-img"
                  src="https://cdn2.aig1234.com/images/prod/game_nav/1770623534952614.png.webp"
                  loading="lazy"
                />
                <div data-v-3ef22dfa className="flex ai-c jc-c ta-c li-txt">
                  Sicbo
                </div>
              </div>
              <div data-v-3ef22dfa className="active li">
                <img
                  data-v-3ef22dfa
                  className="app-image li-img"
                  src="https://cdn2.aig1234.com/images/prod/game_nav/1770623550735828.png.webp"
                  loading="lazy"
                />
                <div data-v-3ef22dfa className="flex ai-c jc-c ta-c li-txt">
                  LuckyLace
                </div>
              </div>
              <div data-v-3ef22dfa className="li">
                <img
                  data-v-3ef22dfa
                  className="app-image li-img"
                  src="https://cdn2.aig1234.com/images/prod/game_nav/1770623591791625.png.webp"
                  loading="lazy"
                />
                <div data-v-3ef22dfa className="flex ai-c jc-c ta-c li-txt">
                  Lottery
                </div>
              </div>
            </div>
          </div>
          <div
            className="os-scrollbar os-scrollbar-horizontal os-theme-game-nav-list os-scrollbar-auto-hide os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-visible"
            style={{
              "--os-viewport-percent": "0.6653",
              "--os-scroll-direction": 0,
            }}
          >
            <div className="os-scrollbar-track">
              <div className="os-scrollbar-handle" />
            </div>
          </div>
          <div
            className="os-scrollbar os-scrollbar-vertical os-theme-game-nav-list os-scrollbar-auto-hide os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable"
            style={{
              "--os-viewport-percent": 1,
              "--os-scroll-direction": 0,
            }}
          >
            <div className="os-scrollbar-track">
              <div className="os-scrollbar-handle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollbarNavItems;
