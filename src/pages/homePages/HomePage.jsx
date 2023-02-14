import React from "react";
import EducationBackBone from "./educationBackBone/EducationBackBone";
import UpcomingCourses from "./upcomingCourses/UpcomingCourses";
import ProfessionalExpert from "./professional/ProfessionalExpert";
import MainHomeSlidePage from "../../components/homeCards/MainHomeSlidePage";
import WhatWeOffer from "./whatWeOffer/WhatWeOffer";
import FindYourCourse from "./findYourCourse/FindYourCourse";
import Footer from "../../components/footer/Footer";
import OnlineEducation from "./onlineEduction/OnlineEducation";
import "./home__page.css";
function HomePage() {
  return (
    <div
      className="primaryBackGroundBlueColor"
      id="mainHomePageContainer"
      style={{ width: "100vw", height: "100vh" }}
    >
      <section>
        <MainHomeSlidePage />
      </section>
      <section>
        <FindYourCourse className="findCourses bg-danger" />
        <WhatWeOffer className="findCourses " />
      </section>
      <section>
        <UpcomingCourses />
        <EducationBackBone />
        <ProfessionalExpert />
      </section>
      <section className="primaryBackGroundWhiteColor">
        <OnlineEducation />
      </section>
      <footer>
        <Footer className="primaryBackGroundBlueColor" />
      </footer>
    </div>
  );
}

export default HomePage;
