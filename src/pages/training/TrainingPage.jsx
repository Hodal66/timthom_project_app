import React, { useState } from "react";
import HeaderPageComponent from "../../components/headerPages/HeaderPageComponent";
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";
import TableContent from "./TableContent";
import TableAirline from "./TableAirline";
import "./training.css";
import WaveLine from "../../components/WaveLine/WaveLine";

function Training() {
  return (
    <motion.div
      className=" main__services_-container primaryBackGroundWhiteColor About__Us_main-container "
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
        title="Our Trainings"
        prevLink="/"
        nextLink=""
        prevLinkText="Home"
        nextLinkText="Tainings"
      />

      <section className="main________-content">
        <header>
          <h1 className="primaryTextWhiteColor">All About Training</h1>
        </header>
        <section className="primaryBackGroundWhiteColor py-2 text-center">
          <h1 className="primaryTitle"> COURSES OFFERED</h1>
          <p>
            TIMTOM AVIATION offers professional courses in short and long period
            and we award internationally recognized certificates, advanced
            certificates, diplomas and advanced diplomas. We have partnerships
            agreements with the most recognized professional organizations on
            the globe-these organizations include IATA,ICAO, SACCA Institute of
            Freight and Tourism, CISSCO Networking and many others, we are in
            the process of partnership agreement.
          </p>
          <h4>IN PARTNERSHIP WITH SACCA INSTITUTE OF FREIGHT AND TOURISM</h4>
          <h5>LOCAL CERTIFICATES OFFERED</h5>
        </section>
        <section className="py-2">
          <WaveLine className="primaryBackGroundWhiteColor text-center" />
          <h1 className="primaryTitle text-center">
            Airline and Airport Management
          </h1>

          <TableContent />
        </section>
        <section className="py-2">
          <WaveLine className="primaryBackGroundBlueColor text-center" />
          <h1 className="primaryTitle-white text-center">
            Airline and Airport Management
          </h1>
          <TableAirline />
        </section>
      </section>

      <footer>
        <Footer />
      </footer>
    </motion.div>
  );
}

export default Training;
