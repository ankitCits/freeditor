import React from "react";
import Image from "../../assets/startdesigning.png";
import { useSelector } from "react-redux";

const StartDesigning = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="mainsection" style={{ marginTop: "0%" }}>
      <div className="uploadvideo-rightsec">
        <div className="uploadvideo-innersection">
          <h1>Easy video editing for everyone</h1>
          <p>
            Our video editor comes with all the features required to create
            great videos – no experience needed.
          </p>
          <button
            className="choose-img"
            onClick={() => {
              isLoggedIn
                ? props.history.push("/image-editor")
                : props.setSelectedTool("image-editor");
            }}
          >
            Upload your Video
          </button>
        </div>
      </div>
      <div className="uploadvideo-leftsec">
        <img src={Image} alt="" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default StartDesigning;
