import React from "react";
import HeaderPageComponent from "../../components/headerPages/HeaderPageComponent";
import ImageServicesContainer from "../../assets/images/cheering-african-amerlcan-female-university-student-group-american-students-outdoor-summer-155695388.jpg";
import LectureImage from "../../assets/images/instructor1.jpg";
import ButtonComponent from "../../components/Buttons/ButtonComponent";
import { MdGrading } from "react-icons/md";
import StartControl from "../homePages/upcomingCourses/StartControl";
import SocialMediaIcons from "../../components/socialMedia/SocialMediaIcons";
import "./service.css";
import Rating from "./Rating/Rating";
import FormForReview from "./formForReview/FormForReview";
import AsideCourse from "../../components/courseAside/AsideCourse";
import Footer from "../../components/footer/Footer";

function Service() {
  return (
    <div style={{ marginTop: "215rem" }}>
      <HeaderPageComponent
        title="Service"
        prevLink="/services"
        prevLinkText="Services"
        nextLink=""
        nextLinkText="Service_detail"
      />
      <section className="allContentContainer serviceContentContainer primaryBackGroundWhiteColor ">
        <aside className="leftSide p-0 w-100 ">
          <div className="imageServiceContainer">
            <img
              src={ImageServicesContainer}
              alt="ImageServicesContainer"
              style={{ width: "100%" }}
              className="p-0"
            />
          </div>
          <div className="serviceContent">
            <h1 className="py-2">English For Today</h1>
            <div className="takeThisCoursContainer">
              <div className="lecture">
                <div className="LectureIconContainer">
                  <div className="px-2 iconLectureContainer">
                    <div style={{ fontSize: "3rem" }}>
                      <MdGrading />
                    </div>
                    <div>
                      <p className="lectureText">Lecture</p>
                      <p>ADMIN</p>
                    </div>
                  </div>
                  <div className="TextContainer">
                    <p className="lectureText">Category</p>
                    <p>LANGUAGE</p>
                  </div>
                  <div className="reviews TextContainer">
                    <StartControl />
                    <p>0 reviews</p>
                  </div>
                </div>
              </div>

              <div id="buttonLessonContent">
                <div className="contextOfLesson">
                  <h1 className="secondaryTextBlueColor contextOfLessonText ">
                    FREE
                  </h1>
                </div>
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
            <div className="courseDescription">
              <h3 className="courseTitle">Course Description</h3>
              <p>
                There are tens of thousands of content marketing jobs being
                advertised on LinkedIn. These roles have never been in more
                demand. That’s why adding content marketing to your skill set is
                such a smart career move. In this course, expert Colleen Jones
                introduces you to the fundamentals. Discover what content
                marketing is—and what it isn’t. Then learn how develop a smart
                content marketing strategy. Find out how to correctly identify
                an audience, create a unique brand point-of-view, and build out
                your content. Finally, Colleen shares how to build a content
                calendar, track the performance of campaigns, and leverage
                cutting-edge technology to make scaling programs easier. Using
                these basic techniques, you can build effective content
                marketing programs that drive traffic, engagement, sales, and
                more.
              </p>
            </div>
            <article>
              <h3 className="courseTitle">Course Info</h3>
              <div></div>
              <div className="aside__list-group">
                <ul className="list-group list-group-flush aside__list-group">
                  <li className="list-group-item">
                    {" "}
                    STUDENTS: <span className="dateCourseContent">1</span>
                  </li>
                  <li className="list-group-item">
                    START COURSE:{" "}
                    <span className="dateCourseContent">04/02/2020</span>
                  </li>
                  <li className="list-group-item">
                    {" "}
                    DURATION: <span className="dateCourseContent">42h 30m</span>
                  </li>
                  <li className="list-group-item">
                    PREREQUISITES:{" "}
                    <span className="dateCourseContent"> No</span>
                  </li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
            </article>
          </section>
          <section>
            <div className="lectureInfo text-center text-md-start">
              <div className="imageLectureContainer">
                <img
                  src={LectureImage}
                  alt="LectureImage"
                  style={{ width: "100%" }}
                  className="img-fluid LectureImage"
                />
              </div>
              <div className="lectureDescription px-md-4">
                <h4>Michel Thomas</h4>
                <p>
                  Must explain to you how all this mistaken idea of pleasure and
                  praising pain was born and I will give you complete account of
                  the system, and expound the actual teachings of the great
                  explorer of the truth the master-builder of human
                </p>
                <div className="socialMediaContainer">
                  <SocialMediaIcons
                    facebook="www.facebook.com"
                    twitter="www.twitter.com"
                    instagram="www.instagram.com"
                    youtube="www.youtube.com"
                  />
                </div>
              </div>
            </div>
          </section>
          <hr />
          <Rating />
          <hr />
          <section>
            <FormForReview />
          </section>
        </aside>
        <aside>
          <AsideCourse />
        </aside>
      </section>
      <Footer />
    </div>
  );
}

export default Service;
