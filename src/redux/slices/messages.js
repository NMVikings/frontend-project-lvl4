// @ts-check

import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "messages",
  initialState: [],
  reducers: { addMessage() {} },
});

export const { addMessage } = actions;
export default reducer;
