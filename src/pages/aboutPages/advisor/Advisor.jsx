/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { FaTwitter, FaWhatsappSquare, FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={advisorImage} alt={advisorName} />
      <div className="card-body">
        <h5 className="card-title">{advisorName}</h5>
        <p className="card-text">
          <span className="teamPosition">Position:</span> {position}
        </p>
        <ul>
          <li>
            <a href={`${youTibeLink}`}>
              <MdEmail />
            </a>
          </li>
          <li>
            <a href={`${whatsapLink}`}>
              <FaWhatsappSquare />
            </a>
          </li>
          <li>
            <a href={`${facebookLink}`}>
              <FaFacebookSquare />
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
  );
}

export default Advisor;
