/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { FaTwitter, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
function Team({
  teamTomName,
  teamTomImage,
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
            src={teamTomImage}
            alt={teamTomImage}
            style={{ width: "100%", height: "40vh" }}
          />
        </div>
        <h3 className="text-center p-4">{teamTomName}</h3>

        <div>
          <ul
            className="row"
            style={{ fontSize: "1.5rem", paddingBottom: "1rem" }}
          >
            <li className="col-1"></li>

            <li className="col-2">
              <a href={`${whatsapLink}`}>
                <FaWhatsapp />
              </a>
            </li>
            <li className="col-2">
              <a href={`${facebookLink}`}>
                <FaFacebookF />
              </a>
            </li>

            <li className="col-2">
              <a href={`${youTibeLink}`}>
                <FaYoutube />
              </a>
            </li>
            <li className="col-2">
              <a href={`${twitterLink}`}>
                <FaTwitter />
              </a>
            </li>
            <li className="col-3"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Team;
