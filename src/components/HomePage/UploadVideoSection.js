import React from "react";
import Image from "../../assets/VideoEditing.png";
import { useSelector } from "react-redux";
const UploadVideoSection = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="mainsection">
      <div className="uploadvideo-leftsec">
        <img src={Image} alt="" style={{ width: "100%" }} />
      </div>
      <div className="uploadvideo-rightsec">
        <div className="uploadvideo-innersection">
          <h1>Online Image editor for everyone</h1>
          <p>
            Freeditor image editor lets you edit photos in just a few clicks. It
            covers various free online image editing tools,
          </p>
          <button
            onClick={() => {
              isLoggedIn
                ? props.history.push("/image-editor")
                : props.setSelectedTool("image-editor");
            }}
          >
            Upload your Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadVideoSection;
