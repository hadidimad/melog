import React, { useEffect, useState } from "react";
import Axios from "axios";
import url from "./url";
import PostCard from "./PostCard";

const Posts = (props) => {
  let [allPosts, setAllPosts] = useState([]);
  const loadPosts = () => {
    Axios.get(url + "/posts").then((data) => {
      setAllPosts(data);
    });
  };
  useEffect(() => {
    //loadPosts();
    setAllPosts([
      {
        title: "test title",
        author: "hadi",
        date: "2021/2/3",
        exerpt: "short test text",
      },
      {
        title: "test title",
        author: "hadi",
        date: "2021/2/3",
        exerpt: "short test text",
      },
      {
        title: "test title",
        author: "hadi",
        date: "2021/2/3",
        exerpt: "short test text",
      },
      {
        title: "test title",
        author: "hadi",
        date: "2021/2/3",
        exerpt: "short test text",
      },
      {
        title: "test title",
        author: "hadi",
        date: "2021/2/3",
        exerpt: "short test text",
      },
    ]);
    console.log("loaded");
  }, []);

  return (
    <div className="row">
      {allPosts.map((post) => {
        return <PostCard data={post} />;
      })}
    </div>
  );
};

export default Posts;
