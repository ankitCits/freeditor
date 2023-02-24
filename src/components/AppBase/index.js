import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../HomePage/Footer";
import Header from "../HomePage/Header";
import "antd/dist/antd.css";
import Login from "../../Page/Login";

const AppBase = (props) => {
  const [isShowLogin, setShowLogin] = useState(false);
  const [isSelectMethod, setSelectMethod] = useState("Login");
  const authToken = useSelector((state) => state.auth.authToken);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
    document.body.style.overflow = "auto";
  }, []);

  useEffect(() => {
    if (props.selectedTool) {
      if (!isLoggedIn) {
        handleShowLogin();
      } else {
        hideLogin();
      }
    }
  }, [authToken, isLoggedIn, props.selectedTool]);

  const handleShowLogin = () => {
    setShowLogin((isShowLogin) => !isShowLogin);
  };
  const hideLogin = () => {
    setShowLogin(false);
    if (props.selectedTool) {
      props.setSelectedTool(false);
    }
  };

  const handleMethod = (value) => {
    setSelectMethod((isSelectMethod) => (isSelectMethod = value));
  };

  return (
    <div>
      <Login
        history={props.history}
        isShowLogin={isShowLogin}
        show={isSelectMethod}
        handleMethod={handleMethod}
        hide={hideLogin}
        selectedTool={props.selectedTool}
      />
      <div style={{ filter: isShowLogin ? "blur(5px)" : "" }}>
        <Header
          handleshowlogin={handleShowLogin}
          handleMethod={handleMethod}
          {...props}
        />
        {props.children}
        <Footer />
      </div>
    </div>
  );
};
export default AppBase;
