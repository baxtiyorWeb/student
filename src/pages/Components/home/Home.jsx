import { useState, useEffect } from "react";
import "../../Components/Component.css";
import { ApiServices } from "../../../setup/auth/api/api.servvices"
import Videos from "./videos";
import InternetConnection from "../../Components/internet-connection/internet-connection"
import CardLessons from "./card-lessons/card-lessons"
import { Link, useParams } from "react-router-dom"
import PopupModal from "../popup-modal/popup-modal";
import Loading from './../../../layout/loading/loading';
const Home = ({
  searchTitle,
  setSearchTitle,
  setsearchParams,
  searchParams,
  handleSubmit,
  startsForm,
}) => {
  const [data, setData] = useState([]);
  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has("latest");
  const [loading, setLoading] = useState('')
  const [time, setTime] = useState(5000)


  function Loading() {
    setTimeout(() => {
      setTime(timer => timer ? "none" : "block")

    }, time);
  }


  startsForm = latest ? 3 : 1;
  const { videoUrlId } = useParams()


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiServices.fetching(`video?part=snippets&q=ok`)
        setData(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
    // ApiServices.fetching('video').then(data=> console.log(data))
  }, []);

  // setData([]);
  // const loadPost = async () => {
  //   setLoading(true);
  //   const response = await axios.get(
  //     "https://63fe8692571200b7b7cc0611.mockapi.io/video/"
  //   );
  //   setData(response.data);
  //   setLoading(false);
  // };
  // loadPost();
  // if (!data) return null;

  // const clickedVideoId = () => {
  //   const { id } = useParams();
  //   const getData = async () => {
  //     const response = await axios.get(
  //       `https://63fe8692571200b7b7cc0611.mockapi.io/video/${id}`
  //     );
  //     console.log(response);
  //     console.log(id);
  //   };
  //   getData();
  // };



  return (
    <>
      <Loading style={{ display: `${time}` }} />
      <form autoComplete="off" onSubmit={handleSubmit}></form>
      <div className="home-page">
        <PopupModal />
        <div className=" container">
          <div className="block">
            {/* <Slider/> */}
            <div className="about-platform">
              <div className="title">
                <h2>Students - Dasturlash Kurslari</h2>
              </div>
              <div className="about-description">
                <div className="description">
                  Dasturlashga oid to'liq va amaliy kurslarga boy platformaga
                  xush kelibsiz. Bizda barcha  kurslarni bepulga
                  o'rganishingiz mumkin.
                </div>
              </div>
              <div className="box">
                <div className="box-list">Umrbod Dostup</div>
                <div className="box-list">Siz xohlagan joyda</div>
                <div className="box-list">Mukammal</div>
                <div className="box-list">Bepul</div>
              </div>
              <div className="courses-about">
                <Link to="/html-lessons">HTML</Link>
                <Link to="#">CSS</Link>
                <Link to="#">SASS</Link>
                <Link to="#">BOOTSTRAP</Link>
                <Link to="#">JAVASCRIPT</Link>
                <Link to="#">REACT</Link>
                <Link to="#">ANGULAR</Link>
                <Link to="#">VUE</Link>
              </div>

              <h3
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  borderBottom: "1px solid rgb(80,80,80)",
                  padding: "5px",
                }}
              >
                sizga ba'zi video darslarni tavsiya qilamiz
              </h3>
              <div className="video-card-block">
                <CardLessons />
                <Videos videoUrlId={videoUrlId} data={data} searchTitle={searchTitle} postQuery={postQuery} />
                <InternetConnection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
