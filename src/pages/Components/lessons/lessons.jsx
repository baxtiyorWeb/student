import { useState, useEffect } from "react";
import axios from "axios";
import Videos from "../home/videos";
import { ApiServices } from "../../../setup/auth/api/api.servvices";
import { useParams } from "react-router-dom";
const Lessons = ({
  searchTitle,
  setSearchTitle,
  setsearchParams,
  searchParams,
  handleSubmit,
  startsForm,
}) => {
  const {id} = useParams()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has("latest");
  const [selectedCategory, setSelectedCategory] = useState("new")
  const selectedCategoryHandler = category => setSelectedCategory(category)

  startsForm = latest ? 3 : 1;


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiServices.fetching(`video?part=snippets&q=${selectedCategory}`)
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
                    xush kelibsiz. Bizda barcha pullik kurslarni bepulga
                    o'rganishingiz mumkin.
                  </div>
                </div>
                <h3
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    borderBottom: "1px solid rgb(80,80,80)",
                    padding: "5px",
                  }}
                >
                  bu sahifada siz video darsliklarni ko'rishingiz mumkin
                </h3>
                <div className="video-card-block">
                  <Videos data={data} searchTitle={searchTitle} postQuery={postQuery} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Lessons;
