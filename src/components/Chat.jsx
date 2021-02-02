// @ts-check

import React from "react";

import MessageForm from "./MessageForm";
import Messages from "./Messages";

const Chat = () => (
  <div className="col h-100">
    <div className="d-flex flex-column h-100">
      <Messages />
      <MessageForm />
    </div>
  </div>
);

export default Chat;
