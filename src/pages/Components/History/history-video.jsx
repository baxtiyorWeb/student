import React from 'react';
import { useNavigate } from "react-router-dom";
const Videos = ({ data, searchTitle, postQuery }) => {
  const navigate = useNavigate();
  function navigateFunc(item) {
    navigate(`/view-lessons?${item}`, { replace: true });
  }
  function storage(video, title, description, history) {
    localStorage.setItem("api", video);
    localStorage.setItem("title", title);
    localStorage.setItem("description", description);
  }
   

return (
  <>
  {data.filter(data = (value)=>{
    if (searchTitle === "") {
      return value;
    } else if (value.title.toLowerCase().includes(postQuery)) {
      return value;
    }
  })
  .map((item) => (
    <div className="videos" key={item.id}>
    <div className="video">
    <video
    src={item.history}
    onClick={(e) =>
    storage(item.history, item.description, item.title) 
    ? console.log("error")
    : navigateFunc(item.history)

  }
  ></video>
  </div>
  <div className="video-title">
  <h3>{item.title }</h3>
  </div>
  <div className="description">
  <p>{item.description}</p>
  </div>
  </div>
  ))}
  </>
  );
};

export default Videos;
