import React from "react";
import { useEffect } from "react";
import AboutUsImg from "../assets/AboutUs1.png";
import AboutUsImg2 from "../assets/AboutUs2.png";
import textimg from "../assets/textimg.png";
import AppBase from "../components/AppBase";
import Footer from "../components/HomePage/Footer";

const AboutUs = () => {
  useEffect((props) => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <AppBase>
      <AboutUs1 />
      <AboutUs2 />
      <AboutUs3 />
      <FounderMessage />
    </AppBase>
  );
};

export default AboutUs;

const AboutUs1 = () => {
  return (
    <>
      <div className="about-us mt-4">
        <h1>About Us</h1>
        <p className="para">
          Freeditor is an online photo editing suite utilizing exclusive
          technology to bring an unprecedented level of editing control to
          anyone and everyone. Powerful, user-friendliness and global access
          made it more widespread. It allows the everyday user to take and edit
          amazing photos and the convenience of having images shared and
          uploaded on all major social media platforms.
        </p>
      </div>

      <div className="aboutusMain">
        <div className="aboutusMainleft">
          <div className="aboutusMaincontainer">
            <div className="aboutusMaincontainerrow">
              <div className="aboutusMaincontainerrowinner">
                <h1>1.</h1>
                <h2>Online Image Editor</h2>
                <h4>
                  Freeditor image editor lets you edit photos in just a few
                  clicks. It covers various free online image editing tools.
                </h4>
              </div>
              <div className="aboutusMaincontainerrowinner">
                <h1>2.</h1>
                <h2>Online Video Editor</h2>
                <h4>
                  Our video editor has all the features required to create
                  incredible videos – no experience is needed.
                </h4>
              </div>
            </div>
            <div className="aboutusMaincontainerrow">
              <div className="aboutusMaincontainerrowinner">
                <h1>3.</h1>
                <h2>Custom Media Designing</h2>
                <h4>
                  You can easily create a logo, carousel, banner, video
                  thumbnail, social media designs, and many more in the free
                  editor.
                </h4>
              </div>
              <div className="aboutusMaincontainerrowinner">
                <h1>4.</h1>
                <h2>Social Media Share</h2>
                <h4>
                  In a freeditor, images can be uploaded and shared on all major
                  social media platforms with one click.
                </h4>
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
const AboutUs2 = () => {
  return (
    <>
      <div className="aboutus2">
        <div className="aboutus2img">
          <img src={AboutUsImg2} alt="" />
        </div>
        <div className="aboutus2content">
          <h1>Level up your Design Inventory</h1>
          <p>
            Customize, enhance, and modify images for personal or business use.
            You can produce beautiful images with our user-friendly interface
            and practical one-click editing tools.
          </p>

          {/* <p>
            <b>1. Edit pictures quickly</b> - With just one click, you may crop, resize, add frames or text,
            and decorate with graphics or stickers.</p>

          <p>
            <b>2.Ready-to-use photo effects</b> - Use unique filters, free photo effects,
            and inventive text animations to transform photographs into one powerful image.</p>

          <p>
            <b>3. Adjust brightness</b> - Adjust the lighting in your photos, increase the contrast,
            and saturation, correct fuzzy pictures, and more with the Photo Enhancer tool.
            You can also use Auto Enhance to enhance selfies and portraits automatically..
          </p> */}

          <h2>Auto Layout</h2>
        </div>
      </div>
    </>
  );
};

const AboutUs3 = () => {
  return (
    <>
      <div className="aboutus3">
        <h1>Editing In Minutes</h1>
        <h5>
          Just three easy steps distance you from creating stunning images and
          videos like an expert photographer.
        </h5>
        <div className="aboutus3row">
          <div className="aboutus3rowinner">
            <img src={textimg} alt="" />
            <h4>Upload Image and Video</h4>
            <p>
              Upload your image or video directly into Freeditor from your
              device, or get started with one of our predesigned templates.
            </p>
          </div>
          <div className="aboutus3rowinner">
            <img src={textimg} alt="" />
            <h4>Edit your Image and Video</h4>
            <p>
              Customize images, adjust, and add filters, effects, text, or
              stickers. Add music, thumbnail, and captions to your videos.
            </p>
          </div>
          <div className="aboutus3rowinner">
            <img src={textimg} alt="" />
            <h4>Download and Share</h4>
            <p>
              Save your images for later or immediately download and share them
              on your preferred platforms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const FounderMessage = () => {
  return (
    <>
      <div className="foundermessagemain">
        <div className="foundermessagemainheading">
          <h1>Founder Message</h1>
          <hr className="solid" />
        </div>
        <div className="foundermessagemainparagraph">
          <h1>
            Freeditor is an online design and publishing tool with a mission to
            empower everyone in the world to design anything without any
            particular skill and share it. We aim to make your designing and
            editing part a hassle for your business. A free editor is gaining
            tremendous popularity with its optimized and user-friendly desktop
            suite for Windows and Mac. The quick and easy share on major social
            media platforms differentiates it from competitors.
          </h1>
        </div>
        <div className="founderimagequote">
          <h1>
            Come. Join us, and be a part of our journey. And together we will
            make you stand out from the others.
          </h1>
        </div>
      </div>
    </>
  );
};
