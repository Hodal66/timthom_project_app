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
import { motion } from "framer-motion";
import Welcome from "./wellComeMessage/Welcome";

function HomePage() {
  return (
    <motion.div
      className="primaryBackGroundBlueColor "
      id="mainHomePageContainer"
      // style={{ width: "100vw", height: "100vh" }}

      initial={{ width: "0vw" }}
      animate={{ width: "100vw" }}
      exit={{
        x: window.innerWidth,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <section>
        <MainHomeSlidePage />
      </section>
      <section>
        <FindYourCourse className="findCourses bg-danger" />
        <section className="main________-content primaryTextWhiteColor text-center content__HomePage">
          <Welcome />
        </section>

        <WhatWeOffer className="findCourses " />
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
    </motion.div>
  );
}

export default HomePage;
