import { Outlet } from "react-router-dom";
import { Header } from "../component/UI/Header/Header";
import ScrollbarNavItems from "../component/UI/ScrollbarNavItems/ScrollbarNavItems";
import { Fragment } from "react";
import Menu from "../component/modals/Menu/Menu";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const { showMenu } = useSelector((state) => state.global);
  return (
    <Fragment>
      {showMenu && <Menu />}

      <div data-v-1971eb1e className="app-root">
        <div data-v-a2a30962 data-v-1971eb1e className="default-layout">
          <div data-v-a2a30962 className="default-layout__content">
            <div
              data-v-2e21701c
              id="homeLayout"
              className="flex fdr-c hide-scrollbar home default-layout__content-no-padding"
              style={{ opacity: 1 }}
            >
              <Header />
              <div data-v-2e21701c className="content">
                <div data-v-2e21701c className="game-lobby">
                  <ScrollbarNavItems />
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainLayout;
