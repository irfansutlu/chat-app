import React from "react";
import Add from "../images/add.png";
import Cam from "../images/cam.png";
import More from "../images/more.png";
import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-info">
        <span>Jane</span>
        <div className="chat-icons">
          <img src={Cam} />
          <img src={Add} />
          <img src={More} />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  );
};

export default Chat;
