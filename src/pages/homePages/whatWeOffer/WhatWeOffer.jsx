import React from "react";
import { Link, NavLink } from "react-router-dom";
import WaveLine from "../../../components/WaveLine/WaveLine";
import { whatWeOffer } from "../../../data";
import "./whatWeOffer.css";

function WhatWeOffer() {
  return (
    <div className="container_fluid primaryBackGroundBlueColor primaryTextWhiteColor mb-5 w-100 h-100">
      <div className="contentContainer container">
        <WaveLine className="mt-5" />
        <h1 className="MainTittle">What We Offer For Growth Your Study</h1>
        <p className="container_fluid text-lg-center">
          We provide the best knowledge and practical work experience to our
          students so that they are competent enough on the job market.We
          empower, develop and train human resources from aviation and related
          companies and be able to perform better on their jobs. We also provide
          the best consultancy service in aviation tourism and hospitality for
          Rwandese and Africa at large. finaly we Assist students from other
          schools to complete their internship programs thoroughly and
          productively.
        </p>
        <div className="cardContainer row">
          {whatWeOffer.map(({ title, icon, decription }, index) => {
            return (
              <div
                key={index}
                className="col-12 card__content-container  col-sm-6 col-md-3"
              >
                <div className="card__content secondaryBackGroundBlueColor rounded rounded-5 p-3 mt-3">
                  <div
                    className="my-4 primaryTextOrangeColor"
                    style={{ fontSize: "3rem" }}
                  >
                    {icon}
                  </div>
                  <div className="title my-2">{title}</div>
                  <div className="descrition">{decription}</div>
                  <NavLink to="/about_us">
                    <button className="btn my-4 ">ReadMore</button>
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
