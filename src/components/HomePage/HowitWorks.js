import React from "react";
import { Container } from "react-bootstrap";
import img1 from "../../assets/howitworks1.png";
import img2 from "../../assets/howitworks2.png";
import img3 from "../../assets/howitworks3.png";

const HowitWorks = () => {
  return (
    <div id="howitworks" style={{ width: "100%" }}>
      <div className="howitworks-left-inner" style={{ marginBottom: "30px" }}>
        {/* <h1>How to edit your Image & videos in a snap</h1> */}
      </div>
      <div className="howitworkssec">
        <div className="howitworkssec-righsec">
          <div className="howitworks-right-inner">
            <img src={img1} alt="" style={{ width: "20%", margin: "20px" }} />
            <h1>SignUp</h1>
            <p>
              For registration, fill in the required information, create an
              account, and set a password.
            </p>
          </div>
          <div className="howitworks-right-inner">
            <img src={img2} alt="" style={{ width: "20%", margin: "20px" }} />
            <h1>SignIn</h1>
            <p>
              To access your account, enter your user id and password. And click{" "}
              <b>SignIn.</b>
            </p>
          </div>
          <div className="howitworks-right-inner">
            <img src={img3} alt="" style={{ width: "20%", margin: "20px" }} />
            <h1>Edit</h1>
            <p>Upload an image or video from your device and edit it.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
