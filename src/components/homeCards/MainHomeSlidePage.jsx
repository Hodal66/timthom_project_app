import React from "react";
import HomePageBg from "../../assets/images/HomePageBg2.png";
import HomePageBg2 from "../../assets/images/airplane2.jpg";
import HomePageBg3 from "../../assets/images/Avery-in-Rwanda-Hero.jpg";
import "./homePage.css";
function MainHomeSlidePage() {
  return (
    <div>
      <div id="HomeSliderPage" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#HomeSliderPage"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#HomeSliderPage" data-slide-to="1"></li>
          <li data-target="#HomeSliderPage" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block img-fluid"
              style={{ width: "100%", height: "100%" }}
              src={HomePageBg2}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid"
              style={{ width: "100%", height: "80%" }}
              src={HomePageBg3}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid"
              style={{ width: "100%", height: "100%" }}
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
          <span className="sr-only ">Previous</span>
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
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default MainHomeSlidePage;
