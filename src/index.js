// @ts-check

import "core-js/stable";
import "regenerator-runtime/runtime";

import "../assets/application.scss";

import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

import gon from "gon";
import reducer from "./redux";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";

if (process.env.NODE_ENV !== "production") {
  localStorage.debug = "chat:*";
}

const container = document.getElementById("chat");

const store = configureStore({
  reducer,
  preloadedState: gon,
});

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, container);

console.log("it works!");
console.log("gon", gon);
