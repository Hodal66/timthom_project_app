import React, { useState } from "react";
import HeaderPageComponent from "../../components/headerPages/HeaderPageComponent";
import Footer from "../../components/footer/Footer";
import { allUpcammingCourses } from "../../database/CoursesTest";
import "./services__page.css";
import Hotel from "./Lessons/Hotel";
import Aviation from "./Lessons/Aviation";
import Ict from "./Lessons/Ict";
import VisaAssistance from "./Lessons/VisaAssistance";
// import axios from "axios";
import AllLessons from "./Lessons/AllLessons";

function Services() {
  // const [state, setstate] = useState([]);
  const [allData, setAllData] = useState(allUpcammingCourses);
  const [allContent, setAllContent] = useState(true);
  const [hotelContent, setHotelContent] = useState(false);
  const [aviation, setAviation] = useState(false);
  const [ictCourses, setIctCourses] = useState(false);
  const [visAssistance, setVisAssistance] = useState(false);

  // Getting Data from database

  // const getAllServices = async () => {
  //   const { data } = await axios.get(
  //     "http://localhost:3004/allUpcammingCourses"
  //   );
  //   setAllData(data);
  // };
  // useEffect(() => {
  //   getAllServices();
  // }, [state]);

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
    let neededContent;
    let preDefinedHotelRelatedContents = [
      "AIRLINE AND AIRPORT",
      "TRAVEL AND TOURISM MANAGEMENT",
    ];
    console.log("Nijyewe Mukanzeho:: ");
    let obtainedContent = [];
    // const newDataContent = allData.map((item) => {
    //   neededContent = item.titleInShortName;
    //   for (let i = 0; i <= preDefinedHotelRelatedContents.length; i++) {
    //     if (neededContent.includes(preDefinedHotelRelatedContents[i])) {
    //       setAllContent(false);
    //       setAviation(false);
    //       setIctCourses(false);
    //       setHotelContent(true);
    //       setVisAssistance(false);
    //       obtainedContent.push(preDefinedHotelRelatedContents[i]);
    //     } else {
    //       console.log("There is empty searching");
    //     }
    //   }
    // });
    console.log(obtainedContent);
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

      {allContent && <AllLessons allData={allData} />}
      {hotelContent && <Hotel allData={allData} />}
      {aviation && <Aviation allData={allData} />}
      {ictCourses && <Ict allData={allData} />}
      {visAssistance && <VisaAssistance allData={allData} />}

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Services;
