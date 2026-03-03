import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import Lobby from "../pages/Lobby/Lobby";
import Casino from "../pages/Casino/Casino";
import Originals from "../pages/Casino/Originals";
import FastGames from "../pages/Casino/FastGames";
import Teenpatti from "../pages/Casino/Teenpatti";
import Roulette from "../pages/Casino/Roulette";
import DragonTiger2020 from "../pages/Game/DragonTiger2020/DragonTiger2020";
import Bollywood from "../pages/Casino/Bollywood";
import AmarAkbarAnthonyA from "../pages/Game/AmarAkbarAnthonyA/AmarAkbarAnthonyA";
import LuckySevenA from "../pages/Game/LuckySevenA/LuckySevenA";
import LuckySevenB from "../pages/Game/LuckySevenB/LuckySevenB";
import LuckySevenC from "../pages/Game/LuckySevenC/LuckySevenC";
import LuckySixA from "../pages/Game/LuckySixA/LuckySixA";
import AmarAkbarAnthonyB from "../pages/Game/AmarAkbarAnthonyB/AmarAkbarAnthonyB";
import Baccarat from "../pages/Game/Baccarat/Baccarat";
import CenterCard from "../pages/Game/CenterCard/CenterCard";
import DragonTigerPhoenix from "../pages/Game/DragonTigerPhoenix/DragonTigerPhoenix";

const MainRouter = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <App />,

        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/lobby",
            element: <Lobby />,
          },
          {
            path: "/casino",
            element: <Casino />,
          },
          {
            path: "/originals",
            element: <Originals />,
          },
          {
            path: "/fast-games",
            element: <FastGames />,
          },
          {
            path: "/bollywood",
            element: <Bollywood />,
          },
          {
            path: "/teenpatti",
            element: <Teenpatti />,
          },
          {
            path: "/roulette",
            element: <Roulette />,
          },
        ],
      },
      {
        path: "/:token",
        element: <Auth />,
      },
      {
        path: "/game/dt2020/:eventTypeId/:eventId",
        element: <DragonTiger2020 />,
      },
      {
        path: "/game/dtp/:eventTypeId/:eventId",
        element: <DragonTigerPhoenix />,
      },
      {
        path: "/game/lucky7a/:eventTypeId/:eventId",
        element: <LuckySevenA />,
      },
      {
        path: "/game/lucky7b/:eventTypeId/:eventId",
        element: <LuckySevenB />,
      },
      {
        path: "/game/lucky7c/:eventTypeId/:eventId",
        element: <LuckySevenC />,
      },
      {
        path: "/game/lucky6a/:eventTypeId/:eventId",
        element: <LuckySixA />,
      },
      {
        path: "/game/aaaa/:eventTypeId/:eventId",
        element: <AmarAkbarAnthonyA />,
      },
      {
        path: "/game/aaab/:eventTypeId/:eventId",
        element: <AmarAkbarAnthonyB />,
      },
      {
        path: "/game/baccarat/:eventTypeId/:eventId",
        element: <Baccarat />,
      },
      {
        path: "/game/centercard/:eventTypeId/:eventId",
        element: <CenterCard />,
      },
    ],
    {
      basename: import.meta.env.BASE_URL ?? "/",
    },
  );

  return <RouterProvider router={router} />;
};

export default MainRouter;
