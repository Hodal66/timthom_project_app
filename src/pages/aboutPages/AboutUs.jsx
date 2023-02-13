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
                <WaveLine className="primaryBackGroundWhiteColor py-2 text-center" />
                <h1 className="headerAboutUsTitle">Why You Learn Education</h1>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accustium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illintore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo.
                </p>
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
            <Advisor />
          </section>
          <section className="my-5">
            <OurLatestVideo />
          </section>
          <section className="my-5 overflow-hidden">
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
