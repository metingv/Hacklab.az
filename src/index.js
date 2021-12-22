import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
//import RootReducer from "./RootReducer.js";
import RootReducer from "./Reducer/index.js";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./i18n";
const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
