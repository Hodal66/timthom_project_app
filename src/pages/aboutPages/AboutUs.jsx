import React from "react";
import HeaderPageComponent from "../../components/headerPages/HeaderPageComponent";
import AboutUsImage from "../../assets/images/course8.jpg";
import { MdArrowForward, MdVerified } from "react-icons/md";
import ButtonComponent from "../../components/Buttons/ButtonComponent";
import AboutUsCards from "./aboutUsCards/AboutUsCards";
import Advisor from "./advisor/Advisor";
import OurLatestVideo from "./ourLatestVideo/OurLatestVideo";
import ParentOfStudents from "./parentOfStudents/ParentOfStudents";
import "./about__us.css";
import WaveLine from "../../components/WaveLine/WaveLine";
import Footer from "../../components/footer/Footer";
import Advisors from "./advisor/Advisors";

function AboutUs() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
      id=""
      className="  overflow-hidden About__Us_main-container"
    >
      <div className="primaryBackGroundWhiteColor">
        <HeaderPageComponent
          title="About Us"
          nextLink=""
          prevLink="/"
          prevLinkText="Home"
          nextLinkText="About-us"
        />

        <div className="about__us_content-container about__us-container">
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
                <h1 className="headerAboutUsTitle">Why You Learn Education</h1>
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
                    <span>Used The Web For A Day On Internet Explorer</span>
                  </p>
                  <p>
                    <span>
                      <MdVerified className="aboutUsIcon" />
                    </span>
                    <span>
                      A Detailed Comparison Between WordPress And October
                    </span>
                  </p>
                  <p>
                    <span>
                      <MdVerified className="aboutUsIcon" />
                    </span>
                    <span>
                      Block Slack’s Contribution To Building A Better Collae
                    </span>
                  </p>
                </div>
                <ButtonComponent
                  text="OUR COURSES"
                  className="primaryBackGroundOrangeColor primaryTextWhiteColor my-4"
                  icon={<MdArrowForward />}
                />
              </div>
            </aside>
          </section>
          <section>
            <AboutUsCards />
          </section>
          <section className="my-5 overflow-hidden">
            <Advisors />
          </section>
          <section className="my-5">
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
    </div>
  );
}

export default AboutUs;
