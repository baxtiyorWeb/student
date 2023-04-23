import React from 'react';
import ReactPlayer from 'react-player';
import InternetConnection from "./../Components/internet-connection/internet-connection"
import VideoComment from './video-comment-detail/video-comment';
const VideoDetailPage = () => {

    return (
        <div className='video-detail'>
        <ReactPlayer
        url={localStorage.getItem("api")}
        style={{
         width: "800px",
         height: "500px",
         borderRadius:'20px',

        
        }}
        controls
        onError={()=> console.log("error")}
        />
        <h1 style={{
            borderBottom: "1px solid #333",
            padding: "10px",
            fontSize: "18px",
            textDecoration: "underline",
        }}>{localStorage.getItem("title")}</h1>
        <p style={{
            color: "purple",
            fontSize: "15px",
            fontWeight: 600,
        }}>{localStorage.getItem("description")}</p>

        <VideoComment/>


        <InternetConnection/>
        



        </div>
        )
}

export default VideoDetailPage
