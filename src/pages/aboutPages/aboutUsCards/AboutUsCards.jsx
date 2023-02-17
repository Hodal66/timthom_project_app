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
    <div className="cards__-container my-5" style={{ width: "100%" }}>
      <div className="allCards__container">
        <div className=" row">
          <div className="cards__content-container col-12 col-md-6 ">
            <SimpleCard
              title="Team of consultants"
              icon={<MdViewInAr />}
              iconContainer="iconContainer"
              iconCssController="iconCssController"
              className="primaryBackGroundBlueColor p-4"
              titleCssController="titleCssController primaryTextWhiteColor"
              contentCssController=" contentCssController"
              content="Timtom aviation was established in 2019 with a major focus to provide quality and professional consultancy services in the field of management and training particularly in the aviation management studies. Since 2019 we have performed various assignments related to training of students on aviation management, Air ticketing and ICT short courses, we conducted research especially on Monitoring and evaluation in four  organizations in Rwanda, We also provide on regular basis technical guidance on the nation TVET schools inspections criteria and we participate in the award and renewal of TVET accreditation, "
            />
          </div>
          <div className="cards__content-container col-12 col-md-6 ">
            <SimpleCard
              title="Timtom aviation was established in 2019"
              icon={<MdViewInAr />}
              iconContainer="iconContainer"
              iconCssController="iconCssController"
              className="primaryBackGroundBlueColor p-4"
              titleCssController="titleCssController primaryTextWhiteColor"
              contentCssController=" contentCssController"
              content="TIMTOM Aviation consultancy has many experts in various functions of management particularly in Training, planning, monitoring, evaluation of programs and projects, research and Human resources management. The firm has got partners and part time consultants of high professional qualifications, most of them are lecturers at the universities in Rwanda and abroad. Our team of consultants have got very rich and heavy experiences obtained from various organizations, government institutions and consultancy firms, their average experience is about 12 years of experience, their major areas of experience is, Research, planning, monitoring and evaluation, organization reform, restructuring, Human Resources management, policy and procedure formulation, and other areas of management.."
            />
          </div>
          <div className="cards__content-container col-12 col-md-6 ">
            <SimpleCard
              title="VISION"
              icon={<MdVpnLock />}
              iconContainer="iconContainer"
              iconCssController="iconCssController"
              className="primaryBackGroundBlueColor p-4"
              titleCssController="titleCssController primaryTextWhiteColor"
              contentCssController=" contentCssController"
              content="To establish international first class aviation institute in Africa that awards high levels of academic qualification to students all over the world and ensure to produce very competitive students on the world job market."
              paragraph1="a.	To provide the best knowledge and practical work experience to our students so that they are competent enough on the job market."
              paragraph2="b.	To empower, develop and train human resources from aviation and related companies and be able to perform better on their jobs. "
              paragraph3="c.	To provide the best consultancy service in aviation tourism and hospitality for Rwandese and Africa at large."
              paragraph4="d.	Assist students from other schools to complete their internship programs thoroughly and productively."
              paragraph5="e. internship program, we equip students with enough practical knowledge and skills."
            />
          </div>
          <div className="cards__content-container col-12 col-md-6  ">
            <SimpleCard
              title="MISSION"
              icon={<MdGroupWork />}
              iconContainer="iconContainer"
              iconCssController="iconCssController"
              className="primaryBackGroundBlueColor p-4"
              titleCssController="titleCssController primaryTextWhiteColor"
              contentCssController=" contentCssController"
              content="To become an African hub in providing knowledge and consultancy service in the field of aviation, hospitality and tourism, and also ensure to provide the best, updated and relevant knowledge tour students so that they are competitive on the world job market. "
            />
          </div>
          <div className="cards__content-container col-12 col-md-6  ">
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
          <div className="cards__content-container col-12 col-md-6 ">
            <SimpleCard
              title="Team of consultants"
              icon={<MdViewInAr />}
              iconContainer="iconContainer"
              iconCssController="iconCssController"
              className="primaryBackGroundBlueColor p-4"
              titleCssController="titleCssController primaryTextWhiteColor"
              contentCssController=" contentCssController"
              content="TIMTOM Aviation consultancy has many experts in various functions of management particularly in Training, planning, monitoring, evaluation of programs and projects, research and Human resources management. The firm has got partners and part time consultants of high professional qualifications, most of them are lecturers at the universities in Rwanda and abroad. Our team of consultants have got very rich and heavy experiences obtained from various organizations, government institutions and consultancy firms, their average experience is about 12 years of experience, their major areas of experience is, Research, planning, monitoring and evaluation, organization reform, restructuring, Human Resources management, policy and procedure formulation, and other areas of management.."
            />
          </div>
        </div>
      </div>

      <div
        className="awardContentContainer text-center mx-5 "
        style={{ marginTop: "2rem" }}
      >
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
