import React, { useState } from "react";
import axios from "axios";
import url from "../url";

function NewComment(props) {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const postHandler = () => {
    axios
      .post(url + "/post/" + props.postId, {
        author: author,
        text: text,
        email: email,
        post: props.postId,
      })
      .then((resp) => {
        props.commentAdded();
        setShowAlert(false);
      })
      .catch((err) => {
        setShowAlert(true);
        setAlertMsg(String(err));
        console.log(err);
      });
  };

  return (
    <div className="card p-2">
      <h5 className="card-title">Add comment</h5>
      <div className="card-body">
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
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="example@mail.com"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label>Text</label>
            <textarea
              className="form-control"
              rows="2"
              onChange={(event) => {
                setText(event.target.value);
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
          Post Comment
        </button>
      </div>
    </div>
  );
}

export default NewComment;
