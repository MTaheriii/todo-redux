import React from "react";
import { render } from "react-dom";
import "./styles.css";
import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";
import App from "./components/App";

const rootElement = document.getElementById("root");
const store = createStore(reducers);
console.log("----------------- store");
console.log(store);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
