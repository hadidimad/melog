import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [page, setPage] = useState("home");

  const pageChangeHandler = (pageName) => {
    setPage(pageName);
  };

  let content;
  if (page === "home") {
    content = <h1>Home page</h1>;
  } else if (page === "newPost") {
    content = <h1>post page</h1>;
  }
  return (
    <div>
      <Navbar pageChange={pageChangeHandler} />
      {content}
    </div>
  );
}

export default App;
