import React from "react";
import LogoImg from "../../assets/LOGOIMG.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="page-footer text-md-left pt-4 footermain">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 text-center">
              <h5 className="text-uppercase font-weight-bold mb-4">
                <img src={LogoImg} alt="Logo Footer" className="footerlogo" />{" "}
              </h5>
              <h5> CONNECT WITH US </h5>

              <div
                style={{
                  display: "inline-flex",
                  width: "80% ",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h4>
                  <a
                    className="icon_footer"
                    style={{ color: "#3a5998" }}
                    href="https://www.facebook.com/FreeditorSoftware"
                  >
                    <FaFacebookF />
                  </a>
                </h4>
                <h4>
                  <a
                    className="icon_footer"
                    style={{ color: "#009ed0" }}
                    href="https://twitter.com/Freeditor"
                  >
                    <FaTwitter />
                  </a>
                </h4>
                <h4>
                  <a
                    className="icon_footer"
                    style={{ color: "#117fb5" }}
                    href="https://www.linkedin.com/company/freeditor/"
                  >
                    <FaLinkedinIn />
                  </a>
                </h4>
                <h4>
                  <a
                    className="icon_footer"
                    style={{ color: "#e32b26" }}
                    href="https://www.youtube.com/channel/UCLZdHWxVGOLMm5bE-PxNLSg/about"
                  >
                    <FaYoutube />
                  </a>
                </h4>
                <h4>
                  <a
                    className="icon_footer"
                    style={{ color: "#782de3" }}
                    href="https://www.instagram.com/fre.editor/"
                  >
                    <FaInstagram />
                  </a>
                </h4>
              </div>
            </div>

            {/* <!--/.First column--> */}

            <hr className="w-100 clearfix d-md-none" />

            {/* <!--Second column--> */}

            <div className="col-md-2 mx-auto">
              <h5 className="text-uppercase font-weight-bold mb-4">Company</h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/aboutus"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!--/.Second column--> */}

            <hr className="w-100 clearfix d-md-none" />

            {/* <!--Third column--> */}
            <div className="col-md-2 mx-auto">
              <h5 className="text-uppercase font-weight-bold mb-4">Services</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#howitworks"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    How it Works{" "}
                  </a>
                </li>
                {/*<li>*/}
                {/*    <a*/}
                {/*        href="#!"*/}
                {/*        style={{textDecoration: "none", color: "grey"}}*/}
                {/*    >*/}
                {/*        Our Blogs{" "}*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a*/}
                {/*        href="#!"*/}
                {/*        style={{textDecoration: "none", color: "grey"}}*/}
                {/*    >*/}
                {/*        Our Services{" "}*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a*/}
                {/*        href="#!"*/}
                {/*        style={{textDecoration: "none", color: "grey"}}*/}
                {/*    >*/}
                {/*        Press & Blog{" "}*/}
                {/*    </a>*/}
                {/*</li>*/}
              </ul>
            </div>
            {/* <!--/.Third column--> */}

            <hr className="w-100 clearfix d-md-none" />
            {/* <!--Fourth column--> */}
            <div className="col-md-2 mx-auto">
              <h5 className="text-uppercase font-weight-bold mb-4">
                Quick Links
              </h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/terms-conditions"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    FAQ
                  </Link>
                </li>
                {/*<li>*/}
                {/*    <a*/}
                {/*        href="#!"*/}
                {/*        style={{textDecoration: "none", color: "grey"}}*/}
                {/*    >*/}
                {/*        Our Services{" "}*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a*/}
                {/*        href="#!"*/}
                {/*        style={{textDecoration: "none", color: "grey"}}*/}
                {/*    >*/}
                {/*        How it Works{" "}*/}
                {/*    </a>*/}
                {/*</li>*/}
              </ul>
            </div>
            {/* <!--/.Fourth column--> */}
          </div>
        </div>
        {/* <!--/.Footer Links--> */}

        <hr />

        {/* <!--Call to action--> */}
        <div className="call-to-action text-center my-4">
          <div className="footerlower">
            <div>
              <p> Wooshelf 2022 All Rights Reserved</p>
            </div>
            <div className="footerlowerinnerright">
              <a
                href="/terms-conditions"
                style={{
                  textDecoration: "none",
                  fontSize: "15px",
                  color: "grey",
                }}
              >
                Terms of Service
              </a>
              &nbsp; &nbsp; &nbsp;
              <a
                href="/privacy-policy"
                style={{
                  textDecoration: "none",
                  fontSize: "15px",
                  color: "grey",
                }}
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        {/* <!--/.Call to action--> */}
      </footer>
    </>
  );
};

export default Footer;
