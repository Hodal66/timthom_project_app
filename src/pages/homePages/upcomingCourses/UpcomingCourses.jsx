// import axios from "axios";
import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import WaveLine from "../../../components/WaveLine/WaveLine";
import { allUpcammingCourses } from "../../../database/CoursesTest";
import LessonTips from "./LessonTips";
import StartControl from "./StartControl";
import "./upcoming.css";

function UpcomingCourses() {
  const [state, setstate] = useState([]);
  const [allDataContent, setAllDataContent] = useState(allUpcammingCourses);

  return (
    <div className="primaryBackGroundWhiteColor upcomingCourseContainer container-fluid">
      <div className="mx-0 mx-sm-2 mx-md-5 px-4">
        <WaveLine className="mb-5" />
        <h1>Upcoming Courses</h1>
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
          {allDataContent &&
            allDataContent.map((courseItem, courseId) => {
              return (
                <div key={courseId} className="card   m-2">
                  <div className="imageContainer " style={{ opacity: "0.8" }}>
                    <img
                      src={courseItem.courseImage}
                      alt={courseItem.altImage}
                      className="card-img-top"
                      style={{ width: "100%", height: "38vh" }}
                    />
                    {courseItem.lessonDetails.map(
                      (courseLessonDetail, courseLessonId) => {
                        return (
                          <div
                            className="innerImageContainer pl-2 pb-2 d-flex"
                            key={courseLessonId}
                          >
                            <div className="btn btn-sm py-0 mr-2 secondaryBackGroundBlueColor primaryTextWhiteColor">
                              ${courseLessonDetail.money}
                            </div>
                            <StartControl />
                          </div>
                        );
                      }
                    )}
                  </div>

                  <div className="card-body">
                    <p
                      className="card-title display-5 "
                      style={{ fontWeight: "900" }}
                    >
                      {courseItem.titleInShortName}
                    </p>
                    <div className="cardContentContainer">
                      {courseItem.teacher.map((teacherDetails, teacherId) => {
                        return (
                          <div key={teacherId}>
                            <p className="card-text">
                              Lecture{" "}
                              <span className="secondaryTextBlueColor">
                                {teacherDetails.position}
                              </span>{" "}
                              in{" "}
                              <span className="primaryTextOrangeColor">
                                {teacherDetails.professionalism}
                              </span>
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <hr />
                    {courseItem.lessonDetails.map(
                      (courseLessonMainDetails, courseLessonMainId) => {
                        return (
                          <div
                            className="lessonContainer"
                            key={courseLessonMainId}
                          >
                            <LessonTips
                              studentAvailable={
                                courseLessonMainDetails.studentAvailable
                              }
                              courseTime={courseLessonMainDetails.courseTime}
                              numberOfLessons={
                                courseLessonMainDetails.numberOfLessons
                              }
                              courseLessonId={courseItem.id}
                            />
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default UpcomingCourses;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import {
//   MdOutlineKeyboardArrowLeft,
//   MdOutlineKeyboardArrowRight,
// } from "react-icons/md";
// import WaveLine from "../../../components/WaveLine/WaveLine";
// import LessonTips from "./LessonTips";
// import StartControl from "./StartControl";
// import "./upcoming.css";

// function UpcomingCourses() {
//   const [state, setstate] = useState([]);
//   const [allDataContent, setAllDataContent] = useState([]);
//   const hundleDataCourses = async () => {
//     const { data } = await axios.get(
//       "http://localhost:3004/allUpcammingCourses"
//     );
//     console.log("All data we faound here is ", data);
//     setAllDataContent(data);
//   };

//   useEffect(() => {
//     hundleDataCourses();
//   }, [state]);

//   return (
//     <div className="primaryBackGroundWhiteColor upcomingCourseContainer container-fluid">
//       <div className="mx-0 mx-sm-2 mx-md-5 px-4">
//         <WaveLine className="mb-5" />
//         <h1>Upcoming Courses</h1>
//         <div className="headerContainer row">
//           <div className="emptyColl col"></div>
//           <div className="btn-group col justify-content-end">
//             <div className="btn border border-2 border-primaryBackGroundOrangeColor">
//               <MdOutlineKeyboardArrowLeft />
//             </div>
//             <div className="btn border border-2 border-primaryBackGroundOrangeColor">
//               <MdOutlineKeyboardArrowRight />
//             </div>
//           </div>
//         </div>

//         <div id="cardsContainer">
//           {allDataContent &&
//             allDataContent.map((courseItem, courseId) => {
//               return (
//                 <div key={courseId} className="card   m-2">
//                   <div className="imageContainer " style={{ opacity: "0.8" }}>
//                     <img
//                       src={courseItem.courseImage}
//                       alt={courseItem.altImage}
//                       className="card-img-top"
//                       style={{ width: "100%", height: "38vh" }}
//                     />
//                     {courseItem.lessonDetails.map(
//                       (courseLessonDetail, courseLessonId) => {
//                         return (
//                           <div
//                             className="innerImageContainer pl-2 pb-2 d-flex"
//                             key={courseLessonId}
//                           >
//                             <div className="btn btn-sm py-0 mr-2 secondaryBackGroundBlueColor primaryTextWhiteColor">
//                               ${courseLessonDetail.money}
//                             </div>
//                             <StartControl />
//                           </div>
//                         );
//                       }
//                     )}
//                   </div>

//                   <div className="card-body">
//                     <p
//                       className="card-title display-5 "
//                       style={{ fontWeight: "900" }}
//                     >
//                       {courseItem.titleInShortName}
//                     </p>
//                     <div className="cardContentContainer">
//                       {courseItem.teacher.map((teacherDetails, teacherId) => {
//                         return (
//                           <div key={teacherId}>
//                             <p className="card-text">
//                               Lecture{" "}
//                               <span className="secondaryTextBlueColor">
//                                 {teacherDetails.position}
//                               </span>{" "}
//                               in{" "}
//                               <span className="primaryTextOrangeColor">
//                                 {teacherDetails.professionalism}
//                               </span>
//                             </p>
//                           </div>
//                         );
//                       })}
//                     </div>
//                     <hr />
//                     {courseItem.lessonDetails.map(
//                       (courseLessonMainDetails, courseLessonMainId) => {
//                         return (
//                           <div
//                             className="lessonContainer"
//                             key={courseLessonMainId}
//                           >
//                             <LessonTips
//                               studentAvailable={
//                                 courseLessonMainDetails.studentAvailable
//                               }
//                               courseTime={courseLessonMainDetails.courseTime}
//                               numberOfLessons={
//                                 courseLessonMainDetails.numberOfLessons
//                               }
//                               courseLessonId={courseItem.id}
//                             />
//                           </div>
//                         );
//                       }
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UpcomingCourses;
