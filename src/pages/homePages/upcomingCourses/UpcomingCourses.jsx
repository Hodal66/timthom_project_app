import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { upcammingCourses } from "../../../data";
import LessonTips from "./LessonTips";
import StartControl from "./StartControl";
import "./upcoming.css";

function UpcomingCourses() {
  return (
    <div
      className="primaryBackGroundWhiteColor container-fluid p-5"
      style={{ width: "100vw" }}
    >
      <div className="mx-0 mx-sm-2 mx-md-5">
        <h1
          className="display-3 w-100 primaryTextBlueColor py-5  py-0"
          style={{ fontWeight: "900" }}
        >
          {" "}
          Upcoming Courses
        </h1>
        <div className="headerContainer row">
          <div className="emptyColl col"></div>
          <div className="btn-group col justify-content-end">
            <div className="btn border border-2 border-primaryBackGroundOrangeColor">
              <MdOutlineKeyboardArrowLeft />
            </div>
            <div className="btn border border-2 border-primaryBackGroundOrangeColor">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
        </div>

        <div id="cardsContainer">
          {upcammingCourses.map(
            (
              { courseImage, altImage, money, likes, title, teacher, lesson },
              index
            ) => {
              return (
                <div key={index} className="card   m-2">
                  <div className="imageContainer " style={{ opacity: "0.8" }}>
                    <img
                      src={courseImage}
                      alt={altImage}
                      className="card-img-top mt-2 "
                      style={{ width: "100%" }}
                    />
                    <div className="innerImageContainer pl-2 pb-2 d-flex">
                      <div className="btn btn-sm py-0 mr-2 secondaryBackGroundBlueColor primaryTextWhiteColor">
                        ${money}
                      </div>
                      <StartControl />
                    </div>
                  </div>

                  <div className="card-body">
                    <p
                      className="card-title display-5 "
                      style={{ fontWeight: "900" }}
                    >
                      {title}
                    </p>
                    <div className="cardContentContainer">
                      {teacher.map(({ position, professionalism }, id) => {
                        return (
                          <div key={id}>
                            <p className="card-text">
                              Lecture{" "}
                              <span className="secondaryTextBlueColor">
                                {position}
                              </span>{" "}
                              in{" "}
                              <span className="primaryTextOrangeColor">
                                {professionalism}
                              </span>
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <hr />
                    {lesson.map(
                      (
                        { studentAvailable, courseTime, numberOfLessons },
                        id
                      ) => {
                        return (
                          <div className="lessonContainer" key={id}>
                            <LessonTips
                              studentAvailable={studentAvailable}
                              courseTime={courseTime}
                              numberOfLessons={numberOfLessons}
                            />
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default UpcomingCourses;
