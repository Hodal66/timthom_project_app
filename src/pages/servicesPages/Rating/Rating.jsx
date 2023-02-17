import React from "react";
import "./rating.css";
function Rating({ titleOfLesson }) {
  return (
    <section className="reviewSection primaryTextBlueColor w-100">
      <div id="rectangle">
        <h4 className="courseTitle">Reviews</h4>
        <div className="reviewContainer mt-5">
          <div className="ratinContainer">
            <p className="bigText">0</p>
            <p>0 RATINGS</p>
          </div>
        </div>
        <div className="finalStatus pt-2 pb-4">There are no reviews yet.</div>
      </div>
      <div className="ratingContentContainer ">
        <div className="progressContainer">
          <p className="levelOfRating">
            STARS <span className="px-2"> 5 </span>
          </p>
          <div className="progress m-2 " style={{ height: "10px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p>0</p>
        </div>
        <div className="progressContainer">
          <p className="levelOfRating">
            STARS <span className="px-2"> 4 </span>
          </p>
          <div className="progress m-2 " style={{ height: "10px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p>0</p>
        </div>
        <div className="progressContainer">
          <p className="levelOfRating">
            STARS <span className="px-2"> 3 </span>
          </p>
          <div className="progress m-2 " style={{ height: "10px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p>0</p>
        </div>
        <div className="progressContainer">
          <p className="levelOfRating">
            STARS <span className="px-2"> 2 </span>
          </p>
          <div className="progress m-2 " style={{ height: "10px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p>0</p>
        </div>
        <div className="progressContainer">
          <p className="levelOfRating">
            STARS <span className="px-2"> 1 </span>
          </p>
          <div className="progress m-2 " style={{ height: "10px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p>0</p>
        </div>
      </div>
    </section>
  );
}

export default Rating;
