import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Canvas from "../components/Canvas";
import Header from "../components/Header/Header";
import Menu from "../components/Menu";
import Toolbar from "../components/Toolbar/Toolbar";

const EditPage = (props: any) => {
  const authToken = useSelector((state: any) => state.auth.authToken);
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      props.history.push("/");
    } else {
      // hideLogin()
    }
  }, [authToken, isLoggedIn]);
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
