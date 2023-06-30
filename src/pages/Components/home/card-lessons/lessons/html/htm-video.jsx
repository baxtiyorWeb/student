import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

const HtmlVideo = ({ data, searchTitle, postQuery }) => {
  const { videoUrlId } = useParams()
  const navigate = useNavigate();
  function navigateFunc(item) {
    navigate(`/view-lessons?${videoUrlId}`, { replace: true });
  }
  function storage(video, title, description, history) {
    localStorage.setItem("api", video);
    localStorage.setItem("title", title);
    localStorage.setItem("description", description);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ history, title, description })
    };

    fetch('https://63a5c4fcf8f3f6d4abff62b9.mockapi.io/api/v1/history', requestOptions)
      .then(response => response.json())
      .then(data => {

      });

  }


  return (
    <>
      {data.filter(data = (value) => {
        if (searchTitle === "") {
          return value;
        } else if (value.title.toLowerCase().includes('html')) {
          return value;
        }
      })
        .map((item) => (
          <div className="videos" key={item.id}>
            <div className="video">
              <video
                src={item.video}
                onClick={(e) =>
                  storage(item.video, item.title, item.description, item.video)
                    ? console.log("error")
                    : navigateFunc(item.video)

                }
              ></video>
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

export default HtmlVideo;
