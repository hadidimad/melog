import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Post from "./components/Post";
import NewPost from "./components/NewPost";

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
    console.log("showing post", id);
    setShowingPost(id);
    pageChangeHandler("post");
  };
  
    let content;
    if (page === "home") {
      content = <Posts showPostHandler={showPostHandler} />;
    } else if (page === "newPost") {
      content = <NewPost showPostHandler={showPostHandler} />;
    } else if (page === "post") {
      content = <Post id={showingPost} />;
    }
    return (
      <div>
        <Navbar pageChange={pageChangeHandler} />
        <div className="fluid-container">{content}</div>
      </div>
    );
 
}

export default App;
