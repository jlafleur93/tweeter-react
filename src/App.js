import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Message from "./components/Message/Message";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
function App() {
  const [isActive, setActive] = useState(false);
  function clickHandle() {
    setActive(!isActive);
  }
  const userDets = {
    user: "Snoop Dog",
    totalPosts: "10",
    posts: [
      {
        id: 1,
        message: "I actually really love both paw patrol, and the police",
        user: "blmpawpatrol",
        created_at: 1461116232227,
      },
      {
        id: 2,
        message: "same",
        user: "policedog",
        created_at: 1461113959088,
      },
      {
        id: 3,
        message:
          "hello this is my default message cattr is the best website on the internet - signed my 6yr old nephew",
        user: "siteowner",
        created_at: 1231113959088,
      },
      {
        id: 4,
        message:
          "Crispy Bacon, Bacon, Bacon, I hate bacon, Im a vegan, vegan, veggies. lets go",
        user: "Idea Jack",
        created_at: 123123519901,
      },
      {
        id: 5,
        message: "I need pictures of spiderman",
        user: "James J Jameson",
        created_at: 123123519901,
      },
      {
        id: 6,
        message: "Spiderman Spiderman Lets go Spiderman",
        user: "Spiderman",
        created_at: 122123519901,
      },
      {
        id: 7,
        message: "Taco Taco",
        user: "i<3Trains",
        created_at: 122123519901,
      },
    ],
  };
  return (
    <body>
      <Nav info={userDets.user} onClick={() => clickHandle()} />
      <Message posts={userDets.posts} />
      {isActive ? <Popup /> : null}
      <Footer />
    </body>
  );
}

export default App;
