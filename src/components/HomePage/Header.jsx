import React, { useEffect, useRef } from "react";
import LogoImg from "../../assets/LOGOIMG.png";
import { Link, NavLink } from "react-router-dom";
import { Avatar, Divider } from "@mui/material";
import avtar from "../../assets/avatar.jpg";
import { deepOrange } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { setCardStatus } from "../../redux/slices/TextSlice";
import { logoutUserAuthAction } from "../../redux/actions/authReduxActions";
import { Dropdown, Menu } from "antd";

const Header = ({ handleshowlogin, handleMethod }) => {
  const box = useRef(null);
  useOutsideAlerter(box);

  const showExtra = useSelector((state) => state.TextSlice.card_status);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleClickLogin = () => {
    localStorage.setItem("header", 1);
    handleshowlogin();
    handleMethod("Login");
  };

  const handleLoginMethodSignup = () => {
    localStorage.setItem("header", 1);
    handleshowlogin();
    handleMethod("Signup");
  };

  function logout() {
    dispatch(logoutUserAuthAction());
    // localStorage.removeItem("auth_token");
    // localStorage.removeItem("isLoggedIn");

    dispatch(setCardStatus(false));

    // navigate("/");
  }

  function showExtraOptions() {
    dispatch(setCardStatus(!showExtra));
    // console.log(showExtra);
  }

  const onHandleMenu = (event) => {
    switch (event.key) {
      case "logout":
        logout();
        break;
      case "my-design":
        handleMethod("my-all-designs");
        break;
    }
    console.log("===============", event);
  };

  let userMenu = (
    <Menu style={{ textAlign: "center" }} onClick={onHandleMenu}>
      <Menu.Item key={"home"}>
        <Link to={"/"}>Home</Link>
      </Menu.Item>
      <Divider />
      {/*<Menu.Item key={'image-editor'}>*/}
      {/*    <Link to={'/image-editor'}>New Editor</Link>*/}
      {/*</Menu.Item>*/}
      <Divider />
      <Menu.Item key={"dashboard"}>
        <Link to={"/my-all-designs"}>Dashboard</Link>
      </Menu.Item>
      <Divider />
      {/*<Menu.Item key={'my-design'}>*/}
      {/*    <Link to={'/my-all-designs'}>My Design</Link>*/}
      {/*</Menu.Item>*/}
      <Divider />
      <Menu.Item key={"logout"}>Log Out</Menu.Item>
    </Menu>
  );

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
          paddingLeft: !isLoggedIn ? 171 : 0,
        }}
      >
        This is beta version
      </div>
      {isLoggedIn ? (
        <>
          <div className="profileIcon">
            <Dropdown
              overlayStyle={{
                width: "150px",
              }}
              overlay={userMenu}
              trigger={"click"}
              placement="bottomRight"
            >
              <button
                ref={box}
                onClick={showExtraOptions}
                style={{ border: "none", background: "none" }}
              >
                <Avatar
                  src={avtar}
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: deepOrange[500],
                  }}
                  alt="photoURL"
                />
              </button>
            </Dropdown>
            {/*<div*/}
            {/*  style={{*/}
            {/*    width: "200px",*/}
            {/*    display: `${showExtra == false ? "none" : "block"}`,*/}
            {/*    position: "fixed",*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <Card style={{textAlign:'center'}}>*/}
            {/*    <Link to={'/'}>*/}
            {/*    <button*/}
            {/*      onClick={() => {*/}
            {/*        // navigate("/")*/}
            {/*        dispatch(setCardStatus(false))*/}
            {/*      }}*/}
            {/*      style={{*/}
            {/*        border: "none",*/}
            {/*        background: "none",*/}
            {/*        margin: "10%",*/}
            {/*        color:"#292d31"*/}
            {/*      }}*/}
            {/*    >*/}
            {/*      <div>Home</div>*/}
            {/*    </button>*/}
            {/*    </Link>*/}

            {/*    <hr style={{ margin: "1%" }} />*/}
            {/*    <Link to={'/image-editor'}>*/}
            {/*    <button*/}
            {/*      onClick={() => {*/}
            {/*        dispatch(setCardStatus(false))*/}
            {/*      }}*/}
            {/*      style={{*/}
            {/*        border: "none",*/}
            {/*        background: "none",*/}
            {/*        margin: "10%",*/}
            {/*        color:"#292d31"*/}
            {/*      }}*/}
            {/*    >*/}
            {/*      <div>New Editor</div>*/}
            {/*    </button>*/}
            {/*    </Link>*/}
            {/*    <hr style={{ margin: "1%" }} />*/}

            {/*    <Link to={'/medialibrary'}>*/}
            {/*    <button*/}
            {/*      onClick={() => {*/}
            {/*        dispatch(setCardStatus(false))*/}
            {/*      }}*/}
            {/*      style={{*/}
            {/*        border: "none",*/}
            {/*        background: "none",*/}
            {/*        margin: "10%",*/}
            {/*        color:"#292d31"*/}
            {/*      }}*/}
            {/*    >*/}
            {/*      <div>Dashboard</div>*/}
            {/*    </button>*/}
            {/*    </Link>*/}

            {/*    <hr style={{ margin: "1%" }} />*/}
            {/*    <Link to={'/my-all-designs'}>*/}
            {/*    <button*/}
            {/*      onClick={() => {*/}
            {/*        dispatch(setCardStatus(false))*/}
            {/*      }}*/}
            {/*      style={{*/}
            {/*        border: "none",*/}
            {/*        background: "none",*/}
            {/*        margin: "10%",*/}
            {/*        color:"#292d31"*/}
            {/*      }}*/}
            {/*    >*/}
            {/*      <div>My Design</div>*/}
            {/*    </button>*/}
            {/*    </Link>*/}
            {/*    <hr style={{ margin: "1%" }} />*/}

            {/*    <button*/}
            {/*      onClick={logout}*/}
            {/*      style={{ border: "none", background: "none", margin: "10%" ,color:"#292d31" }}*/}
            {/*    >*/}
            {/*      <div>Logout</div>*/}
            {/*    </button>*/}
            {/*  </Card>*/}
            {/*</div>*/}
          </div>

          {/* <Popover
            open={true}
            // anchorEl={open}
            // onClose={handleClose}
            sx={{
              p: 0,
              mt: 1.5,
              ml: 0.75,
              "& .MuiMenuItem-root": {
                typography: "body2",
                borderRadius: 0.75,
              },
            }}
          ></Popover> */}
        </>
      ) : (
        <div className="headerright">
          <button className="login-btn" onClick={handleClickLogin}>
            Login
          </button>
          <button className="signup-btn" onClick={handleLoginMethodSignup}>
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

function useOutsideAlerter(ref) {
  const dispatch = useDispatch();
  // const showExtra = useSelector(state => state.TextSlice.card_status);
  useEffect(() => {
    // Function for click event
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(setCardStatus(false));
      }
    }

    // Adding click event listener
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [ref]);
}
