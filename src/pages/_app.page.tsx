import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import userbase from "userbase-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "../store";
import "../styles/global.scss";

const userBaseAppId = "9eedbf25-da7d-469b-93d7-65840c288563";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    userbase.init({
      appId: userBaseAppId,
    });
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );
}
