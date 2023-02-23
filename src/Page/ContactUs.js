import React from "react";
import { useEffect } from "react";
import AboutUsImg from "../assets/AboutUs1.png";
import AboutUsImg2 from "../assets/AboutUs2.png";
import textimg from "../assets/textimg.png";
import AppBase from "../components/AppBase";
const ContactUs = (props) => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <AppBase>
      <Contact1 />
      {/* <Contact2 />
      <Contact3 /> */}
    </AppBase>
  );
};

export default ContactUs;

const Contact1 = () => {
  return (
    <>
      <div className="aboutusMain">
        <div className="aboutusMainleft">
          <h1>Contact Us</h1>
          {/* <h3>
            At Besnik Consultancy, we take pride in our values – service,
            integrity, and excellence.
          </h3> */}

          {/* <div className="aboutusMaincontainer">
            <div className="aboutusMaincontainerrow">
              <div className="aboutusMaincontainerrowinner">
                <h1>1.</h1>
                <h2>Who We Are</h2>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
              <div className="aboutusMaincontainerrowinner">
                <h1>1.</h1>
                <h2>Who We Are</h2>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
            </div>
            <div className="aboutusMaincontainerrow">
              <div className="aboutusMaincontainerrowinner">
                <h1>1.</h1>
                <h2>Who We Are</h2>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
              <div className="aboutusMaincontainerrowinner">
                <h1>1.</h1>
                <h2>Who We Are</h2>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
            </div>
          </div> */}
          <div className="aboutusMaincontainer">
            <div class="mb-3 col-md-12 col-12">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div class="mb-3 col-md-12 col-12">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div class="mb-3 col-md-12 col-12">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Email" />
              </div>
            </div>
            <div class="mb-3 col-md-12 col-12">
              <div class="form-group">
                <textarea
                  rows="5"
                  class="form-control"
                  placeholder="Type your message here"
                ></textarea>
              </div>
            </div>
            <div class="col-md-12 col-12">
              <div class="btn-div">
                <button class="btn btn-primary">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutusMainright">
          <img src={AboutUsImg} alt="" />
        </div>
      </div>
    </>
  );
};
const Contact2 = () => {
  return (
    <>
      <div className="aboutus2">
        <div className="aboutus2img">
          <img src={AboutUsImg2} alt="" />
        </div>
        <div className="aboutus2content">
          <h1>Level up your Design Inventory</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            distinctio repellat quo excepturi et tempora voluptatum. Error
            numquam ut praesentium.
          </p>
          <h2>Auto Layout</h2>
        </div>
      </div>
    </>
  );
};
const Contact3 = () => {
  return (
    <>
      <div className="aboutus3">
        <h1>Editing In Minutes</h1>
        <h5>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius fuga
          minus vero eos explicabo dolorem distinctio optio cupiditate fugit
          quisquam repudiandae iure, labore dolore culpa dignissimos praesentium
          totam expedita est?
        </h5>
        <div className="aboutus3row">
          <div className="aboutus3rowinner">
            <img src={textimg} alt="" />
            <h4>Add Text</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
              nostrum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ab, nostrum!
            </p>
          </div>
          <div className="aboutus3rowinner">
            <img src={textimg} alt="" />
            <h4>Add Text</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
              nostrum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ab, nostrum!
            </p>
          </div>
          <div className="aboutus3rowinner">
            <img src={textimg} alt="" />
            <h4>Add Text</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
              nostrum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ab, nostrum!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
