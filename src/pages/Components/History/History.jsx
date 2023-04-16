import { useState, useEffect } from "react";
import Videos from "./history-video";
import { ApiServices2 } from "../../../setup/auth/api/api.servvices";
import InternetConnection from "../../Components/internet-connection/internet-connection"
const History = ({
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
        const data = await ApiServices2.fetching(`history?part=snippets&q=ok`)
        setData(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
    // ApiServices.fetching('video').then(data=> console.log(data))
  }, []);
  if (!data) return null;
  return (
    <div>
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
                    xush kelibsiz. Bizda barcha pullik kurslarni bepulga
                    o'rganishingiz mumkin.
                  </div>
                </div>
                <h3
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    borderBottom: "1px solid rgb(80,80,80)",
                    padding: "5px"
                  }}
                >
                  bu sahifada siz ko'rgan videolar tarixi
                </h3>
                <div className="video-card-block">
                  <Videos data={data} searchTitle={searchTitle} postQuery={postQuery}  />
                  <InternetConnection/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default History;
