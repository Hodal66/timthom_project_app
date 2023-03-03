import React from "react";
import "./homePage.css";

function MainHomeSlidePage() {
  return (
    <div className=" w-100 h-75" id="home__slider">
      <div className="overlayHomeBackground">
        <div
          id="HomeSliderPage"
          className="carousel slide"
          data-ride="carousel"
          data-interval="5000"
        >
          <div className="carousel-inner HomeImageContainer">
            <div className="carousel-item imageHomeContentContainer1">
              {/* <img
                className="d-block img-fluid slideImage"
                src={MainPage}
                alt="First slide"
              /> */}
            </div>
            <div className="carousel-item active imageHomeContentContainer2">
              {/* <img
                className="d-block img-fluid slideImage"
                src={HomePageBg2}
                alt="Second slide"
              /> */}
            </div>
            <div className="carousel-item imageHomeContentContainer3">
              {/* <img
                className="d-block img-fluid slideImage"
                src={HomePageBg4}
                alt="Third slide"
              /> */}
            </div>
            <div className="carousel-item imageHomeContentContainer4">
              {/* <img
                className="d-block img-fluid slideImage"
                src={HomePageBg}
                alt="Third slide"
              /> */}
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
        <div
          className="carousel-caption d-none d-md-block "
          id="homeCaptionContainer"
        >
          <h1 className="timTomText py-1">TIMTOM AVIATION </h1>
        </div>
      </div>
    </div>
  );
}

export default MainHomeSlidePage;
