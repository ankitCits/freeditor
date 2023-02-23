import React, { useEffect, useState } from "react";
import BannerSecMobileImage from "../components/HomePage/BannerSecMobile-Image";
import BannerSection from "../components/HomePage/BannerSection";
import CardSection from "../components/HomePage/CardSection";
import DesignTemplateSection from "../components/HomePage/DesignTemplateSection";
import Footer from "../components/HomePage/Footer";
import FrequentlyAskedQuestions from "../components/HomePage/FrequentlyAskedQuestions";
import HowitWorks from "../components/HomePage/HowitWorks";
import Newsletter from "../components/HomePage/Newsletter";
import OnlineEditingCompany from "../components/HomePage/OnlineEditingCompany";
import StartDesigning from "../components/HomePage/StartDesigning";
import UploadVideoSection from "../components/HomePage/UploadVideoSection";
import "../../src/App.css";
import "antd/dist/antd.css";
import Header from "../components/HomePage/Header";

const HomePage = (props) => {
  const [selectedTool, setSelectedTool] = useState(null);
  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
    document.body.style.overflow = "auto";
  }, []);
  return (
    <>
      <Header />
      <BannerSection style={{ margin: "20px" }} />
      <BannerSecMobileImage />
      <HowitWorks style={{ margin: "20px" }} />
      <UploadVideoSection {...props} setSelectedTool={setSelectedTool} />
      <StartDesigning {...props} setSelectedTool={setSelectedTool} />
      <CardSection style={{ margin: "20px" }} />
      <DesignTemplateSection style={{ margin: "20px" }} />
      <OnlineEditingCompany style={{ margin: "20px" }} />
      <Newsletter style={{ margin: "20px" }} />
      <FrequentlyAskedQuestions style={{ margin: "20px" }} />
      <Footer />
    </>
  );
};

export default HomePage;
