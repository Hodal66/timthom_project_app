import React from "react";
import EducationBackBone from "./educationBackBone/EducationBackBone";
import UpcomingCourses from "./upcomingCourses/UpcomingCourses";
import "./home__page.css";
import ProfessionalExpert from "./professional/ProfessionalExpert";
import MainHomeSlidePage from "../../components/homeCards/MainHomeSlidePage";
import WhatWeOffer from "./whatWeOffer/WhatWeOffer";
import FindYourCourse from "./findYourCourse/FindYourCourse";
import Footer from "../../components/footer/Footer";
import OnlineEducation from "./onlineEduction/OnlineEducation";
function HomePage() {
  return (
    <div
      className="primaryBackGroundBlueColor my-5 mainHomePageContainer"
      style={{ width: "100vw", height: "100vh" }}
    >
      <section>
        <MainHomeSlidePage />
      </section>
      <section>
        <FindYourCourse className="findCourses bg-danger" />
        <WhatWeOffer className="findCourses" />
      </section>
      <section className="contentSection" style={{ marginTop: "6rem" }}>
        <UpcomingCourses />
        <EducationBackBone />
        <ProfessionalExpert />
      </section>
      <section
        className="primaryBackGroundWhiteColor"
        style={{ marginTop: "40rem" }}
      >
        <OnlineEducation />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
