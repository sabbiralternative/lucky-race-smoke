import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Settings } from "./api";
import { useDispatch, useSelector } from "react-redux";
import disableDevtool from "disable-devtool";
import { logout } from "./redux/features/auth/authSlice";
import {
  setDeviceWidth,
  setDeviseHeight,
} from "./redux/features/global/globalSlice";

import MainLayout from "./layout/MainLayout";

function App() {
  const { deviceWidth } = useSelector((state) => state.global);
  const disabledDevtool = Settings.disabledDevtool;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (disabledDevtool) {
      disableDevtool({
        ondevtoolopen: (type) => {
          const info = "devtool opened!; type =" + type;
          if (info) {
            dispatch(logout());
            window.location.href = "https://www.google.com/";
          }
        },
      });
    }
  }, [navigate, disabledDevtool, dispatch]);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setDeviseHeight(window.innerHeight));
      dispatch(setDeviceWidth(window.innerWidth));
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const handleFullScreen = () => {
    if (!window.origin.includes("localhost")) {
      document.body.requestFullscreen();
    }
  };
  let style;

  if (deviceWidth > 786) {
    style = {
      // transform: "scale(0.83)",
      transformOrigin: "center top",
    };
  }

  if (deviceWidth < 786) {
    style = {};
  }

  return (
    <div
      onClick={handleFullScreen}
      id="App"
      style={{
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      <MainLayout />
    </div>
  );
}

export default App;
