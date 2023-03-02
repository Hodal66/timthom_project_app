/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { FaTwitter, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";

import "./advisor.css";
function Advisor({
  advisorName,
  advisorImage,
  facebookLink,
  whatsapLink,
  youTibeLink,
  twitterLink,
  position,
}) {
  return (
    <div className="advisorContentContainer mx-2 ">
      <div className="thirdBackGroundWhiteColor">
        <div className="imageAdvisorContainer">
          <img
            src={advisorImage}
            alt={advisorImage}
            style={{ width: "100%", height: "40vh" }}
          />
        </div>
        <div className="text-center">
          <h3
            className="pt-4 pb-2 primaryTextBlueColor"
            style={{ fontSize: "1.5rem" }}
          >
            {advisorName}
          </h3>
          <h4 style={{ fontSize: "1.2rem" }}>{position}</h4>
        </div>

        <div>
          <ul
            className="socialMedialTeam"
            style={{
              fontSize: "1.5rem",
              background: "primaryTextBlueColor",
            }}
          >
            <li>
              <a href={`${whatsapLink}`}>
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a href={`${facebookLink}`}>
                <FaFacebookF />
              </a>
            </li>

            <li>
              <a href={`${youTibeLink}`}>
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href={`${twitterLink}`}>
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Advisor;
