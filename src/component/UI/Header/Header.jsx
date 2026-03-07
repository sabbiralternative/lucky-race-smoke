import { useDispatch, useSelector } from "react-redux";
import { setShowMenu } from "../../../redux/features/global/globalSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const { balance, username } = useSelector((state) => state.auth);
  return (
    <header data-v-fe647d40 data-v-2e21701c className="cg-header header">
      <div
        onClick={() => dispatch(setShowMenu(true))}
        data-v-fe647d40
        className="header-left"
      >
        <div data-v-fe647d40 className="leading-content">
          <img
            data-v-103f45dc
            data-v-2e21701c
            data-v-fe647d40-s
            className="cg_icon more"
            src="https://cdn2.aig1234.com/bw/yiy-h5/assets/cg-template-2/red-green/p4/icon/dark/i_more_no_border.png.webp"
            style={{ width: "var(--cg-px-56)" }}
          />
        </div>
      </div>
      <div data-v-fe647d40 className="title">
        <div data-v-2e21701c data-v-fe647d40-s className="flex ai-c user-info">
          <div data-v-2e21701c data-v-fe647d40-s className="user-info-right">
            <div data-v-2e21701c data-v-fe647d40-s className="user-info-base">
              <span data-v-2e21701c data-v-fe647d40-s>
                {username}
              </span>
            </div>
            <div
              data-v-2e21701c
              data-v-fe647d40-s
              className="user-info-base balance"
            >
              <span data-v-2e21701c data-v-fe647d40-s>
                INR {balance}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div data-v-fe647d40 className="header-right"></div>
    </header>
  );
};
