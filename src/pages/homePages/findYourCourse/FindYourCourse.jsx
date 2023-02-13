import React from "react";
// import { AiOutlineArrowRight } from "react-icons/ai";
import "./find__your__course.css";
function FindYourCourse() {
  return (
    <div className="container_fluid mx-3 mx-md-5 findCourses  row findCoursesMainContainer">
      <div
        id="findCourseContainer"
        className=" col-12 primaryBackGroundOrangeColor justify-content-center"
      >
        <div className="ovaerLayHomeSearch">
          <h1 className="primaryTextWhiteColor p-4 container mainSearchHeader ">
            Find Your Course. Apply Hurry Up!
          </h1>
          <div className="searchContainer py-4 px-4 row gap-2">
            <input
              type="text"
              placeholder="Enter keyword........."
              className="col-md-6 m-2 col-lg-7 p-2 border-0 rounded rounded-2"
            />
            <button className="col-md-6 m-2 col-lg-4 p-2 border-0 rounded rounded-2 justify-content-center primaryBackGroundBlueColor primaryTextWhiteColor">
              <span>Search_Course</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindYourCourse;
