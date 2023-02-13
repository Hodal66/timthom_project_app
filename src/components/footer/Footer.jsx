import React from "react";
import "./footer.css";
import LogoImage from "../../assets/images/11780708.png";
import SocialMedia from "./socialMedia/SocialMedia";
import { Link } from "react-router-dom";
import NewsLetter from "./newsLetter/NewsLetter";
function Footer() {
  return (
    <div className="py-5 thirdTextWhiteColor">
      <footer className="container w-100 px-5 px-sm-3 px-md-0">
        <div className="topContent  thirdTextWhiteColor  row">
          <div className="left_content logoAndSocialMedia col-12 col-sm-6 col-md-4 py-2">
            <img src={LogoImage} alt="LogoImage" style={{ width: "250px" }} />
            <p className="py-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates non sit nisi distinctio tempore deserunt nemo?
              Blanditiis exercitationem .
            </p>
            <div className="socialMedia">
              <SocialMedia />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 py-2">
            <h5 className="py-2">Latest News</h5>
            <div className="latestContent row px-2">
              <div>
                <div>
                  <Link to="">
                    <p className="footerCourse border border-0 border-bottom-2 border-primary">
                      <span>Civil Engeneering</span>
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="">
                    <p className="footerCourse ">
                      <span>Civil Engeneering</span>
                    </p>
                  </Link>
                </div>
                <div></div>
                <Link to="">
                  <p className="footerCourse ">
                    <span>Civil Engeneering</span>
                  </p>
                </Link>
                <Link to="">
                  <p className="footerCourse ">
                    <span>Civil Engeneering</span>
                  </p>
                </Link>
              </div>
              <div>
                <Link to="">
                  <p className="footerCourse ">
                    <span>Civil Engeneering</span>
                  </p>
                </Link>
                <Link to="">
                  <p className="footerCourse ">
                    <span>Civil Engeneering</span>
                  </p>
                </Link>
                <Link to="">
                  <p className="footerCourse ">
                    <span>Civil Engeneering</span>
                  </p>
                </Link>
                <Link to="">
                  <p className="footerCourse ">
                    <span>Civil Engeneering</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="right_content newsLetter col-12 col-sm-6 col-md-4  py-2">
            <NewsLetter />
          </div>
        </div>
        <hr className="thirdBackGroundWhiteColor" />
        <div className="bottomContent text-center pt-2">
          Lorem ipsum, magnam laborum repellat excepturi, eum nobis? Optio.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
