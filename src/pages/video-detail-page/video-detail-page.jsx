import React from 'react';
import ReactPlayer from 'react-player';
import InternetConnection from "./../Components/internet-connection/internet-connection"
const VideoDetailPage = () => {

    return (
        <div>
        <ReactPlayer
        url={localStorage.getItem("api")}
        style={{ width: "500px", height: "400px", borderRadius:'20px' , border: '1px solid #888'}}
        controls
        onError={()=> console.log("error")}

        />
        <h1>{localStorage.getItem("title")}</h1>
        <p>{localStorage.getItem("description")}</p>
        <InternetConnection/>
        </div>
        )
}

export default VideoDetailPage
