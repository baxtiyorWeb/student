import { useState, useEffect } from "react";
import "../../Components/Component.css";
import { ApiServices } from "../../../setup/auth/api/api.servvices"
import Videos from "./videos";
import InternetConnection from "../../Components/internet-connection/internet-connection"
import CardLessons from "./card-lessons/card-lessons"

// import img1 from "../../../assets/images/img1.png";
// import img2 from "../../../assets/images/img2.png";
// import img3 from "../../../assets/images/img3.png";
// import img4 from "../../../assets/images/img4.png";
// import img5 from "../../../assets/images/img5.png";
// import img6 from "../../../assets/images/img6.png";
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

  startsForm = latest ? 3 : 1;



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
      <form autoComplete="off" onSubmit={handleSubmit}></form>
      <div className="home-page">
        <div className=" container">
          <div className="block">
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
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SASS</li>
                  <li>BOOTSTRSP</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT</li>
                  <li>ANGULAR</li>
                  <li>VUE</li>
                </ul>
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
              <CardLessons/>

                {/* {loading ? (
                  <h4>loding ....</h4>
                ) : (
                  data
                    .filter(value => {
                      if (searchTitle === "") {
                        return value;
                      } else if (
                        value.title.toLowerCase().includes(postQuery)
                      ) {
                        return value;
                      }
                    })
                    .map((item) => (
                      <div
                        className="videos"
                        key={item.id}
                      >
                        <div className="video">
                          <video src={item.video}></video>
                        </div>
                        <div className="video-title">
                          <h3>{item.title}</h3>
                        </div>
                        <div className="description">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))
                )} */}
                <Videos data={data} searchTitle={searchTitle} postQuery={postQuery} />
                <InternetConnection/>
                </div>
                
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
