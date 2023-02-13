import React from "react";
import SearchFunction from "../../pages/servicesPages/searchFun/SearchFunction";
import ButtonComponent from "../Buttons/ButtonComponent";
import RegistrationImageBackground from "../../assets/images/section-img3.jpg";
import RecentPostImage from "../../assets/images/instructor3.jpg";
import "./asideCourse.css";
function AsideCourse() {
  return (
    <div>
      <aside className="rightSide">
        <SearchFunction />
        <div className="categoryContainer my-5">
          <div className="card categoryContainer" style={{ width: "18rem" }}>
            <div className="card-header primaryBackGroundBlueColor primaryTextWhiteColor cardHeader">
              Featured
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <p>
                  <span>Cras justo odio </span>
                  <span>3</span>
                </p>
              </li>
              <li className="list-group-item">
                <p>
                  <span> Dapibus ac facilisis in</span> <span>4</span>
                </p>
              </li>
              <li className="list-group-item">
                <p>
                  <span> Vestibulum at eros</span> <span>5</span>
                </p>
              </li>
              <li className="list-group-item">
                <p>
                  <span>Cras justo odio </span>
                  <span>3</span>
                </p>
              </li>
              <li className="list-group-item">
                <p>
                  <span> Dapibus ac facilisis in</span> <span>4</span>
                </p>
              </li>
            </ul>
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
