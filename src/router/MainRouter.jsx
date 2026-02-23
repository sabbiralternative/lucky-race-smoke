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
          // {
          //   path: "/bollywood",
          //   element: <BollywoodThumbnail />,
          // },
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
    ],
    {
      basename: import.meta.env.BASE_URL ?? "/",
    },
  );

  return <RouterProvider router={router} />;
};

export default MainRouter;
