import React from "react";
import { MdGroupWork, MdViewInAr, MdVpnLock } from "react-icons/md";
import SimpleCard from "../../../components/Cards/SimpleCard";
import "./aboutUsCards.css";
function AboutUsCards() {
  return (
    <div className="cards__-container my-5" style={{ width: "100%" }}>
      <div className="allCards__container">
        <div className="all____cards__content-container">
          <aside className="">
            <div className="cards__content-container">
              <SimpleCard
                title="COMPANY DESCRIPTION"
                icon={<MdViewInAr />}
                iconContainer="iconContainer"
                iconCssController="iconCssController"
                className="primaryBackGroundBlueColor primaryTextBlackColor cards__content-container-item p-4"
                contentCssController=" contentCssController"
                content="Timtom Aviation was established in 2017 with major focus on training, consultancy and offering Air ticket services, and yet we are offering trainings on courses related to Airport and Airline Management, Travel and Tourism courses, we award international professional certificates and diplomas in partnership with ICAO, IATA and SACCA Institute of Freight and Tourism. A large number of students have completed with IATA, IACO and local certificates through TIMTOM Aviation. "
                paragraph1="TIMTOM AVIATION also offers other services related to hospitality and tourism, these include; Air ticketing,
              Admission and Visa application assistance, hotel reservations, travel insurance and international tour packages in
              partnership with vibes tourism."
                paragraph2="Furthermore, the company also offers another major service in consultancy, in the field of Project/Program
              Evaluation, Monitoring, Implementation, Learning and Evaluation, Research Studies, Training, Human Resources
              Management services like recruitment, design and how to develop job description, employment contracts,
              performance appraisal systems, performance targets, HR Strategic planning, organizational structures, operational
              manuals, process and procedures, etc."
              />
            </div>
            <div className="cards__content-container">
              <SimpleCard
                title="TEAM OF CONSULTANS"
                icon={<MdViewInAr />}
                iconContainer="iconContainer"
                iconCssController="iconCssController"
                className="primaryBackGroundBlueColor primaryTextBlackColor cards__content-container-item p-4"
                contentCssController=" contentCssController"
                content="TIMTOM Aviation consultancy has many experts in various functions of management particularly in Training, planning, monitoring, evaluation of programs and projects, research and Human resources management. The firm has got partners and part time consultants of high professional qualifications, most of them are lecturers at the universities in Rwanda and abroad. Our team of consultants have got very rich and heavy experiences obtained from various organizations, government institutions and consultancy firms, their average experience is about 12 years of experience, their major areas of experience is, Research, planning, monitoring and evaluation, organization reform, restructuring, Human Resources management, policy and procedure formulation, and other areas of management.."
              />
            </div>
          </aside>
          <aside>
            <div className="cards__content-container ">
              <SimpleCard
                title="OUR MISSION"
                icon={<MdGroupWork />}
                iconContainer="iconContainer"
                iconCssController="iconCssController"
                className="primaryBackGroundBlueColor primaryTextBlackColor cards__content-container-item p-4"
                contentCssController=" contentCssController"
                content="To become an African hub in providing knowledge and consultancy service in the field of aviation, hospitality and tourism, and also ensure to provide the best, updated and relevant knowledge to our students so that they are competitive on the world job market. "
              />
            </div>
            <div className="cards__content-container">
              <SimpleCard
                title="OUR VISION"
                icon={<MdVpnLock />}
                iconContainer="iconContainer"
                iconCssController="iconCssController"
                className="primaryBackGroundBlueColor primaryTextBlackColor cards__content-container-item p-4"
                contentCssController=" contentCssController"
                content="To establish international first class aviation institute in Africa that awards high levels of academic qualification to students all over the world and ensure to produce very competitive students on the world job market."
                paragraph1="a.	To provide the best knowledge and practical work experience to our students so that they are competent enough on the job market."
                paragraph2="b.	To empower, develop and train human resources from aviation and related companies and be able to perform better on their jobs. "
                paragraph3="c.	To provide the best consultancy service in aviation tourism and hospitality for Rwandese and Africa at large."
                paragraph4="d.	Assist students from other schools to complete their internship programs thoroughly and productively."
                paragraph5="e. internship program, we equip students with enough practical knowledge and skills."
              />
            </div>
          </aside>
        </div>
      </div>

      {/* <div
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
      </div> */}
    </div>
  );
}

export default AboutUsCards;
