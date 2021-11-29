import React from "react";
import "./Nav.css";
import plus from "../assets/plus-sign.svg";
import message from "../assets/message.svg";
import profile from "../assets/profile.svg";

export default function Nav(props) {
  const { info } = props;
  return (
    <nav className="tweet-bar">
      <div className="profile-info">
        <img src={profile} />
        {info}
      </div>
      <span className="catrr">catrr</span>
      <div className="write-tweet">
        <span>
          <strong>Create</strong> a new post.
        </span>
        <img src={plus} />
        <img src={message} />
        <div class="container"></div>
      </div>
    </nav>
  );
}
