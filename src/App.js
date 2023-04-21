import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Headers from "./components/Headers";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePages/HomePage";
import "./index.css";
import Services from "./pages/servicesPages/Services";
import Service from "./pages/servicesPages/Service";

import AboutUs from "./pages/aboutPages/AboutUs";
import ContactUs from "./pages/contactPages/ContactUs";
import ErrorPage from "./pages/errorPages/ErrorPage";
import Training from "./pages/training/TrainingPage";
import Gallery from "./pages/galllery/Gallery";
import RiseLoader from "react-spinners/RiseLoader";
import "./index.css";
import ModalComponent from "./components/modal/ModalComponent";

function App() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <div className="loaderSpinner">
      <div className="App">
        {loading ? (
          <RiseLoader
            color="#fff"
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier="2"
          />
        ) : (
          <BrowserRouter>
            <ModalComponent showModal={showModal} setShowModal={setShowModal} />

            <Headers />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/about_us" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service_details/:serviceId" element={<Service />} />
              <Route path="/contact_us" element={<ContactUs />} />
              <Route path="/training" element={<Training />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </div>
  );
}

export default App;
