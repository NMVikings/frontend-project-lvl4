import { combineReducers } from "@reduxjs/toolkit";

import channels from "./slices/channels";
import messages from "./slices/messages";
import currentChannelId from "./slices/currentChannelId";

const reducer = combineReducers({ channels, messages, currentChannelId });

export default reducer;
