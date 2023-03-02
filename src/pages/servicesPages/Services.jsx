import React, { useState } from "react";
import HeaderPageComponent from "../../components/headerPages/HeaderPageComponent";
import Footer from "../../components/footer/Footer";
import { allUpcammingCourses } from "../../database/CoursesTest";
import "./services__page.css";
import AllLessons from "./Lessons/AllLessons";
import { motion } from "framer-motion";

function Services() {
  const [allData, setAllData] = useState(allUpcammingCourses);

  const [data, setData] = useState(allUpcammingCourses);

  const handleCategoriesSelection = (category) => {
    const content =
      category == "all"
        ? allData
        : allData.filter((course) => course.category == category);
    setData(content);
  };

  return (
    <motion.div
      className="primaryBackGroundWhiteColor main__services_-container"
      style={{ width: "100vw", height: "100vh" }}
      initial={{ width: "0vw" }}
      animate={{ width: "100vw" }}
      exit={{
        x: window.innerWidth,
        transition: {
          duration: 0.2,
        },
      }}
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
              <button onClick={() => handleCategoriesSelection("all")}>
                All
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoriesSelection("visa")}>
                Visa
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoriesSelection("aviation")}>
                Aviation
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoriesSelection("hotel")}>
                Hotels
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoriesSelection("ict")}>
                ICT
              </button>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
      <AllLessons allData={data} />
      <footer>
        <Footer />
      </footer>
    </motion.div>
  );
}

export default Services;
