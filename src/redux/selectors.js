// @ts-check

import { createSelector } from "@reduxjs/toolkit";
import { filter, find } from "lodash/fp";

const selectChannels = (state) => state.channels;
const selectMessages = (state) => state.messages;
const selectCurrentChannelId = (state) => state.currentChannelId;

const selectCurrentChannelMessages = createSelector(
  selectMessages,
  selectCurrentChannelId,
  (messages, currentChannelId) =>
    filter({ channelId: currentChannelId }, messages)
);

const selectCurrentChannel = createSelector(
  selectChannels,
  selectCurrentChannelId,
  (channels, currentChannelId) => find({ id: currentChannelId }, channels)
);

export {
  selectChannels,
  selectCurrentChannelId,
  selectCurrentChannelMessages,
  selectCurrentChannel,
};
