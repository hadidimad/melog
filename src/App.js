import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Post from "./components/Post";


function App() {
  const [page, setPage] = useState("home");
  const [showingPost, setShowingPost] = useState(0);

  const pageChangeHandler = (pageName) => {
    if (pageName !== "post") {
      setShowingPost(0);
    }
    setPage(pageName);
  };

  const showPostHandler = (id) => {
    pageChangeHandler("post");
    setShowingPost(id);
  };

  let content;
  if (page === "home") {
    content = <Posts showPostHandler={showPostHandler}/>;
  } else if (page === "newPost") {
    content = <h1>new post page</h1>;
  } else if (page === "post") {
    content = <Post id={showingPost}/>;
  }
  return (
    <div>
      <Navbar pageChange={pageChangeHandler} />
      <div className="fluid-container">{content}</div>
    </div>
  );
}

export default App;
