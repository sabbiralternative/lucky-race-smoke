import { useLocation, useNavigate } from "react-router-dom";
import { scrollableNav } from "../../../static/scrollableNav";

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
              {scrollableNav.map((item) => {
                return (
                  <div
                    key={item.label}
                    onClick={() => handleNavigate(item.href)}
                    data-v-3ef22dfa
                    className={`li ${location.pathname === item.href ? "active" : ""}`}
                  >
                    <img
                      data-v-3ef22dfa
                      className="app-image li-img"
                      src={
                        location.pathname === item.href
                          ? item.activeImage
                          : item.image
                      }
                      loading="lazy"
                    />
                    {item.badge && (
                      <img
                        data-v-103f45dc
                        data-v-3ef22dfa
                        className="cg_icon new"
                        src={item.badge}
                        style={{ width: "var(--cg-px-48)" }}
                      />
                    )}

                    <div data-v-3ef22dfa className="flex ai-c jc-c ta-c li-txt">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollbarNavItems;
