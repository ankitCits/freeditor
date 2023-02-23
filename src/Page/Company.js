import React from "react";
import { useEffect } from "react";
import AboutUsImg from "../assets/AboutUs1.png";
import AboutUsImg2 from "../assets/AboutUs2.png";
import textimg from "../assets/textimg.png";
import AppBase from "../components/AppBase";

const Company = (props) => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <AppBase>
      <Company1 />
      <Company2 />
      <Company3 />
      <FounderMessage />
    </AppBase>
  );
};

export default Company;

const Company1 = () => {
  return (
    <>
      <div className="aboutusMain">
        <div className="aboutusMainright">
          <img src={AboutUsImg} alt="" />
        </div>
        <div className="aboutusMainleft">
          <h1>Company</h1>
          <p>
            Freeditor is an online image and video editor, launched in April
            2020 and headquartered in India, to facilitate users to create
            beautiful photographs, edit images and videos, and
            professional-quality designs without special skills or technical
            expertise.
          </p>
          <p style={{ fontSize: "18px" }}>
            Freeditor's ongoing growth and development are made possible by
            combining and integrating specialist image and video editing
            technology and each feature and community competition. Freeditor is
            a cross-platform editor compatible with major operating systems. Its
            unique and convenient feature increases its popularity among
            designers and users.
          </p>
        </div>
      </div>
    </>
  );
};
const Company2 = () => {
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
const Company3 = () => {
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
