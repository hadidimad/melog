import React from "react";

const commentCard = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.data.author}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.data.email}</h6>
        <p className="card-text">{props.data.text}</p>
      </div>
    </div>
  );
};
export default commentCard;
