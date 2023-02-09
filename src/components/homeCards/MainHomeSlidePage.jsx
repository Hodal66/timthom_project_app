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
    <div className=" d-md-block " id="home__slider">
      <div
        id="HomeSliderPage"
        className="carousel slide"
        data-ride="carousel"
        data-interval="3000"
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
    // <div
    //   id="carouselExampleIndicators"
    //   className="carousel slide"
    //   data-ride="carousel"
    // >
    //   <ol className="carousel-indicators">
    //     <li
    //       data-target="#carouselExampleIndicators"
    //       data-slide-to="0"
    //       className="active"
    //     ></li>
    //     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    //     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    //   </ol>
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img
    //         className="d-block w-100"
    //         src={HomePageBg}
    //         alt="First slide"
    //         style={{ width: "100%" }}
    //       />
    //     </div>
    //     <div className="carousel-item">
    //       <img
    //         className="d-block w-100"
    //         src={HomePageBg3}
    //         alt="Second slide"
    //         style={{ width: "100%" }}
    //       />
    //     </div>
    //     <div className="carousel-item">
    //       <img
    //         className="d-block w-100"
    //         src={HomePageBg2}
    //         alt="Third slide"
    //         style={{ width: "100%" }}
    //       />
    //     </div>
    //   </div>
    //   <a
    //     className="carousel-control-prev"
    //     href="#carouselExampleIndicators"
    //     role="button"
    //     data-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="sr-only">Previous</span>
    //   </a>
    //   <a
    //     className="carousel-control-next"
    //     href="#carouselExampleIndicators"
    //     role="button"
    //     data-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="sr-only">Next</span>
    //   </a>
    // </div>
  );
}

export default MainHomeSlidePage;
