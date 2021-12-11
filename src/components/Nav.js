import React from "react";
import "./Nav.css";

import profile from "../assets/profile.svg";

export default function Nav(props) {
  const { info, onClick } = props;
  const user = {
    info
  }
  function changeUser(){
    user.info = "Bob Dole"
  }
  return (
    <nav className="tweet-bar">
      <div className="profile-info">
        <img src={profile} alt="profile-pic" onClick={()=> changeUser()} />
        {user.info}
      </div>
      <span className="catrr">catrr</span>
      <div className="write-tweet">
        <span>
          <strong onClick={onClick}>Create</strong> a new post.
        </span>

        <div class="container"></div>
      </div>
    </nav>
  );
}
