import axios from "axios";
import React, { useEffect, useState } from "react";
import url from "./url";
import CommentCard from "./postPage/CommentCard";
import NewComment from "./postPage/NewComment";

const Post = (props) => {
  const [postData, setPostData] = useState({});
  const [showPost, setShowPost] = useState(false);
  

  const loadData = () => {
    axios.get(url + "/post/" + props.id).then((response) => {
      setPostData(response.data);
      setShowPost(true);
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  if (showPost) {
    return (
      <div style={{ paddingLeft: 10 }}>
        <h1> {postData.title}</h1>
        <p>{postData.content}</p>
        <h2>comments:</h2>
        <div style={{ padding: 5 }}>
          {postData.comments.map((comment) => {
            return <CommentCard key={comment.id} data={comment} />;
          })}

          <NewComment postId={props.id} commentAdded={loadData} />
        </div>
      </div>
    );
  } else {
    return <h2>Loading post ...</h2>;
  }
};

export default Post;
