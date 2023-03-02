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
import Training from "./pages/training/TrainingPage";
function AllAnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service_details/:serviceId" element={<Service />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/training" element={<Training />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AllAnimatedRoutes;
