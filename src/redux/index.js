// @ts-check

import { combineReducers } from "@reduxjs/toolkit";

import channels from "./slices/channels";
import messages from "./slices/messages";
import currentChannelId from "./slices/currentChannelId";

const reducer = combineReducers({ channels, messages, currentChannelId });

export * from "./slices/channels";
export * from "./slices/messages";
export * from "./slices/currentChannelId";
export * from "./selectors";
export default reducer;
