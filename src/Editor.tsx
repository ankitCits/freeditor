import React from "react";
import Menu from "./components/Menu";
import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/Toolbar";
import Canvas from "./components/Canvas";

const EditPage = () => {
  return (
    <div className="app">
      <Header />
      <Menu />
      <Toolbar />
      <Canvas />
    </div>
  );
};

export default EditPage;
