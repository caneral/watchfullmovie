import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// ** Redux Imports
import { Provider } from "react-redux";
import { store } from "./redux/storeConfig/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
