import React, { useEffect } from "react";
import Canvas from "../components/Canvas";
import Header from "../components/Header/Header";
import Menu from "../components/Menu";
import Toolbar from "../components/Toolbar/Toolbar";

const EditPage = (props: any) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#1E1E1E";
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app">
      <Header />
      <Menu {...props} />
      <Toolbar />
      <Canvas />
    </div>
  );
};

export default EditPage;
