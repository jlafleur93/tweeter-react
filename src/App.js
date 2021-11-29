import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Message from "./components/Message"
function App() {
  const userDets = {
    user: "Snoop Dog",
    totalPosts: "10",
    posts: {
      p01: {
        id: 1,
        message: "yeet",
      },
      p02: {
        id: 2,
        message: "same",
      },
    },
  };
  return (
    <body>
      <Nav info={userDets.user} />
      <Message/>
    </body>
  );
}

export default App;
