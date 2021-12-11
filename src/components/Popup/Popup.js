import React from "react";
import "./Popup.css";
import plus from "../../assets/plus-sign.svg";
import message from "../../assets/message.svg";
export default function Popup() {
  return <div className="post-area">
    <img src={plus} />
    <img src={message}/>
  </div>;
}
