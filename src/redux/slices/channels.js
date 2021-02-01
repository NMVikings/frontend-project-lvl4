// @ts-check

import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "channels",
  initialState: [],
  reducers: { createChannnel() {}, deleteChannel() {} },
});

export const { createChannnel, deleteChannel } = actions;
export default reducer;
