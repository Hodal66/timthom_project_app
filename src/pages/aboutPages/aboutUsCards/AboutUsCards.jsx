import React from "react";
import {
  MdGroupWork,
  MdPhotoFilter,
  MdViewInAr,
  MdVpnLock,
} from "react-icons/md";
import SimpleCard from "../../../components/Cards/SimpleCard";
import "./aboutUsCards.css";
function AboutUsCards() {
  return (
    <div className="cards__-container" style={{ width: "100%" }}>
      <div className="allCards__container">
        <div className=" row">
          <div className="cards__content-container col-12 col-md-6 col-lg-4">
            <SimpleCard
              title="Teaching In Digital Classroom"
              icon={<MdViewInAr />}
              iconContainer="iconContainer"
              iconCssController="iconCssController"
              className="primaryBackGroundBlueColor p-4"
              titleCssController="titleCssController primaryTextWhiteColor"
              contentCssController=" contentCssController"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuin ut perspiciatis unde omnis iste natus error sit voluptatem accuin"
            />
          </div>
          <div className="cards__content-container col-12 col-md-6 col-lg-4">
            <SimpleCard
              title="Teaching In Digital Classroom"
              icon={<MdVpnLock />}
              iconContainer="iconContainer"
              iconCssController="iconCssController"
              className="primaryBackGroundBlueColor p-4"
              titleCssController="titleCssController primaryTextWhiteColor"
              contentCssController=" contentCssController"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuin ut perspiciatis unde omnis iste natus error sit voluptatem accuin"
            />
          </div>
          <div className="cards__content-container col-12 col-md-6 col-lg-4 ">
            <SimpleCard
              title="Teaching In Digital Classroom"
              icon={<MdGroupWork />}
              iconContainer="iconContainer"
              iconCssController="iconCssController"
              className="primaryBackGroundBlueColor p-4"
              titleCssController="titleCssController primaryTextWhiteColor"
              contentCssController=" contentCssController"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuin ut perspiciatis unde omnis iste natus error sit voluptatem accuin"
            />
          </div>
          <div className="cards__content-container col-12 col-md-6 col-lg-4 ">
            <SimpleCard
              title="Teaching In Digital Classroom"
              icon={<MdGroupWork />}
              iconContainer="iconContainer"
              iconCssController="iconCssController"
              className="primaryBackGroundBlueColor p-4"
              titleCssController="titleCssController primaryTextWhiteColor"
              contentCssController=" contentCssController"
              content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuin ut perspiciatis unde omnis iste natus error sit voluptatem accuin"
            />
          </div>
        </div>
      </div>
      <div className="awardContentContainer text-center mx-5">
        <div className="award-item">
          <div className="awardIconContainer">
            <span>
              <MdPhotoFilter className="awardIcon" />
            </span>
          </div>
          <div className="bigContent">
            <p>360+</p>
          </div>
          <div>
            <p>Parents Reviews</p>
          </div>
        </div>
        <div className="award-item">
          <div className="awardIconContainer">
            <span>
              <MdPhotoFilter className="awardIcon" />
            </span>
          </div>
          <div className="bigContent">
            <p>360+</p>
          </div>
          <div>
            <p>Parents Reviews</p>
          </div>
        </div>
        <div className="award-item">
          <div className="awardIconContainer">
            <span>
              <MdPhotoFilter className="awardIcon" />
            </span>
          </div>
          <div className="bigContent">
            <p>360+</p>
          </div>
          <div>
            <p>Parents Reviews</p>
          </div>
        </div>
        <div className="award-item">
          <div className="awardIconContainer">
            <span>
              <MdPhotoFilter className="awardIcon" />
            </span>
          </div>
          <div className="bigContent">
            <p>360+</p>
          </div>
          <div>
            <p>Parents Reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsCards;
