import React from "react";
import { NavLink } from "react-router-dom";
import WaveLine from "../../../components/WaveLine/WaveLine";
import { whatWeOffer } from "../../../data";
import "./whatWeOffer.css";

function WhatWeOffer() {
  return (
    <div className="container_fluid primaryBackGroundBlueColor primaryTextWhiteColor mb-5 w-100 h-100">
      <div className="contentContainer container">
        <WaveLine className="mt-5" />
        <h1 className="primaryTitle-white">Our Services</h1>

        <div className="cardContainer_____main">
          {whatWeOffer.map(({ title, icon, decription }, index) => {
            return (
              <div key={index} className=" card__content-container">
                <div className="card__content secondaryBackGroundBlueColor rounded rounded-5 p-3 mt-3 card">
                  <div
                    className="my-4 primaryTextOrangeColor"
                    style={{ fontSize: "3rem" }}
                  >
                    {icon}
                  </div>
                  <div className="title my-2" style={{ fontWeight: 700 }}>
                    {title}
                  </div>
                  <div className="descrition">{decription}</div>
                  <NavLink to="/training">
                    <button className="btn btnOrange ReadMore my-4 ">
                      ReadMore....
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
