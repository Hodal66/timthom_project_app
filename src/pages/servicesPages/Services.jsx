import React, { useEffect, useState } from "react";
import HeaderPageComponent from "../../components/headerPages/HeaderPageComponent";
import { MdArrowForward } from "react-icons/md";
// import { allUpcammingCourses } from "../../database/courses";
import ButtonComponent from "../../components/Buttons/ButtonComponent";
import StartControl from "../homePages/upcomingCourses/StartControl";
import { HotelCourses } from "../../database/courses";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import "./services__page.css";
import Hotel from "./Lessons/Hotel";
import Aviation from "./Lessons/Aviation";
import Ict from "./Lessons/Ict";
import VisaAssistance from "./Lessons/VisaAssistance";
import axios from "axios";

function Services() {
  const [allData, setAllData] = useState([]);
  const [allContent, setAllContent] = useState(true);
  const [hotelContent, setHotelContent] = useState(false);
  const [aviation, setAviation] = useState(false);
  const [ictCourses, setIctCourses] = useState(false);
  const [visAssistance, setVisAssistance] = useState(false);

  // Getting Data from database

  const getAllServices = async () => {
    const { data } = await axios.get(
      "http://localhost:3004/allUpcammingCourses"
    );
    setAllData(data);
  };
  useEffect(() => {
    getAllServices();
  }, [allData]);

  const AllCoursesMngt = () => {
    setAllContent(true);
    setAviation(false);
    setIctCourses(false);
    setHotelContent(false);
    setVisAssistance(false);
  };
  const AviationLinkMng = () => {
    setAllContent(false);
    setAviation(true);
    setIctCourses(false);
    setHotelContent(false);
    setVisAssistance(false);
  };

  const HotelsLinkMng = () => {
    setAllContent(false);
    setAviation(false);
    setIctCourses(false);
    setHotelContent(true);
    setVisAssistance(false);
  };

  const AllIctCourses = () => {
    setAllContent(false);
    setAviation(false);
    setIctCourses(true);
    setHotelContent(false);
    setVisAssistance(false);
  };
  const VisaAssistanceMngt = () => {
    setAllContent(false);
    setAviation(false);
    setIctCourses(false);
    setHotelContent(false);
    setVisAssistance(true);
  };

  return (
    <div
      className="primaryBackGroundWhiteColor main__services_-container"
      style={{ width: "100vw", height: "100vh" }}
    >
      <HeaderPageComponent
        title="Our Services"
        prevLink="/"
        nextLink=""
        prevLinkText="Home"
        nextLinkText="Services"
      />

      <div className="  searchContent py-5">
        <div className="searchContainer ">
          <ul>
            <li>
              <button onClick={() => AllCoursesMngt(true)}>All</button>
            </li>
            <li>
              <button onClick={() => VisaAssistanceMngt()}>Visa</button>
            </li>
            <li>
              <button onClick={() => AviationLinkMng()}>Aviation</button>
            </li>
            <li>
              <button onClick={() => HotelsLinkMng()}>Hotels</button>
            </li>
            <li>
              <button onClick={() => AllIctCourses()}>ICT</button>
            </li>
            <li></li>
          </ul>
        </div>
      </div>

      {allContent && (
        <div className=" row p-5 courseCardContainer">
          {allData &&
            allData.map((items, id) => {
              return (
                <div key={id} className="">
                  <div className="card secondaryBackGroundWhiteColor">
                    <img
                      src={items.courseImage}
                      alt={items.altImage}
                      className="img-fluid card-img-top"
                      style={{ width: "100%", height: "30vh" }}
                    />
                    <div className="priceAndAproval p-4 row ">
                      {items.lessonDetails.map((lessonDetail, index) => {
                        return (
                          <div className="col" key={index}>
                            <ButtonComponent
                              text={`$${lessonDetail.money}`}
                              className="secondaryBackGroundBlueColor secondaryTextWhiteColor btn-sm px-2"
                            />
                          </div>
                        );
                      })}

                      <div className="col">
                        <StartControl />
                      </div>
                      <div className="px-4">
                        <h4 className="text-body  py-2 text-capitalize">
                          {items.titleInShortName}
                        </h4>
                        {items.teacher.map((teacherDetail, teacherId) => {
                          return (
                            <p className="" key={teacherId}>
                              Lecture
                              <span className="secondaryTextBlueColor px-2">
                                {teacherDetail.position}
                              </span>{" "}
                              in{" "}
                              <span className="primaryTextOrangeColor px-2">
                                {teacherDetail.professionalism}
                              </span>
                            </p>
                          );
                        })}

                        <p className="">{items.Context}</p>
                      </div>
                      <Link to={`/service_details/${items.id}`}>
                        <ButtonComponent
                          text="LEARN MORE"
                          className="primaryBackGroundBlueColor primaryTextWhiteColor m-4"
                          icon={<MdArrowForward />}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      {/* {hotelContent && <Hotel />}
      {aviation && <Aviation />}
      {ictCourses && <Ict />}
      {visAssistance && <VisaAssistance />} */}

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Services;
