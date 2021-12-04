import "./Message.css";
import React from "react";
import profile from "../../assets/profile.svg";
import share from "../../assets/share-button.svg";
import cat from "../../assets/cat.svg";
export default function Message(props) {
  const { posts } = props;
  const MessageMap = posts.map((x) => {
    return (
      <ul className="message-area" key={x.id}>
        <div className="cattr-details">
          <img className="user-profile" src={profile} alt="userprofile" />
          <aside className="profile-name">{x.user}</aside>
        </div>
        <p className="user-message">{x.message}</p>
        <div className="cattr-social">
          <p> {x.created_at} </p>
          <div className="social-image">
            <img src={share} alt="share" />
          </div>
          <div className="social-cat">
            <img src={cat} className="cat-icon" alt="cat-likes" />
          </div>
        </div>
      </ul>
    );
  });

  return MessageMap;
}
