import React from "react";
import { Detector } from "react-detect-offline";
const InternetConnection = (props) => {
  const [hide, setHide] = React.useState("show-connect connection")
	const [hide2, setHide2] = React.useState("show-connect connection")
	
		setTimeout(() => {
			setHide(hide ? "hide-connect connection" : "show-connect connection")
		}, 5000);
      setTimeout(() => {
      setHide2(hide2 ? "hide-connection detect-block" : "show-connection detect-block")
    }, 5000);


  return (
    <div className={`${hide2}`}>
      <Detector
        render={({ online }) =>
          online ? (
            props.children
          ) : (
            <div
              className={`${hide}`}
            >
				<i className="fas fa-wifi"></i>
              <span style={{ marginBottom: "10px" }}>
                No Internet Connection
              </span>
			  
              <span>
                Please check your internet connection
              </span>
            </div>
          )
        }
      />
    </div>
  );
};

export default InternetConnection;
