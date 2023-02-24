import React, { useEffect, useState } from "react";
import BannerSecMobileImage from "../components/HomePage/BannerSecMobile-Image";
import BannerSection from "../components/HomePage/BannerSection";
import CardSection from "../components/HomePage/CardSection";
import DesignTemplateSection from "../components/HomePage/DesignTemplateSection";
import FrequentlyAskedQuestions from "../components/HomePage/FrequentlyAskedQuestions";
import HowitWorks from "../components/HomePage/HowitWorks";
import Newsletter from "../components/HomePage/Newsletter";
import OnlineEditingCompany from "../components/HomePage/OnlineEditingCompany";
import StartDesigning from "../components/HomePage/StartDesigning";
import UploadVideoSection from "../components/HomePage/UploadVideoSection";
import "../../src/App.css";

import AppBase from "../components/AppBase";

const HomePage = (props) => {
  const [selectedTool, setSelectedTool] = useState(null);

  return (
    <AppBase
      {...props}
      selectedTool={selectedTool}
      setSelectedTool={setSelectedTool}
    >
      <BannerSection
        {...props}
        setSelectedTool={setSelectedTool}
        style={{ margin: "20px" }}
      />
      <BannerSecMobileImage {...props} setSelectedTool={setSelectedTool} />
      <HowitWorks
        {...props}
        setSelectedTool={setSelectedTool}
        style={{ margin: "20px" }}
      />
      <UploadVideoSection {...props} setSelectedTool={setSelectedTool} />
      <StartDesigning {...props} setSelectedTool={setSelectedTool} />
      <CardSection
        {...props}
        setSelectedTool={setSelectedTool}
        style={{ margin: "20px" }}
      />
      <DesignTemplateSection
        {...props}
        setSelectedTool={setSelectedTool}
        style={{ margin: "20px" }}
      />
      <OnlineEditingCompany
        {...props}
        setSelectedTool={setSelectedTool}
        style={{ margin: "20px" }}
      />
      <Newsletter
        {...props}
        setSelectedTool={setSelectedTool}
        style={{ margin: "20px" }}
      />
      <FrequentlyAskedQuestions
        {...props}
        setSelectedTool={setSelectedTool}
        style={{ margin: "20px" }}
      />
    </AppBase>
  );
};

export default HomePage;
