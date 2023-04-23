import React from "react";
import "./Comments.css";
import Comment from "./comment/comment";
const Comments = () => {
  return (
    <div className="post-container">
      <div className="poster-element">
        <Comment />
      </div>
      <div className="post-element">
        <input
          type="text"
          className="post-input-el"
          placeholder="send your message"
        />
        <input type="file" className="file-input-el fas fa-file" />
        <button className="post-send-btn">
          <i className={"bx bx-send"}></i>
        </button>
      </div>
    </div>
  );
};

export default Comments;
