/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";
import { AdvisorData } from "../../../database/AdvisorData";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";
import "./advisor.css";
function Advisor() {
  return (
    <div className="overflow-hidden" style={{ width: "100%" }}>
      <header>
        <h1 className="py-4">Meet Our Expert Advisors</h1>
        <ButtonComponent
          text="View More"
          icon={<MdArrowForward />}
          className="primaryBackGroundOrangeColor primaryTextWhiteColor px-5 py-3 my-4"
        />
      </header>
      <div className="advisorContentContainer  ">
        {AdvisorData.map(({ name, image, socialMedia, id }) => {
          return (
            <div className="thirdBackGroundWhiteColor" key={id}>
              <div className="imageAdvisorContainer">
                <img src={image} alt="AdvisorImage" style={{ width: "100%" }} />
              </div>
              <h3 className="text-center p-4">{name}</h3>
              <div>
                {socialMedia.map(
                  ({ facebook, twitter, isntagram, youtub }, id) => {
                    return (
                      <div className="socialMediaLink p-2 my-2" key={id}>
                        <ul>
                          <li>
                            <a href={facebook} nonce="false" role={facebook}>
                              <FaFacebookF />
                            </a>
                          </li>
                          <li>
                            <a href={twitter} nonce="false" role={twitter}>
                              <FaTwitter />
                            </a>
                          </li>
                          <li>
                            <a href={isntagram} nonce="false" role={isntagram}>
                              <FaInstagram />
                            </a>
                          </li>

                          <li>
                            <a href={youtub} nonce="false" role={youtub}>
                              <FaYoutube />
                            </a>
                          </li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                        <div className="my-5"></div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttonsControll d-flex gap-5 py-4 justify-content-between">
        <div className="leftButton m-2">
          <ButtonComponent icon={<MdArrowBack />} className="controlButton" />
        </div>
        <div className="RightButton m-2">
          <ButtonComponent
            icon={<MdArrowForward />}
            className="controlButton"
          />
        </div>
      </div>
    </div>
  );
}

export default Advisor;
