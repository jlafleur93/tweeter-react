import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Message from "./components/Message/Message";
function App() {
  const userDets = {
    user: "Snoop Dog",
    totalPosts: "10",
    posts: [
      { id: 1, message: "I love it", user: "blmpawpatrol" },
      { id: 2, message: "same", user: "policedog" },
    ],
  };
  return (
    <body>
      <Nav info={userDets.user} />
      <Message posts={userDets.posts} />
    </body>
  );
}

export default App;
