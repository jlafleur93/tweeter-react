import React from "react";
import "./Nav.css";
import plus from "../assets/plus-sign.svg"
import message from "../assets/message.svg"
import profile from "../assets/profile.svg"

export default function Nav(props) {
  const {image} = props
  return (
    <nav className="tweet-bar">
      <img src={profile}/>
      <span>tweeter</span>
      <div  className="write-tweet">
        <span>
          <strong>Write</strong> a new tweet. 
        </span>
        <img src={plus}/>
        <img src={message}/>
        <div class="container"></div>
      </div>
      
    </nav>
  );
}
