import React, { useEffect } from "react";
import "./App.css";
import SideBar from "./pages/Components/dashboard/SideBar";
import Main from "./pages/Components/main/Main";
import InternetConnection from "./pages/Components/internet-connection/internet-connection";
import LinearProgressWithLabel from "@mui/material/LinearProgress";
import { Box, Typography  , LinearProgress} from "@mui/material";
const App = () => {
  const [toggle, setToggle] = React.useState(true);
  const [loading, setLodaing] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [progress, setProgress] = React.useState(10);
  function FetchProduct(props) {
    setLodaing(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const { body } = data;
        setData(body);
      });
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }
  useEffect(() => {
    FetchProduct();
  }, []);

  return (
    <div className="App">
      <div>
        {loading}{" "}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" {...props} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
              props.value
            )}%`}</Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <LinearProgressWithLabel value={progress} />
        </Box>
      </div>
      <p style={{ color: "red" }}>{error}</p>
      {loading && (
        <>
          <Main toggle={toggle} setToggle={setToggle} />
          <SideBar toggle={toggle} setToggle={setToggle} />
        </>
      )}
      <InternetConnection />
    </div>
  );
};
export default App;
