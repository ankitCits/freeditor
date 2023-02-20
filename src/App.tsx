import React from "react";
// import Footer from "./components//HomePage/Footer";
import Header from "./components//HomePage/Header";
// import Header from "../Components/Header";
import img1 from "./assets/howitworks1.png"
import img2 from "./assets/howitworks2.png"
import img3 from "./assets/howitworks3.png"
import Image from "./assets/VideoEditing.png";
import BM from "./assets/BM.png";
// import Image from "./assets/startdesigning.png";
import Image1 from "./assets/CardImg1.png";
import Image2 from "./assets/CardImg2.png";
// import Image from "../Assets/MainBaneer.png";
// import Image2 from "../Assets/IMGMOB.png";
// import Image from "../Assets/editingCompany.png";


const App = () => {
  return <>
    <Header />
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
          {/* <NavLink to="/edit"> */}
            <button>Start a WhiteBoard</button>
          {/* </NavLink> */}
        </div>
        <p>Free Forever No credit Card Required </p>
      </div>
    </div>
    <div className="BannerSecMobileImage">
        <img src={BM} alt="" style={{ width: "100%" }} />
      </div>
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
            For registration, fill in the required information, create an account, and set a password.
            </p>
          </div>
          <div className="howitworks-right-inner">
            <img src={img2} alt="" style={{ width: "20%", margin: "20px" }} />
            <h1>SignIn</h1>
            <p>
            To access your account, enter your user id and password. And click <b>SignIn.</b> 

            </p>
          </div>
          <div className="howitworks-right-inner">
            <img src={img3} alt="" style={{ width: "20%", margin: "20px" }} />
            <h1>Edit</h1>
            <p>
            Upload an image or video from your device and edit it.
            </p>
          </div>
        </div>
      </div>
    </div>
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
          {/* <button  onClick={() => {
              props.setSelectedTool('image-editor')
          }}>Upload your Image</button> */}
        </div>
      </div>
    </div>
    <div className="mainsection" style={{marginTop: "0%"}}>
            <div className="uploadvideo-rightsec">
                <div className="uploadvideo-innersection">
                    <h1>Easy video editing for everyone</h1>
                    <p>
                        Our video editor comes with all the features required to create
                        great videos – no experience needed.
                    </p>
                    {/* <button onClick={() => {
                        isLoggedIn ? props.history.push("/video-editor") : props.setSelectedTool('video-editor')
                    }}>Upload your Video
                    </button> */}
                </div>
            </div>
            <div className="uploadvideo-leftsec">
                {/* <img src={Image} alt="" style={{width: "100%"}}/> */}
            </div>
        </div>
        <div className="mainsection cardscetionmain">
        </div>
        <div className="mainsection2 designtemplate-mainsec">
        <h1>Popular features of online Image & Video editor</h1>
        <p>
          Freeditor online image editor comes packed with tons of great tools to
          help you perfect your photos. You can enhance photos, retouch
          portraits, remove backgrounds, and apply effects. Take a look at some
          of our most popular image editing features.
        </p>
        <img
          className="sectionimageresponsive"
          // src={Image}
          alt=""
          style={{ width: "100%", height: "800px" }}
        />
        <img
          className="sectionimageresponsivemobile"
          // src={Image2}
          alt=""
          style={{ width: "100%", height: "800px" }}
        />
      </div>
      <div className="mainsection">
      <div className="uploadvideo-leftsec">
        {/* <img src={Image} alt="" style={{ width: "80%" }} /> */}
      </div>
      <div className="uploadvideo-rightsec">
        <div className="uploadvideo-innersection">
          <h1>Video Editing Made Simple</h1>
          <p>
            Create Videos with a Single Click. Add Subtitles ,transitions audio
            Create Videos with a Single Click.
          </p>
          {/*<button>Upload your Video</button>*/}
        </div>
      </div>
    </div>
    <div
      className="mainsection"
      style={{ marginTop: "0", justifyContent: "center" }}
    >
      <div className="newsletter">
        <div>
          <h1>
            Subscribe our Newsletter and get <br /> update everytime.
          </h1>
          <div className="newsletter-inner">
            <input type="text" placeholder="Enter Your E-Mail" />
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
    <div className="mainsection2" style={{ justifyContent: "center" }}>
      <div className="faq-heading">
        <h1>Frequently Asked Questions </h1>
      </div>
      </div>
      <div className="faqinner">
        <div className="faq-col faqwidth">What's Image editing?</div>
        </div>
        <div className="faqinner">
        <div className="faq-col faqwidth">How can I edit photos online for free?</div>
        </div>
        <div className="faqinner">
        <div className="faq-col faqwidth">What's the difference between Freeditor and Photoshop?</div>
        </div>

    {/* <Footer /> */}


  </>
}

export default App;
