// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";

import ApiProvider from "./context/ApiProvider.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import MainRouter from "./router/MainRouter.jsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ApiProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <MainRouter />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
    <Toaster containerStyle={{ zIndex: 9999999 }} />
  </ApiProvider>
  // </StrictMode>
);
