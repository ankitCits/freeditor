import React, { useState } from "react";
import Logo from "../assets/LOGOIMG.png";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "react-google-login";

import axios from "axios";
import { ERROR_MSG_TYPE, SUCCESS_MSG_TYPE } from "../constants/dataKey";
import { displayMessage } from "../utils/common";
import { loginUserAuthAction } from "../redux/actions/authReduxActions";
import {
  BACKEND_BASE_URL,
  FACEBOOK_AUTH_API_KEY,
  GOOGLE_AUTH_API_KEY,
} from "../Constants";
import { FACEBOOK_AUTH, FORGOT_PASSWORD, GOOGLE_AUTH } from "../constants/api";
import { Button, Col, Input, Modal, Row } from "antd";
import {
  FacebookOutlined,
  GooglePlusOutlined,
  MailOutlined,
} from "@ant-design/icons";

const Login = ({
  isShowLogin,
  show,
  handleMethod,
  hide,
  history,
  selectedTool,
}) => {
  const dispatch = useDispatch();

  //base url
  // const baseUrl = useSelector((state) => state.TextSlice.baseurl);
  const baseUrl = BACKEND_BASE_URL;

  //for fb login
  const responseFacebook = (response) => {
    console.log("responseGoogle,fail", response);
    if (response.accessToken) {
      const formData = new FormData();
      formData.append("access_token", response.accessToken);
      return axios
        .post(`${baseUrl + FACEBOOK_AUTH}`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          dispatch(loginUserAuthAction(response.data.auth_token));
          hideLogin();
          resetForm();
          if (selectedTool) {
            history.push(`/${selectedTool}`);
          }
          displayMessage(SUCCESS_MSG_TYPE, "Logged in Successfully");
        })
        .catch((err) => {
          displayMessage(ERROR_MSG_TYPE, "Please Input Valid Credential.");
          console.log("===error", err);
        });
    }
  };
  // for google
  const responseGoogle = (response) => {
    console.log("responseGoogle,fail", response);
    if (response.accessToken) {
      const formData = new FormData();
      formData.append("access_token", response.accessToken);
      return axios
        .post(`${baseUrl + GOOGLE_AUTH}`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          dispatch(loginUserAuthAction(response.data.auth_token));
          hideLogin();
          resetForm();
          if (selectedTool) {
            history.push(`/${selectedTool}`);
          }
          displayMessage(SUCCESS_MSG_TYPE, "Logged in Successfully");
        })
        .catch((err) => {
          displayMessage(ERROR_MSG_TYPE, "Please Input Valid Credential.");
          console.log("===error", err);
        });
    }
  };

  const [name, setName] = useState("");
  const [Uid, setUid] = useState("");
  const [Token, setToken] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [loading, setLoading] = useState();
  const [isVerifyEmail, setisVerifyEmail] = useState(false);
  const [resetModalVisible, setResetModalVisible] = useState(false);
  const [resetEmail, setResetEmail] = useState(null);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const resetPassword = () => {
    const formData = new FormData();
    if (!resetEmail) {
      displayMessage(ERROR_MSG_TYPE, "Please fill Email Field");
      return true;
    }
    formData.append("email", resetEmail);
    return axios
      .post(`${baseUrl + FORGOT_PASSWORD}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        displayMessage(
          "success",
          "Link to update your password have been sent to your mail."
        );
        setResetModalVisible(false);
        setResetEmail(null);
      })
      .catch((err) => {});
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setName("");
    setconfirmpassword("");
    setMobile("");
    // document.getElementById("Login-Form")?.reset();
    // document.getElementById("Signup-Form")?.reset();
    // document.getElementById("Signup-Form-verify")?.reset();
  };

  function singinUser() {
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("re_password", confirmpassword);
    data.append("first_name", name);

    var config = {
      method: "post",
      url: `${baseUrl}/users/`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        handleClickLogin();
        // setisVerifyEmail(true);
      })
      .catch(function (error) {
        console.log(error.response.data);
        alert(
          error.response.data.email ??
            error.response.data.non_field_errors ??
            error.response.data.password ??
            "Error"
        );
      });
    setLoading(false);
  }

  function verifyUser() {
    var uid = Uid;
    var token = Token;
    console.log(token);
    console.log(uid);
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("uid", uid);
    data.append("token", token);
    var config = {
      method: "post",
      url: `${baseUrl}/users/activation/`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response));
        alert("Account Successfully created and Verified");
        hideLogin();
        resetForm();
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.data);
        alert(error.response.data.token ?? error.response.data.uid ?? "Error");
      });
  }

  function loginUser() {
    let data = {
      email: email,
      password: password,
    };
    let config = {
      method: "post",
      url: `${baseUrl}/token/login/`,

      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        dispatch(loginUserAuthAction(response.data.auth_token));
        hideLogin();
        resetForm();
        console.log("=======error", history, selectedTool);
        if (selectedTool) {
          history.push(`/${selectedTool}`);
        }

        displayMessage(SUCCESS_MSG_TYPE, "Logged in Successfully");
      })
      .catch(function (error) {
        console.log("=======error", error);
        displayMessage(ERROR_MSG_TYPE, "Please Input Valid Credential.");
      });
    setLoading(false);
  }

  function handleResendCode(event) {
    event.preventDefault();
  }

  function handleSubmiLogin(event) {
    event.preventDefault();
    setLoading(true);
    loginUser();
  }

  function handleSubmitSignUp(event) {
    event.preventDefault();
    setLoading(true);
    singinUser();
  }

  function handleSubmitSignUpVerify(event) {
    event.preventDefault();
    verifyUser();
  }

  const handleClickLogin = () => {
    handleMethod("Login");
    resetForm();
  };
  const handleLoginMethodSignup = () => {
    handleMethod("Signup");
    resetForm();
  };
  const hideLogin = () => {
    hide();
    resetForm();
  };

  return (
    <div
      className={` ${isShowLogin ? "active" : "disable"} show  logincontainer `}
    >
      <Modal
        title="Email to Reset Password"
        visible={resetModalVisible}
        onOk={resetPassword}
        onCancel={() => setResetModalVisible(false)}
        okText="Reset Password"
      >
        <Input
          placeholder="Email Id"
          prefix={<MailOutlined />}
          onChange={(event) => setResetEmail(event.target.value)}
        />
      </Modal>
      {/* {loading == true ? <ThreeDots height={20} /> : <>{loading}</>} */}
      {/* {localStorage.getItem("header")} */}
      <div
        className={
          localStorage.getItem("header") === "1" ? "logininner" : "logininner"
        }
      >
        <div className="cross" style={{ position: "fixed" }}>
          <button
            onClick={hide}
            style={{
              border: "none",
              marginTop: "5px",
              background: "transparent",
            }}
          >
            <ImCross />
          </button>
        </div>
        <div className="logininner1">
          <div className="signinbutton">
            <div
              className={` ${show == "Login" ? "loginactive" : ""}  signinbar`}
            ></div>
            <button
              className={` ${show == "Login" ? "loginactive" : ""}  `}
              onClick={handleClickLogin}
            >
              Sign In
            </button>
          </div>
          <div className="signupbutton">
            <div
              className={` ${show == "Signup" ? "loginactive" : ""}  signinbar`}
            ></div>
            <button
              className={` ${show == "Signup" ? "loginactive" : ""}  `}
              onClick={handleLoginMethodSignup}
            >
              Sign up
            </button>
          </div>
        </div>
        <div className="logininner2">
          <div
            className="card loginlogocard"
            style={{
              // width: "40%",
              backgroundColor: "#0372BC",
              color: "white",

              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              flexDirection: "row",
              border: 0,
            }}
          >
            <img src={Logo} alt="Logo Footer" className="footerlogo" />{" "}
          </div>
        </div>
        <div className="logininner3">
          {show == "Login" ? (
            <div className="forminner">
              <div style={{ paddingTop: 40 }} />
              <Row
                justify={"space-between"}
                align={"middle"}
                style={{ textAlign: "center" }}
              >
                <Col span={8}>
                  <FacebookLogin
                    style={{ width: "100%", backgroundColor: "red" }}
                    appId={FACEBOOK_AUTH_API_KEY}
                    autoLoad={false}
                    callback={responseFacebook}
                    cssClass="my-facebook-button-class"
                    icon="fa-facebook"
                    render={(renderProps) => (
                      <Button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        size={"large"}
                        block
                        style={{
                          backgroundColor: "#3c589a",
                          color: "#ffff",
                        }}
                        icon={
                          <FacebookOutlined
                            style={{
                              fontSize: 30,
                            }}
                          />
                        }
                      />
                    )}
                    // render={renderProps => (
                    //
                    //     <div className="signinoptionbtn fb-btn-2" onClick={renderProps.onClick}>
                    //         {/* <a onClick={renderProps.onClick} className="fb-btn">Facebook</a> */}
                    //         <AiOutlineFacebook/> {show} with facebook
                    //     </div>
                    //
                    // )}
                  />
                </Col>
                <Col span={8}>
                  <GoogleLogin
                    clientId={GOOGLE_AUTH_API_KEY}
                    render={(renderProps) => (
                      <Button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        size={"large"}
                        block
                        style={{
                          backgroundColor: "#de4b38",
                          color: "#ffff",
                        }}
                        icon={
                          <GooglePlusOutlined
                            style={{
                              fontSize: 30,
                            }}
                          />
                        }
                      />
                    )}
                    // render={renderProps => (
                    //     <div onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    //         <AiOutlineGooglePlus/> {show} with google</div>
                    // )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                </Col>
              </Row>

              {/*          <div className="signinoptions">*/}

              {/*              /!* fb login *!/*/}
              {/*              <div className="signinoptionbtn">*/}
              {/*                  /!*<p className="Social-login-text">{show} with</p>*!/*/}
              {/*                  /!* 605447401184374 *!/*/}
              {/*                  <div className="face-book-sign">*/}
              {/*                      <FacebookLogin*/}
              {/*                          style={{width: '100%', backgroundColor: 'red'}}*/}
              {/*                          appId={FACEBOOK_AUTH_API_KEY}*/}
              {/*                          autoLoad={false}*/}
              {/*                          callback={responseFacebook}*/}
              {/*                          cssClass="my-facebook-button-class"*/}
              {/*                          icon="fa-facebook"*/}
              {/*                          render={renderProps => (<Button*/}
              {/*                              onClick={renderProps.onClick}*/}
              {/*                              disabled={renderProps.disabled}*/}
              {/*                              size={'large'} block style={{*/}
              {/*                              backgroundColor: '#3c589a',*/}
              {/*                              color: '#ffff'*/}
              {/*                          }} icon={<FacebookOutlined style={{*/}
              {/*                              fontSize: 30*/}
              {/*                          }}/>}/>)}*/}
              {/*                          // render={renderProps => (*/}
              {/*                          //*/}
              {/*                          //     <div className="signinoptionbtn fb-btn-2" onClick={renderProps.onClick}>*/}
              {/*                          //         /!* <a onClick={renderProps.onClick} className="fb-btn">Facebook</a> *!/*/}
              {/*                          //         <AiOutlineFacebook/> {show} with facebook*/}
              {/*                          //     </div>*/}
              {/*                          //*/}
              {/*                          // )}*/}
              {/*                      />*/}
              {/*                  </div>*/}
              {/*              </div>*/}

              {/*              /!* google login *!/*/}
              {/*              <div className="signinoptionbtn google-book-sign" style={{fontSize: '25px'}}>*/}
              {/*                  /!* <a className="google-btn">*/}
              {/*  <span style={{ color: '#4781f3' }}>G</span>*/}
              {/*  <span style={{ color: '#dd3030' }}>o</span>*/}
              {/*  <span style={{ color: '#f6c300' }}>o</span>*/}
              {/*  <span style={{ color: '#4781f3' }}>g</span>*/}
              {/*  <span style={{ color: '#37bc50' }}>l</span>*/}
              {/*  <span style={{ color: '#dd3030' }}>e</span>*/}
              {/*</a> *!/*/}
              {/*                  /!* <FcGoogle/> *!/*/}
              {/*                  <GoogleLogin*/}
              {/*                      clientId={GOOGLE_AUTH_API_KEY}*/}
              {/*                      render={renderProps => (*/}
              {/*                          <div onClick={renderProps.onClick} disabled={renderProps.disabled}>*/}
              {/*                              <AiOutlineGooglePlus/> {show} with google</div>*/}
              {/*                      )}*/}
              {/*                      buttonText="Login"*/}
              {/*                      onSuccess={responseGoogle}*/}
              {/*                      onFailure={responseGoogle}*/}
              {/*                      cookiePolicy={'single_host_origin'}*/}
              {/*                  />*/}
              {/*              </div>*/}

              {/*          </div>*/}
              <div className="seperator">
                <hr class="solidseperator" />
                <div className="seperatortext">or</div>
                <hr class="solidseperator" />
              </div>
              <form id="Login-Form" onSubmit={handleSubmiLogin}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control p-3 mt-2 mb-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <Input.Password
                    style={{
                      borderRadius: "0.375rem",
                    }}
                    size={"middle"}
                    type="password"
                    class="form-control p-3 mt-2 mb-2"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  onClick={() => setResetModalVisible(true)}
                  type="button"
                  className="btn btn-link mt-4 float-end"
                >
                  Forgot Password
                </button>

                <button
                  type="submit"
                  class="btn btn-primary mt-4"
                  style={{
                    width: "100%",
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "40px",
                  }}
                >
                  Sign In
                </button>
              </form>
            </div>
          ) : (
            <>
              {isVerifyEmail == false ? (
                <div className="forminner">
                  {/* <div className="upperheading">Sign Up</div> */}
                  <div style={{ paddingTop: 40 }} />
                  <Row
                    justify={"space-between"}
                    align={"middle"}
                    style={{ textAlign: "center" }}
                  >
                    <Col span={8}>
                      <FacebookLogin
                        appId={FACEBOOK_AUTH_API_KEY}
                        autoLoad={false}
                        callback={responseFacebook}
                        cssClass="my-facebook-button-class"
                        icon="fa-facebook"
                        render={(renderProps) => (
                          <Button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            size={"large"}
                            block
                            style={{
                              backgroundColor: "#3c589a",
                              color: "#ffff",
                            }}
                            icon={
                              <FacebookOutlined
                                style={{
                                  fontSize: 30,
                                }}
                              />
                            }
                          />
                        )}
                        // render={renderProps => (
                        //
                        //     <div className="signinoptionbtn" onClick={renderProps.onClick}
                        //          style={{fontSize: '25px'}}>
                        //         {/* <a onClick={renderProps.onClick} className="fb-btn">Facebooks</a> */}
                        //         <AiOutlineFacebook/> {show} with facebook
                        //     </div>
                        //
                        // )}
                      />
                    </Col>
                    <Col span={8}>
                      {/* <FcGoogle /> */}
                      <GoogleLogin
                        clientId={GOOGLE_AUTH_API_KEY}
                        render={(renderProps) => (
                          <Button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            size={"large"}
                            block
                            style={{
                              backgroundColor: "#de4b38",
                              color: "#ffff",
                            }}
                            icon={
                              <GooglePlusOutlined
                                style={{
                                  fontSize: 30,
                                }}
                              />
                            }
                          />
                        )}
                        // render={renderProps => (
                        //     <div onClick={renderProps.onClick}
                        //          disabled={renderProps.disabled}
                        //     >
                        //         <AiOutlineGooglePlus/> {show} with google</div>
                        // )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                      />
                    </Col>
                  </Row>
                  {/*<div className="signinoptions">*/}
                  {/*    /!*<p className="Social-login-text">{show} with</p>*!/*/}
                  {/*    /!* fb login *!/*/}
                  {/*    <div className="signinoptionbtn face-book-sign">*/}
                  {/*        <FacebookLogin*/}
                  {/*            appId={FACEBOOK_AUTH_API_KEY}*/}
                  {/*            autoLoad={false}*/}
                  {/*            callback={responseFacebook}*/}
                  {/*            render={renderProps => (*/}

                  {/*                <div className="signinoptionbtn" onClick={renderProps.onClick}*/}
                  {/*                     style={{fontSize: '25px'}}>*/}
                  {/*                    /!* <a onClick={renderProps.onClick} className="fb-btn">Facebooks</a> *!/*/}
                  {/*                    <AiOutlineFacebook/> {show} with facebook*/}
                  {/*                </div>*/}

                  {/*            )}*/}
                  {/*        />*/}
                  {/*    </div>*/}

                  {/*    /!* google login *!/*/}
                  {/*    <div className="signinoptionbtn google-book-sign" style={{fontSize: '25px'}}>*/}

                  {/*        /!* <FcGoogle /> *!/*/}
                  {/*        <GoogleLogin*/}
                  {/*            clientId={GOOGLE_AUTH_API_KEY}*/}
                  {/*            render={renderProps => (*/}
                  {/*                <div onClick={renderProps.onClick}*/}
                  {/*                     disabled={renderProps.disabled}*/}
                  {/*                >*/}
                  {/*                    <AiOutlineGooglePlus/> {show} with google</div>*/}
                  {/*            )}*/}
                  {/*            buttonText="Login"*/}

                  {/*            onSuccess={responseGoogle}*/}
                  {/*            onFailure={responseGoogle}*/}
                  {/*            cookiePolicy={'single_host_origin'}*/}
                  {/*        />*/}
                  {/*    </div>*/}

                  {/*</div>*/}

                  <div className="seperator">
                    <hr class="solidseperator" />
                    <div className="seperatortext">or</div>
                    <hr class="solidseperator" />
                  </div>
                  <form id="Signup-Form" onSubmit={handleSubmitSignUp}>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Name</label>
                      <input
                        type="text"
                        class="form-control p-3 mt-2 mb-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    {/*<div class="form-group">*/}
                    {/*    <label for="exampleInputPassword1">Mobile Number</label>*/}
                    {/*    <input*/}
                    {/*        type="number"*/}
                    {/*        class="form-control p-3 mt-2 mb-2"*/}
                    {/*        id="exampleInputPassword1"*/}
                    {/*        placeholder="Enter Mobile No"*/}
                    {/*        onChange={(e) => setMobile(e.target.value)}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        class="form-control p-3 mt-2 mb-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Password</label>
                      <Input.Password
                        style={{
                          borderRadius: "0.375rem",
                        }}
                        size={"middle"}
                        type="password"
                        class="form-control p-3 mt-2 mb-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Confirm Password</label>
                      <Input.Password
                        style={{
                          borderRadius: "0.375rem",
                        }}
                        size={"middle"}
                        type="password"
                        class="form-control p-3 mt-2 mb-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Confirm Password"
                        onChange={(e) => setconfirmpassword(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      class="btn btn-primary mt-4"
                      style={{
                        width: "100%",
                        fontSize: "20px",
                        fontWeight: "600",
                        marginBottom: "10%",
                      }}
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              ) : (
                <div className="forminner">
                  <div className="verifyheading">
                    <h3>Enter the verification code recived on {email}</h3>
                  </div>
                  <form
                    id="Signup-Form-verify"
                    onSubmit={handleSubmitSignUpVerify}
                  >
                    <div class="form-group">
                      <label for="exampleInputEmail1">Enter Uid</label>
                      <input
                        type="text"
                        class="form-control p-3 mt-2 mb-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Uid"
                        onChange={(e) => setUid(e.target.value)}
                      />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputEmail1">Email Token</label>
                      <input
                        type="text"
                        class="form-control p-3 mt-2 mb-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Token"
                        onChange={(e) => setToken(e.target.value)}
                      />
                    </div>
                    <a
                      href=""
                      onClick={handleResendCode}
                      style={{ textDecoration: "none" }}
                    >
                      Resend Code
                    </a>
                    <button
                      type="submit"
                      class="btn btn-primary p-3 mt-4"
                      style={{
                        marginBottom: "30px",
                        width: "100%",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Verify
                    </button>
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
