import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import Lobby from "../pages/Lobby/Lobby";

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
