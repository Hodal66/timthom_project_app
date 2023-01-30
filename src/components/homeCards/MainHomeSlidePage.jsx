import React from "react";
import HomePageBg from "../../assets/images/HomePageBg2.png";
import HomePageBg2 from "../../assets/images/airplane2.jpg";
import HomePageBg3 from "../../assets/images/Avery-in-Rwanda-Hero.jpg";
import HomePageBg4 from "../../assets/images/Hotel2.jpg";
import "./homePage.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Typical from "react-typical";

function MainHomeSlidePage() {
  return (
    <div className=" d-md-block mt-5" id="home__slider">
      <div id="HomeSliderPage" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#HomeSliderPage"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#HomeSliderPage" data-slide-to="1"></li>
          <li data-target="#HomeSliderPage" data-slide-to="2"></li>
          <li data-target="#HomeSliderPage" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item ">
            <img
              className="d-block img-fluid"
              style={{ width: "100vw", height: "100vh" }}
              src={HomePageBg2}
              alt="First slide"
            />
          </div>
          <div className="carousel-item active">
            <img
              className="d-block img-fluid"
              style={{ width: "100vw", height: "100vh" }}
              src={HomePageBg4}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid"
              style={{ width: "100vw", height: "100vh" }}
              src={HomePageBg3}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid"
              style={{ width: "100vw", height: "100vh" }}
              src={HomePageBg}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev "
          href="#HomeSliderPage"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon controlButton"
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
            className="carousel-control-next-icon controlButton"
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
              800,
              "Learn Civil Aviation Managment 👏",
              800,
              "Learn AirLine And AirPort Managment",
              800,
              "You're the Best Luky to choose our school 🎲",
              800,
              "Stay With Us ☂︎",
              800,
            ]}
          />
        </h1>
        <p>In Partnership with SACCA Institute of Freight And Tourism</p>
        <div className="buttonContainer">
          <button
            className="btn btn-primary primaryTextWhiteColor sliderBtn"
            id="OurCourseBtn"
          >
            Our Courses
          </button>
          <button
            className="btn primaryBackGroundWhiteColor primaryTextBlueColor sliderBtn"
            id="learnMoreBtn"
          >
            <span id="spanLearnMoreBtn">
              <span> Learn More</span>
              <AiOutlineArrowRight id="arrow" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainHomeSlidePage;
