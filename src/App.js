import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Message from "./components/Message/Message";
import Footer from "./components/Footer/Footer"
function App() {
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
        created_at: 1461113959088 },
      {
        id: 3,
        message: "hello this is my default message cattr is the best website on the internet - signed my 6yr old nephew",
        user: "siteowner",
        created_at: 1231113959088,
      },
      {
        id: 4, 
        message: "Crispy Bacon, Bacon, Bacon, I hate bacon, Im a vegan, vegan, veggies. lets go", 
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
      id:6,
      message: "SpidermanSpiderman Lets go Spiderman", 
      user: "Spidermans Spiderman", 
      created_at:122123519901
    },
    {
    id:7,
    message:"Taco Taco", 
    user: "i<3Trains", 
    created_at:122123519901
    },
    ],
  };
  return (
    <body>
      <Nav info={userDets.user} />
      <Message posts={userDets.posts} />
      <Footer/>
    </body>
  );
}

export default App;
