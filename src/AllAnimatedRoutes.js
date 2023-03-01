// import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/homePages/HomePage";
import "./index.css";
import Services from "./pages/servicesPages/Services";
import AboutUs from "./pages/aboutPages/AboutUs";
import ContactUs from "./pages/contactPages/ContactUs";
import ErrorPage from "./pages/errorPages/ErrorPage";
import Service from "./pages/servicesPages/Service";
import { AnimatePresence } from "framer-motion";
function AllAnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service_details/:serviceId" element={<Service />} />
        <Route path="/training" element={<Services />} />
        <Route path="/training_details/:trainingId" element={<Service />} />
        <Route path="/air-ticheting" element={<Services />} />
        <Route
          path="/air-ticheting_details/:air-tichetingId"
          element={<Service />}
        />
        <Route path="/consultancy" element={<Services />} />
        <Route
          path="/consultancy_details/:consultancyId"
          element={<Service />}
        />
        <Route path="/visa-application" element={<Services />} />
        <Route
          path="/visa-application_details/:visa-applicationId"
          element={<Service />}
        />
        <Route path="/hotel-reservation" element={<Services />} />
        <Route
          path="/hotel-reservation_details/:hotel-reservationId"
          element={<Service />}
        />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AllAnimatedRoutes;
