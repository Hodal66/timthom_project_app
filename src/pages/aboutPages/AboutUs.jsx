import React from "react";
import HeaderPageComponent from "../../components/headerPages/HeaderPageComponent";
import AboutUsImage from "../../assets/images/course8.jpg";
import { MdArrowForward, MdVerified } from "react-icons/md";
import ButtonComponent from "../../components/Buttons/ButtonComponent";
import AboutUsCards from "./aboutUsCards/AboutUsCards";
// import Advisor from "./advisor/Advisor";
import OurLatestVideo from "./ourLatestVideo/OurLatestVideo";
import ParentOfStudents from "./parentOfStudents/ParentOfStudents";
import "./about__us.css";
import WaveLine from "../../components/WaveLine/WaveLine";
import Footer from "../../components/footer/Footer";
import Advisors from "./advisor/Advisors";
import { motion } from "framer-motion";
import Teams from "./team/Teams";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <motion.div
      style={{
        width: "100vw",
        height: "100vh",
      }}
      id=""
      className="  overflow-hidden About__Us_main-container "
      initial={{ width: "0vw" }}
      animate={{ width: "100vw" }}
      exit={{
        x: window.innerWidth,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <div className="primaryBackGroundWhiteColor">
        <HeaderPageComponent
          title="About Us"
          nextLink=""
          prevLink="/"
          prevLinkText="Home"
          nextLinkText="About-us"
        />

        <div className="about__us_content-container about__us-container main________-content">
          <section className="about__us_content">
            <div className="imageAboutUsContainer" style={{ width: "100%" }}>
              <div className="backgroundImageBehindImage">
                <img
                  src={AboutUsImage}
                  alt="AboutUsImage"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <aside>
              <div className="About__us_content-container">
                <WaveLine className="primaryBackGroundWhiteColor text-center" />
                <h1 className="primaryTitle text-center">
                  About Timtom Aviation
                </h1>
                <p>
                  Timtom aviation is a private company which offers consultancy
                  services in the field of management and also offers training
                  in the field of aviation management, hospitality, tourism and
                  ICT, after training we awards international professional
                  certificate and diplomas like ICAO and IATA. We have
                  partnership with internationally recognized Aviation
                  management institutes from CANADA and INDIA, We also offer
                  other services related to hospitality and tourism, these
                  include; Air ticketing, Hotel reservation and Visa application
                </p>
                <p></p>
                <div>
                  <p>
                    <span>
                      <MdVerified className="aboutUsIcon" />
                    </span>
                    <span>
                      We offer a range of short and professional courses in air
                      ticketing to help individuals develop their skills and
                      advance their careers in the aviation industry.
                    </span>
                  </p>
                  <p>
                    <span>
                      <MdVerified className="aboutUsIcon" />
                    </span>
                    <span>
                      We have extensive knowledge and experience with the
                      admission and visa processes of various countries and can
                      provide personalized support to students
                    </span>
                  </p>
                  <p>
                    <span>
                      <MdVerified className="aboutUsIcon" />
                    </span>
                    <span>
                      Our short and professional courses in hotel booking
                      provide individuals with the skills and knowledge needed
                      to excel in the hospitality industry.
                    </span>
                  </p>
                </div>
                <Link to="/services">
                  <ButtonComponent
                    text="OUR COURSES"
                    className="primaryBackGroundOrangeColor primaryTextWhiteColor my-4"
                    icon={<MdArrowForward />}
                  />
                </Link>
              </div>
            </aside>
          </section>
          <section className="pt-4">
            <WaveLine className="primaryBackGroundWhiteColor text-center" />
            <h1 className="primaryTitle text-center">
              Timtom Content Description
            </h1>
            <AboutUsCards />
          </section>
          <section className="pt-4">
            <WaveLine className="primaryBackGroundWhiteColor text-center" />
            <h1 className="primaryTitle text-center">Directorate</h1>
            <Teams />
          </section>
          <section className="mt-4 overflow-hidden">
            <WaveLine className="primaryBackGroundWhiteColor text-center" />
            <h1 className="primaryTitle text-center">
              Meet Our Expert Advisors
            </h1>
            <Advisors />
          </section>
          <section className="mt-4">
            <WaveLine className="primaryBackGroundWhiteColor text-center" />
            <h1 className="primaryTitle text-center">
              {" "}
              Watch Our Latest Video{" "}
            </h1>
            <OurLatestVideo />
          </section>
          <section className="ParentOfStudents overflow-hidden">
            <ParentOfStudents />
          </section>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </motion.div>
  );
}

export default AboutUs;
