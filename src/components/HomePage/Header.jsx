import React from "react";
import LogoImg from "../../assets/LOGOIMG.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <div className="headerleft">
          <img src={LogoImg} alt="" className="headerlogo" />
        </div>
      </NavLink>
      <div
        className="header-text"
        style={{
          paddingLeft: 0,
        }}
      >
        This is beta version
      </div>
      <>
        <div className="headerright">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </>
    </div>
  );
};

export default Header;
