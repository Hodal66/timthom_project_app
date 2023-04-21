import React from "react";
// import EducationBackBone from "./educationBackBone/EducationBackBone";
import UpcomingCourses from "./upcomingCourses/UpcomingCourses";
import ProfessionalExpert from "./professional/ProfessionalExpert";
import MainHomeSlidePage from "../../components/homeCards/MainHomeSlidePage";
import WhatWeOffer from "./whatWeOffer/WhatWeOffer";
import FindYourCourse from "./findYourCourse/FindYourCourse";
import Footer from "../../components/footer/Footer";
import OnlineEducation from "./onlineEduction/OnlineEducation";
import "./home__page.css";
// import { motion } from "framer-motion";
import Welcome from "./wellComeMessage/Welcome";
import Trainning from "./trainnings/Trainning";
// import Test from "./upcomingCourses/Test";

function HomePage() {
  return (
    <div className="primaryBackGroundBlueColor " id="mainHomePageContainer">
      <section>
        <MainHomeSlidePage />
      </section>
      <section>
        <FindYourCourse className="findCourses bg-danger" />
        <section className="text-center ">
          <Welcome />
        </section>

        {/* <WhatWeOffer className="findCourses " /> */}
      </section>
      <section className="text-center ">
        {/* <h1>traimming section</h1>_________________________:::::: */}
        <Trainning />
      </section>
      <section className="mb-5">
        <UpcomingCourses />
        {/* <EducationBackBone /> */}
        <ProfessionalExpert />
      </section>

      <section className="primaryBackGroundWhiteColor mt-5">
        <OnlineEducation />
      </section>

      <footer>
        <Footer className="primaryBackGroundBlueColor" />
      </footer>
    </div>
  );
}

export default HomePage;
