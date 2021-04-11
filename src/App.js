import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

function App() {
  const [page, setPage] = useState("home");
  const [showingPost, setShowingPost] = useState({});

  const pageChangeHandler = (pageName) => {
    if (pageName !== "post") {
      setShowingPost({});
    }
    setPage(pageName);
  };

  let content;
  if (page === "home") {
    content = <Posts />;
  } else if (page === "newPost") {
    content = <h1>new post page</h1>;
  } else if (page === "post") {
    content = <h1>single post page</h1>;
  }
  return (
    <div>
      <Navbar pageChange={pageChangeHandler} />
      <div className="fluid-container">{content}</div>
    </div>
  );
}

export default App;
