import React, { useEffect, useState } from "react";
import Axios from "axios";
import url from "./url";
import PostCard from "./PostCard";

const Posts = (props) => {
  let [allPosts, setAllPosts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(0);
  const loadPosts = () => {
    Axios.get(url + "/post").then((response) => {
      setAllPosts(response.data);
      setLoadingStatus(1);

    }).catch((err)=>{
        console.log(err);
        setLoadingStatus(2);
    })
  };
  useEffect(() => {
    loadPosts();
    console.log("loaded");
  }, []);
  if (loadingStatus === 1) {
    return (
      <div className="row">
        {allPosts.map((post) => {
          return (
            <PostCard
              key={post.id}
              data={post}
              showPostHandler={props.showPostHandler}
            />
          );
        })}
      </div>
    );
  } else if (loadingStatus === 0) {
    return <h1>Loading ...</h1>;
  } else {
    return <h1> there is problem in loading posts</h1>;
  }
};

export default Posts;
