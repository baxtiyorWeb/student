import React from "react";
import "./App.css";
import SideBar from "./pages/Components/dashboard/SideBar";
import Main from "./pages/Components/main/Main";
const App = () => {
  const [toggle, setToggle] = React.useState(true)

  return (
    <div className="App">
      <Main toggle={toggle} setToggle={setToggle} />
      <SideBar toggle={toggle} setToggle={setToggle}  />
    </div>
  );
};
export default App;
