import React, { useEffect } from "react";
import Footer from "../HomePage/Footer";
import Header from "../HomePage/Header";

const AppBase = (props) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
    document.body.style.overflow = "auto";
  }, []);

  return (
    <div>
      <div>
        <Header {...props} />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};
export default AppBase;
