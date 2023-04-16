import { useState, useEffect } from 'react'
import { ApiServices } from '../../setup/auth/api/api.servvices';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

const VideoDetailPage = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiServices.fetching(`video?part=snippets&q=ok`)
                setData(data.data[0])
            } catch (error) {
                console.log(error)
            }
        }
        getData()
        // ApiServices.fetching('video').then(data=> console.log(data))
    }, []);
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
