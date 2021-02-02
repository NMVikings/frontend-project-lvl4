// @ts-check

const selectChannels = (state) => state.channels;
const selectMessages = (state) => state.messages;
const selectCurrentChannelId = (state) => state.currentChannelId;

export { selectChannels, selectMessages, selectCurrentChannelId };
