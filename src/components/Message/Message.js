import "./Message.css";
import React from "react";
import profile from "../../assets/profile.svg";
export default function Message(props) {
  const { posts } = props;
  const MessageMap = posts.map((x) => {
    return (
      <ul className="message-area" key={x.id}>
        <div className="cattr-details">
          <img className="user-profile" src={profile} />
          <aside>{x.user}</aside>
        </div>
        <p>{x.message}</p>
      </ul>
    );
  });

  return MessageMap;
}
