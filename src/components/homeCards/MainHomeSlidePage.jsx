import React from "react";
import HomePageBg from "../../assets/images/HomePageBg2.png";
import HomePageBg2 from "../../assets/images/certificate/TomCertificate.jpeg";
import HomePageBg3 from "../../assets/images/certificate/Certificate.jpeg";
import HomePageBg4 from "../../assets/images/Hotel2.jpg";
import "./homePage.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Typical from "react-typical";
import { NavLink } from "react-router-dom";

function MainHomeSlidePage() {
  return (
    <div className=" d-md-block " id="home__slider mt-5">
      <div className="overlayHomeBackground">
        <div
          id="HomeSliderPage"
          className="carousel slide"
          data-ride="carousel"
          data-interval="5000"
        >
          <div className="carousel-inner">
            <div className="carousel-item ">
              <img
                className="d-block img-fluid slideImage"
                src={HomePageBg2}
                alt="First slide"
              />
            </div>
            <div className="carousel-item active">
              <img
                className="d-block img-fluid slideImage"
                src={HomePageBg4}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block img-fluid slideImage"
                src={HomePageBg3}
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block img-fluid slideImage"
                src={HomePageBg}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev  "
            href="#HomeSliderPage"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </a>
          <a
            className="carousel-control-next "
            href="#HomeSliderPage"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon "
              aria-hidden="true"
            ></span>
          </a>
        </div>
        <div className="carousel-caption d-block" id="homeCaptionContainer">
          <h1 className="timTomText py-2">TIMTOM AVIATION</h1>
          <h1 className="courseSlideTex py-2" id="wrapTexts">
            <Typical
              loop={Infinity}
              steps={[
                "Hey!🌝Wellcome to Our site!!🥰",
                5000,
                "Learn Civil Aviation Mgt 👏",
                5000,
                "Learn  AirPort Managment",
                5000,
                "Learn AirLine Managment",
                5000,
                "You're the Best  🎲",
                5000,
                "Stay With Us ☂︎",
                5000,
              ]}
            />
          </h1>
          <p>In Partnership with SACCA Institute of Freight And Tourism</p>
          <div className="buttonContainer">
            <NavLink to="/services">
              <button
                className="btn btn-primary primaryTextWhiteColor sliderBtn"
                id="OurCourseBtn"
              >
                <span> Our Courses</span>
              </button>
            </NavLink>
            <NavLink to="/about_us">
              <button
                className="btn primaryBackGroundWhiteColor primaryTextBlueColor sliderBtn"
                id="learnMoreBtn"
              >
                <span id="spanLearnMoreBtn">
                  <span> Learn More</span>

                  <AiOutlineArrowRight id="arrow" />
                </span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHomeSlidePage;
