// @ts-check

import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "currentChannelId",
  initialState: null,
  reducers: { setCurrentChannelId() {} },
});

export const { setCurrentChannelId } = actions;
export default reducer;
