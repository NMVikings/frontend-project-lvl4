// @ts-check

import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentChannelMessages } from "../redux";

const Messages = () => {
  const messages = useSelector(selectCurrentChannelMessages);
  return (
    <div className="chat-messages overflow-auto mb-3">
      {messages.map(({ message, nickname, id }) => (
        <div key={id} className="text-break">
          <b>{nickname}</b>: {message}
        </div>
      ))}
    </div>
  );
};

export default Messages;
