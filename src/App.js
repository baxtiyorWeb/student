import React, { useEffect } from "react";
import "./App.css";
import SideBar from "./pages/Components/dashboard/SideBar";
import Main from "./pages/Components/main/Main";
import InternetConnection from "./pages/Components/internet-connection/internet-connection";
const App = () => {
  const [toggle, setToggle] = React.useState(true);
  const [loading, setLodaing] = React.useState(false);
  function FetchProduct(props) {
    setLodaing(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => console.log("loaded"));
  }
  useEffect(() => {
    FetchProduct();
  }, []);

  return (
    <div className="App">
      <div>{loading}</div>
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
