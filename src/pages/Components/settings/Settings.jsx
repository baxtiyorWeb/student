import React from "react";
import img1 from "../../../assets/images/img1.png";
const Settings = () => {
  const [toggle, setToggle] = React.useState(false);
  const [text, setText] = React.useState(false);
  const [value, setValue] = React.useState("");
  const removeSettings = (e) => {
    setToggle(!toggle);
    setValue("");
  };
  return (
    <div className="user-action">
      <div className="user-about">
        <div className="img">
          <img
            src={img1}
            alt=""
            style={{
              width: "150px",
              height: "160px",
              borderRadius: "20px",
              opacity: "0.5",
            }}
          />
          <i
            className="fas fa-camera"
            style={{
              position: "relative",
              bottom: "30px",
              right: "60px",
              fontSize: "25px",
              cursor: "pointer",
              backgroundColor: "black",
              color: "#fff",
              padding: "13px",
              borderRadius: "15px",
            }}
          ></i>
        </div>
        <div className="user-name">
          <div className="re-input">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={`${toggle ? "input" : "showInput"}`}
              placeholder={"enter your Name"}
            />
            <button
              className={`${toggle ? "input" : "showInput"}`}
              onClick={removeSettings}
            >
              save
            </button>
          </div>
          <h1
            className={`${toggle ? "showInput" : "input"}`}
            style={{
              color: "#fffc",
            }}
          >
            {value ? value : "Baxtiyor Qurbonnazarov"}
            <span
              className="fas fa-pen"
              onClick={() => setToggle(!toggle)}
            ></span>
          </h1>
          <span
            style={{
              color: "#fffc",
              fontSize: "20px",
            }}
          >
            {value ? value : "Im Frontend Developer"}{" "}
            <span
              className="fas fa-pen"
              onClick={() => setToggle(!toggle)}
            ></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Settings;
