// @ts-check

import "core-js/stable";
import "regenerator-runtime/runtime";

import "../assets/application.scss";

import React from "react";
import faker from "faker";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { io } from "socket.io-client";
import Cookies from "js-cookie";

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import gon from "gon";
import reducer, { addMessage } from "./redux";
import Nickname from "./nickname";
import App from "./App";

if (process.env.NODE_ENV !== "production") {
  localStorage.debug = "chat:*";
}

const container = document.getElementById("chat");

const store = configureStore({
  reducer,
  preloadedState: gon,
});

const socket = io();

socket.on("newChannel", (event) => {
  console.log("newChannel", event);
});

socket.on("removeChannel", (event) => {
  console.log("removeChannel", event);
});

socket.on("renameChannel", (event) => {
  console.log("renameChannel", event);
});

socket.on("newMessage", ({ data: { attributes } }) => {
  store.dispatch(addMessage(attributes));
});

const Root = () => {
  const nickname = Cookies.get("nickname") ?? faker.name.findName();

  Cookies.set("nickname", nickname);
  return (
    <Nickname.Provider value={nickname}>
      <Provider store={store}>
        <App />
      </Provider>
    </Nickname.Provider>
  );
};

ReactDOM.render(<Root />, container);

console.log("it works!");
console.log("gon", gon);
