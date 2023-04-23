import React from "react";

const VideoComment = () => {
  const [value, setValue] = React.useState("");
  return (
    <div className="video-comment-container">
      <div className="block">
        <input
          type="text"
          placeholder="add comment"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default VideoComment;
