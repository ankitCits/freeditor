import React from "react";

import { NavLink } from "react-router-dom";

const BannerSection = () => {
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
            <NavLink to="/image-editor">
              <button>Start a WhiteBoard</button>
            </NavLink>
          </div>
          <p>Free Forever No credit Card Required </p>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
