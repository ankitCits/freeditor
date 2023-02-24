import React, { useState } from "react";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

const BannerSection = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      <div className="bannerSec">
        <div className="centerdiv">
          <h3>
            An Advance Media <br /> Editing Platform
          </h3>
          <h1>
            Now edit images & Videos within a Click , An AI Embeded <br /> Media
            Editing Platform
          </h1>
          <div className="centredivbuitton">
            <button
              className="choose-img"
              onClick={() => {
                isLoggedIn
                  ? props.history.push("/image-editor")
                  : props.setSelectedTool("image-editor");
              }}
            >
              Start a WhiteBoard
            </button>
          </div>
          <p>Free Forever No credit Card Required </p>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
