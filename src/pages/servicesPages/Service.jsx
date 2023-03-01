import React, { useState } from "react";
import HeaderPageComponent from "../../components/headerPages/HeaderPageComponent";
import ButtonComponent from "../../components/Buttons/ButtonComponent";
import { MdGrading } from "react-icons/md";
import StartControl from "../homePages/upcomingCourses/StartControl";
import SocialMediaIcons from "../../components/socialMedia/SocialMediaIcons";
import "./service.css";
import Rating from "./Rating/Rating";
import { allUpcammingCourses } from "../../database/CoursesTest";
import FormForReview from "./formForReview/FormForReview";
import AsideCourse from "../../components/courseAside/AsideCourse";
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";
function Service() {
  const [itemService, setItemService] = useState(allUpcammingCourses);
  // let params = useParams();

  // const getMeData = async () => {
  //   const { data } = await axios.get(
  //     `http://localhost:3004/allUpcammingCourses?id=${params.serviceId}`
  //   );
  //   setItemService(data);

  // };
  // useEffect(() => {
  //   getMeData();
  // }, []);
  // console.log("Now the remaining data", itemService);

  return (
    <motion.div
      style={{ width: "100vw", height: "100vh" }}
      className="service__main-container"
      initial={{ width: "0vw" }}
      animate={{ width: "100vw" }}
      exit={{
        x: window.innerWidth,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <HeaderPageComponent
        title="Service"
        prevLink="/services"
        prevLinkText="Services"
        nextLink=""
        nextLinkText="Service_detail"
      />
      <section className="allContentContainer serviceContentContainer primaryBackGroundWhiteColor ">
        {itemService &&
          itemService.map((item, id) => {
            return (
              <aside className="leftSide p-0 w-100 " key={id}>
                <div className="imageServiceContainer">
                  <img
                    src={item.courseImage}
                    alt={item.altImage}
                    style={{ width: "100%", height: "80vh" }}
                    className="p-0"
                  />
                </div>
                <div className="serviceContent">
                  <h1 className="py-4 primaryTextBlueColor">
                    {" "}
                    {item.titleInShortName} For Today
                  </h1>
                  <div className="takeThisCoursContainer">
                    <div className="lecture">
                      <div className="LectureIconContainer">
                        <div className="px-2 iconLectureContainer">
                          <div style={{ fontSize: "3rem" }}>
                            <MdGrading />
                          </div>
                          {item.teacher &&
                            item.teacher.map((teacherDetail, teacherId) => {
                              return (
                                <div key={teacherId}>
                                  <p className="lectureText">Lecture</p>
                                  <p>{teacherDetail.position}</p>
                                </div>
                              );
                            })}
                        </div>
                        <div className="TextContainer">
                          <p className="lectureText">Category</p>
                          <p>{item.titleInShortName}</p>
                        </div>
                        <div className="reviews TextContainer">
                          <StartControl />
                          <p>reviews</p>
                        </div>
                      </div>
                    </div>

                    <div id="buttonLessonContent">
                      {item.lessonDetails &&
                        item.lessonDetails.map((lessonDetail) => {
                          return (
                            <div
                              className="contextOfLesson"
                              key={lessonDetail.id}
                            >
                              <h1 className="secondaryTextBlueColor contextOfLessonText ">
                                $ {lessonDetail.money}
                              </h1>
                            </div>
                          );
                        })}
                      <div className="btnContainer">
                        <ButtonComponent
                          text="TAKE THIS COURSE"
                          className="secondaryBackGroundBlueColor primaryTextWhiteColor takeThisCourseButton"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <section>
                  {item.CourseContent &&
                    item.CourseContent.map((courseContent, courseContentId) => {
                      return (
                        <div
                          className="courseDescription"
                          key={courseContentId}
                        >
                          <h3 className="courseTitle">Course Description</h3>
                          <p>{courseContent.fistParagrap}</p>
                          <p>{courseContent.SecondParagrapth}</p>
                          <p>{courseContent.thirdParagraph}</p>
                        </div>
                      );
                    })}

                  <article>
                    <h3 className="courseTitle">Course Info</h3>
                    <div></div>
                    <div className="aside__list-group">
                      {item.lessonDetails &&
                        item.lessonDetails.map((lessonDetail, id) => {
                          return (
                            <ul
                              className="list-group list-group-flush aside__list-group"
                              key={id}
                            >
                              <li className="list-group-item">
                                {" "}
                                STUDENTS:{" "}
                                <span className="dateCourseContent">
                                  {lessonDetail.studentAvailable}
                                </span>
                              </li>
                              <li className="list-group-item">
                                START COURSE:{" "}
                                <span className="dateCourseContent">
                                  {lessonDetail.DateOfLesson}
                                </span>
                              </li>
                              <li className="list-group-item">
                                {" "}
                                DURATION:{" "}
                                <span className="dateCourseContent">
                                  {lessonDetail.TimeScheduled}
                                </span>
                              </li>
                              <li className="list-group-item">
                                PREREQUISITES:{" "}
                                <span className="dateCourseContent">
                                  {lessonDetail.Requesties}
                                </span>
                              </li>
                              <li className="list-group-item">
                                Number Of Lessons :
                                <span>{lessonDetail.numberOfLessons}</span>
                              </li>
                            </ul>
                          );
                        })}
                    </div>
                    <div className="aside__list-group">
                      <h1 className="courseTitle pt-4 pb-2">
                        Sub Courses, Just We Have the Following Lessons
                      </h1>
                      {item.lessonDetails &&
                        item.lessonDetails.map((lessonDetail, id) => {
                          return (
                            <ul
                              className="list-group list-group-flush aside__list-group"
                              key={id}
                            >
                              {lessonDetail.subDetails.map(
                                (subMenuParagraph, paragraphId) => {
                                  return (
                                    <li
                                      className="list-group-item"
                                      key={paragraphId}
                                    >
                                      <p>{subMenuParagraph.subCourse1}</p>
                                      <p>{subMenuParagraph.subCourse2}</p>
                                      <p>{subMenuParagraph.subCourse3}</p>
                                      <p>{subMenuParagraph.subCourse4}</p>
                                      <p>{subMenuParagraph.subCourse5}</p>
                                      <p>{subMenuParagraph.subCourse6}</p>
                                      <p>{subMenuParagraph.subCourse7}</p>
                                      <p>{subMenuParagraph.subCourse8}</p>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          );
                        })}
                    </div>
                  </article>
                </section>
                <section>
                  {item.teacher &&
                    item.teacher.map((teacherDetails, teacherId) => {
                      return (
                        <div
                          className="lectureInfo text-center text-md-start"
                          key={teacherId}
                        >
                          <div className="imageLectureContainer">
                            <img
                              src={teacherDetails.TeacheImage}
                              alt={teacherDetails.AltTeacherImage}
                              style={{ width: "100%" }}
                              className="img-fluid LectureImage"
                            />
                          </div>
                          <div className="lectureDescription px-md-4">
                            <h4>Teacher : {teacherDetails.TeacherName}</h4>
                            <p>{teacherDetails.TecherContent}</p>
                            {teacherDetails.socialMedia &&
                              teacherDetails.socialMedia.map(
                                (socialMedialDetails, socialMediaId) => {
                                  return (
                                    <div
                                      className="socialMediaContainer"
                                      key={socialMediaId}
                                    >
                                      <SocialMediaIcons
                                        facebook={`www.${socialMedialDetails.facebook}.com`}
                                        twitter={`www.${socialMedialDetails.twitter}.com`}
                                        instagram={`www.${socialMedialDetails.instagram}.com`}
                                        youtube={`www.${socialMedialDetails.youtube}.com`}
                                      />
                                    </div>
                                  );
                                }
                              )}
                          </div>
                        </div>
                      );
                    })}
                </section>
                <hr />
                <Rating />
                <hr />
                <section>
                  <FormForReview titleOfLesson={item.titleInShortName} />
                </section>
              </aside>
            );
          })}

        <aside>
          <AsideCourse />
        </aside>
      </section>
      <footer>
        <Footer />
      </footer>
    </motion.div>
  );
}

export default Service;
