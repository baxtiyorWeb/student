import { useState, useEffect } from "react";
import "../../../../Component.css";
import { ApiServices } from "./../../../../../../setup/auth/api/api.servvices";
import InternetConnection from "./../../../../internet-connection/internet-connection";
import HtmlCodes from "./html-codes/html-codes";
import HtmlSideBar from "./html-codes/html-side-bar/html-side-bar";
import Headings from "./html-codes/headings";
import Parapgraph from "../html/html-codes/parapgraph";
import Videos from "../../../videos"
// import img1 from "../../../assets/images/img1.png";
// import img2 from "../../../assets/images/img2.png";
// import img3 from "../../../assets/images/img3.png";
// import img4 from "../../../assets/images/img4.png";
// import img5 from "../../../assets/images/img5.png";
// import img6 from "../../../assets/images/img6.png";
import { Route, Routes } from "react-router-dom";
const HtmlLessons = ({
  searchTitle,
  setSearchTitle,
  setsearchParams,
  searchParams,
  handleSubmit,
  startsForm,
}) => {
  const [data, setData] = useState([]);
  const latest = searchParams.has("latest");
  // const navigate = useNavigate()
  startsForm = latest ? 3 : 1;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiServices.fetching(`video?part=snippets&q=ok`);
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
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
      <div className="home-page html-page-lessons">
        <div className="container">
          <div className="block">
            <div className="about-platform">
              <div className="title">
                <h2>Students - Dasturlash Kurslari</h2>
              </div>

              <h3
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  borderBottom: "1px solid rgb(80,80,80)",
                  padding: "5px",
                }}
              >
                html bo'yicha to'liq darslik
              </h3>
              <Routes>
                <Route path="/" element={<Headings />} />
                <Route path="/headings" element={<Headings />} />
                <Route path="/paragraph" element={<Parapgraph />} />
              </Routes>
              <HtmlSideBar />
              <Videos
                data={data}
                searchTitle={searchTitle}
                // postQuery={postQuery}
              />

              <InternetConnection />
              {/* 
             <p style={{ color: "lightgreen", fontWeight: "600" }}>
                HTML (HyperTextMarkupLanguage ya'ni "GiperMatn belgilash tili
                hisoblanadi") Html web sitening strukturasi bo'yicha masul
                hisoblanadi frontend uchun kerakli texnologiyalardan biri sizga
                tushunarli bo'lishi uchun kursimizdagi video darsliklarni
                ko'rishni maslahat beramiz{" "}
              </p>

              <HtmlCodes />
              <div className="video-card-block">
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
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HtmlLessons;
