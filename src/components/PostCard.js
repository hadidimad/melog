import React from "react";

const postCard = (props) => {
  return (
    <div className="col-md-3 m-1">
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <p className="card-text">{props.data.exerpt}</p>
          <p className="card-text">
            <small className="text-muted">
              by {props.data.author} at {props.data.date}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default postCard;
