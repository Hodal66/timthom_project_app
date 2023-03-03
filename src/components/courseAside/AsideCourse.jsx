import React, { useEffect, useState } from "react";
import SearchFunction from "../../pages/servicesPages/searchFun/SearchFunction";
import ButtonComponent from "../Buttons/ButtonComponent";
import RegistrationImageBackground from "../../assets/images/section-img3.jpg";
import RecentPostImage from "../../assets/images/blanckImage.jpg";
import "./asideCourse.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
function AsideCourse() {
  const [state] = useState([]);
  const [allcourses, setAllCourses] = useState([]);
  const handleAllCourses = async () => {
    const { data } = await axios.get(
      "http://localhost:3004/allUpcammingCourses"
    );
    setAllCourses(data);
  };
  useEffect(() => {
    handleAllCourses();
  }, [state]);
  return (
    <div>
      <aside className="rightSide">
        <SearchFunction />
        <div className="categoryContainer my-5">
          <div className="card categoryContainer" style={{ width: "18rem" }}>
            <div className="card-header primaryBackGroundBlueColor primaryTextWhiteColor cardHeader">
              Featured
            </div>
            {allcourses &&
              allcourses.map((couresDetails) => {
                return (
                  <ul
                    className="list-group list-group-flush"
                    key={couresDetails.id}
                  >
                    <NavLink to={`/service_details/${couresDetails.id}`}>
                      <li className="list-group-item">
                        <p>
                          <span>{couresDetails.titleInShortName}</span>
                          <span>{couresDetails.id}</span>
                        </p>
                      </li>
                    </NavLink>
                  </ul>
                );
              })}
          </div>
        </div>
        <div className="registrationContainer">
          <div className="backgroundImage">
            <img
              src={RegistrationImageBackground}
              alt="RegistrationImageBackground"
              style={{ width: "18rem" }}
            />
          </div>
          <div className="imageContentContainer">
            <h5>Resigtation Our</h5>
            <h2>New Courses</h2>
            <p>
              Bur wemust ipsum dolor sit amet consectetur adipisicing elit sed
              eiusmod tempor incididunt ut labore
            </p>
            <ButtonComponent
              text="Registrations"
              className="primaryBackGroundOrangeColor primaryTextWhiteColor"
            />
          </div>
        </div>
        <div className="recentPostContainer my-5">
          <div className="card categoryContainer" style={{ width: "18rem" }}>
            <div className="card-header primaryBackGroundBlueColor primaryTextWhiteColor cardHeader ">
              Featured
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item asideImageContainer">
                <div className="recentImgContainer">
                  <img
                    src={RecentPostImage}
                    alt="RecentPostImage"
                    style={{ width: "9rem" }}
                    className="img-fluid"
                  />
                </div>
                <div className="RecentContentContainer">
                  <p>Designing Users Across Interview With Jemy</p>
                  <p className="dateContainer">October 14, 2019</p>
                </div>
              </li>
              <li className="list-group-item asideImageContainer">
                <div className="recentImgContainer">
                  <img
                    src={RecentPostImage}
                    alt="RecentPostImage"
                    style={{ width: "9rem" }}
                    className="img-fluid"
                  />
                </div>
                <div className="RecentContentContainer">
                  <p>Designing Users Across Interview With Jemy</p>
                  <p className="dateContainer">October 14, 2019</p>
                </div>
              </li>{" "}
              <li className="list-group-item asideImageContainer">
                <div className="recentImgContainer">
                  <img
                    src={RecentPostImage}
                    alt="RecentPostImage"
                    style={{ width: "9rem" }}
                    className="img-fluid"
                  />
                </div>
                <div className="RecentContentContainer">
                  <p>Designing Users Across Interview With Jemy</p>
                  <p className="dateContainer">October 14, 2019</p>
                </div>
              </li>{" "}
              <li className="list-group-item asideImageContainer">
                <div className="recentImgContainer">
                  <img
                    src={RecentPostImage}
                    alt="RecentPostImage"
                    style={{ width: "9rem" }}
                    className="img-fluid"
                  />
                </div>
                <div className="RecentContentContainer">
                  <p>Designing Users Across Interview With Jemy</p>
                  <p className="dateContainer">October 14, 2019</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="tagContainer card">
          <div className="card-header primaryBackGroundBlueColor primaryTextWhiteColor">
            Tags
          </div>
          <div className="tagsContentLesson">
            <p>Computer</p>
            <p>BUsiness</p>
            <p>English</p>
            <p>Education</p>
            <p>Study</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default AsideCourse;
