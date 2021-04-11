import axios from "axios";
import React, { useState } from "react";
import url from "./url";

function NewPost(props) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");


  const postHandler = () => {
    axios
      .post(url + "/post", {
        author: author,
        title: title,
        excerpt: excerpt,
        content: content,
      })
      .then((resp) => {
        props.showPostHandler(resp.data.id);
        setShowAlert(false);
      })
      .catch((err) => {
        setShowAlert(true);
        setAlertMsg(String(err));
        console.log(err);
      });
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            placeholder="your name"
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="your post title"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Excerpt</label>
          <input
            type="text"
            className="form-control"
            placeholder="summary of you post"
            onChange={(event) => {
              setExcerpt(event.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>content</label>
          <textarea
            className="form-control"
            rows="3"
            onChange={(event) => {
              setContent(event.target.value);
            }}
          ></textarea>
        </div>
      </form>
      {showAlert && (
        <div className="alert alert-danger" role="alert">
          {alertMsg}
        </div>
      )}
      <button
        type="button"
        className="btn btn-block btn-success"
        onClick={postHandler}
      >
        Post
      </button>
    </div>
  );
}

export default NewPost;
