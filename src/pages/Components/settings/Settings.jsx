import React from "react";
import img1 from "../../../assets/images/img1.png";
const Settings = () => {
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
              borderRadius: "15px"
            }}
          ></i>
        </div>
        <div className="user-name">
          <h1 style={{
            color: '#fffc',
            
          }}>Baxtiyor Qurbonnazarov</h1>
          <span style={{
            color: '#fffc',
            fontSize: "20px"
            
          }}>Im Frontend Developer</span>
        </div>
      </div>
    </div>
  );
};

export default Settings;
