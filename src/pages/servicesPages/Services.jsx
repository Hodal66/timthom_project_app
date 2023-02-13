import React, { useState } from "react";
import HeaderPageComponent from "../../components/headerPages/HeaderPageComponent";
import "./services__page.css";
import { MdArrowForward } from "react-icons/md";
import { allUpcammingCourses } from "../../database/courses";
import ButtonComponent from "../../components/Buttons/ButtonComponent";
import StartControl from "../homePages/upcomingCourses/StartControl";

import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
function Services() {
  const [allData, setAllData] = useState(allUpcammingCourses);
  const [allContent, setAllContent] = useState(true);
  const [hotelContent, setHotelContent] = useState(false);
  const [aviation, setAviation] = useState(false);
  const [cargo, setCargo] = useState(false);
  const [business, setBusiness] = useState(false);
  const [security, setSecurity] = useState(false);

  const AviationLinkMng = () => {
    setAllContent(false);
    setAviation(false);
    setCargo(false);
    setHotelContent(false);
    setSecurity(false);
    setBusiness(true);
  };

  const HotelsLinkMng = () => {
    setAllContent(false);
    setAviation(false);
    setCargo(false);
    setHotelContent(false);
    setSecurity(false);
    setBusiness(true);
  };

  const BusinessLinkMng = () => {
    setAllContent(false);
    setAviation(false);
    setCargo(false);
    setHotelContent(false);
    setSecurity(false);
    setBusiness(true);
  };

  const VisittingLinkMng = () => {
    setAllContent(false);
    setAviation(false);
    setCargo(false);
    setHotelContent(false);
    setSecurity(false);
    setBusiness(true);
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
              <button onClick={() => setAllContent(true)}>All</button>
            </li>
            <li>
              <button onClick={() => BusinessLinkMng()}>Business</button>
            </li>
            <li>
              <button onClick={() => AviationLinkMng()}>Aviation</button>
            </li>
            <li>
              <button onClick={() => HotelsLinkMng()}>Hotels</button>
            </li>
            <li>
              <button onClick={() => VisittingLinkMng()}>Visitting</button>
            </li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className=" row p-5 " id="courseCardContainer">
        {allData &&
          allData.map(
            (
              {
                courseImage,
                altImage,
                money,
                content,
                likes,
                title,
                teacher,
                lesson,
              },
              index
            ) => {
              return (
                <div key={index} className="">
                  <div className="card secondaryBackGroundWhiteColor ">
                    <img
                      src={courseImage}
                      alt={altImage}
                      className="img-fluid card-img-top"
                      style={{ width: "100%" }}
                    />
                    <div className="priceAndAproval p-4 row ">
                      <div className="col">
                        <ButtonComponent
                          text={`$${money}`}
                          className="secondaryBackGroundBlueColor secondaryTextWhiteColor btn-sm"
                          icon={<MdArrowForward />}
                        />
                      </div>
                      <div className="col">
                        <StartControl />
                      </div>
                      <div className="px-4">
                        <h4 className="text-body  py-2 text-capitalize">
                          {title}
                        </h4>

                        {teacher.map(({ position, professionalism }, index) => {
                          return (
                            <p className="" key={{ index }}>
                              Lecture
                              <span className="secondaryTextBlueColor px-2">
                                {position}
                              </span>{" "}
                              in{" "}
                              <span className="primaryTextOrangeColor px-2">
                                {professionalism}
                              </span>
                            </p>
                          );
                        })}

                        <p className="">{content}</p>
                      </div>
                      <Link to={`/service_details/${index}`}>
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
            }
          )}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Services;
