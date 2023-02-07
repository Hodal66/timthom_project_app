import React from "react";
import { Link } from "react-router-dom";
import { SocialMediaData } from "../../../data";
import "./socialMedia.css";
function SocialMedia() {
  return (
    <div>
      {/* <h1>Social Medial</h1> */}
      <div className="content row py-2">
        {SocialMediaData.map(({ linkConnection, icon }, id) => {
          return (
            <div key={id} className="socialMediaIconContainer col">
              <a
                href={linkConnection}
                target="_blank"
                rel="noreferrer"
                className="icon"
              >
                {icon}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SocialMedia;
