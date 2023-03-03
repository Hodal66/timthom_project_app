import React, { useState } from "react";
import "./footer.css";
import LogoImage from "../../assets/images/logo.png";
import SocialMedia from "./socialMedia/SocialMedia";
import { Link } from "react-router-dom";
import { allUpcammingCourses } from "../../database/CoursesTest";
import NewsLetter from "./newsLetter/NewsLetter";
function Footer() {
  const [allDataContent] = useState(allUpcammingCourses);
  return (
    <div className="py-5 thirdTextWhiteColor footerContainer">
      <footer className="container w-100 px-5 px-sm-3 px-md-0">
        <div className="topContent  thirdTextWhiteColor  row">
          <div className="left_content logoAndSocialMedia col-12 col-sm-6 col-md-4 py-2">
            <Link to="/">
              <img
                src={LogoImage}
                alt="LogoImage"
                style={{ width: "250px", marginLeft: "0rem" }}
              />
            </Link>
            <p className="py-2">
              To become an African hub in providing knowledge and consultancy
              service in the field of aviation, hospitality and tourism, and
              also ensure to provide the best, updated and relevant knowledge
              tour students so that they are competitive on the world job
              market.
            </p>
            <div className="socialMedia">
              <SocialMedia />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 py-2 ">
            <h5 className="py-2">Latest Courses</h5>
            {allDataContent &&
              allDataContent.map((item) => {
                return (
                  <div className="latestContent row px-2 py-1 " key={item.id}>
                    <Link to={`/service_details/${item.id}`}>
                      <span className="footerCourse border border-0 border-bottom-2 border-primary">
                        {item.titleInShortName}
                      </span>
                    </Link>
                  </div>
                );
              })}
          </div>
          <div className="right_content newsLetter col-12 col-sm-6 col-md-4  py-2">
            <NewsLetter />
          </div>
        </div>
        <hr className="thirdBackGroundWhiteColor" />
        <div className="bottomContent text-center pt-2">
          <p> &copy; 2023 | Timtom Aviation | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
