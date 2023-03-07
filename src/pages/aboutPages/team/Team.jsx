/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./team.css";
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
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={teamTomImage} alt={teamTomImage} />
      <div className="card-body">
        <h5 className="card-title">{teamTomName}</h5>
        <p className="card-text">
          <span className="teamPosition">position:</span> {position}
        </p>
        <ul>
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
  );
}

export default Team;
