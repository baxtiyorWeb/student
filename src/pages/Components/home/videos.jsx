import React from "react";
import { Link, useNavigate , useParams } from "react-router-dom";
const Videos = ({ data, searchTitle, postQuery}) => {
  const navigate = useNavigate();
  let  { videoUrlId } = useParams()
  function navigateFunc(item) {
    videoUrlId = item
    navigate(`/view-lessons?${videoUrlId}`);
  }
  function storage(video, title, description, history) {
    localStorage.setItem("api", video);
    localStorage.setItem("title", title);
    localStorage.setItem("description", description);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ history, title, description }),
    };

    fetch(
      "https://63a5c4fcf8f3f6d4abff62b9.mockapi.io/api/v1/history",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {});
  }

  return (
    <>
      {data
        .filter(
          (data = (value) => {
            if (searchTitle === "") {
              return value;
            } else if (value.title.toLowerCase().includes(postQuery)) {
              return value;
            }
          })
        )
        .map((item) => (
          <div className="videos" key={item.id}>
            <div className="video">
              <Link to={`/view-lessons/${item.id}`}>
              <video
                src={item.video}
                onClick={(e) =>
                  storage(item.video, item.title, item.description, item.video)
                    ? console.log("error")
                    : navigateFunc(item.video)
                }
              ></video>
              </Link>
            </div>
            <div className="video-title">
              <h3>{item.title}</h3>
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
