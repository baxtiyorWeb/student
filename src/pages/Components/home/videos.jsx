import { useNavigate } from "react-router-dom";

const Videos = ({ data, searchTitle, postQuery }) => {
  const navigate = useNavigate();
  function navigateFunc(item) {
    navigate(`/view-lessons?${item}`, { replace: true });
  }
  function storage(video, title, description) {
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
                src={item.video}
                onClick={(e) =>
                  storage(item.video, item.title, item.description)
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

export default Videos;
