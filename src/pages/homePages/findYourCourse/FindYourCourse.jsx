import React from "react";
// import { AiOutlineArrowRight } from "react-icons/ai";
import "./find__your__course.css";
function FindYourCourse() {
  return (
    <div
      className="container_fluid findCourses row "
      id="findCoursesMainContainer"
    >
      <div
        id="findCourseContainer"
        className=" col-12 bg-white justify-content-center backGroundImageFindCourese"
      >
        <section id=" ">
          <h1 className=" container mainSearchHeader primaryTitle-white ">
            Find Your Course.
          </h1>
          <div className="searchContainer py-4  row gap-2">
            <input
              type="text"
              placeholder="Enter keyword........."
              className="col-md-6 m-2 col-lg-7 border-0 rounded rounded-2 SearchInput"
            />
            <button className="col-md-6 m-2 searchButton col-lg-4  rounded rounded-2 justify-content-center btnBlue ">
              Search_Course
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FindYourCourse;
