import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import AppBase from "../components/AppBase";
// import { useEffect } from "react";

function MyAllDesigns(props) {
  //redux text sizes and positions
  const baseUrl = useSelector((state) => state.TextSlice.baseurl);
  // console.log(baseUrl)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    getUserDetails();
    getAllImage();
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  function getUserDetails() {
    var config = {
      method: "get",
      url: `${baseUrl}/apis/get-profile-info/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${localStorage.getItem("auth_token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        // console.log(response.data.data.first_name);
        setName(response.data.data.first_name);
        setEmail(response.data.data.email);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function getAllImage() {
    // return false;
    return axios
      .get(`${baseUrl}/router/apis/image-export/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ` + localStorage.getItem("auth_token"),
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          // alert("successfully image added")
          setList(res.data);
          // console.log(list)
        } else {
          alert("something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <AppBase {...props}>
      <div
        style={{
          display: "flex",
          margin: "20px",
          justifyContent: "center",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Hi {name}
      </div>

      <div className="medialib">
        <div className="medialibheading">
          <h1>Your All Work</h1>
          <Link to="/medialibrary" style={{ textDecoration: "none" }}>
            back <i class="fas fa-arrow-left"></i>
          </Link>
        </div>
        <div class="grid-container">
          {list.map((e, index) => (
            <div class="grid-item" key={index}>
              <Card
                style={{ width: "100%" }}
                className="shadow p-3 mb-5 bg-white rounded"
              >
                <Card.Img variant="top" src={e.image} />
                <Card.Body>
                  <Card.Title>{e.social_media_type}</Card.Title>
                  {/*<Card.Title>Your Design Work</Card.Title>*/}
                  {/*<Link to={"/image-editor/"+e.id}>Edit</Link>*/}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </AppBase>
  );
}

export default MyAllDesigns;
