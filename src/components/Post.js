import axios from "axios";
import React, { useEffect, useState } from "react";
import url from "./url";
import commentCard from "./postPage/CommentCard";

const Post = (props) => {
  const [postData, setPostData] = useState({});
  const [showPost, setShowPost] = useState(false);

  const loadData = () => {
    axios.get(url + "/" + props.id).then((data) => {
      setPostData(data);
      setShowPost(true);
    });
  };
  useEffect(() => {
    loadData();
  }, []);
  if (showPost) {
    return (
      <React.Fragment>
        <h1> {postData.title}</h1>
        <p>{postData.content}</p>
        <h2>comments:</h2>
        <div style={{ padding: 5 }}>
          {postData.comments.map((comment) => {
            return <commentCard key={comment.id} data={comment} />;
          })}
        </div>
      </React.Fragment>
    );
  } else {
    return <h2>Loading post ...</h2>;
  }
};

export default Post;
