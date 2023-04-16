import React from 'react';
import ReactPlayer from 'react-player';

const VideoDetailPage = () => {

return (
    <div>
    <ReactPlayer
    url={localStorage.getItem("api")} style={{ width: "500px", height: "400px" }}
    controls
    onError={()=> console.log("error")}

/>
<h1>{localStorage.getItem("title")}</h1>
<p>{localStorage.getItem("description")}</p>
</div>
)
}

export default VideoDetailPage
