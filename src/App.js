import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headers from "./components/Headers";
import HomePage from "./pages/homePages/HomePage";
import RiseLoader from "react-spinners/RiseLoader";
import "./index.css";
import Services from "./pages/servicesPages/Services";
import AboutUs from "./pages/aboutPages/AboutUs";
import ContactUs from "./pages/contactPages/ContactUs";
import ErrorPage from "./pages/errorPages/ErrorPage";
import Service from "./pages/servicesPages/Service";
function App() {
  const [loading, setLoading] = useState(false);
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
            <Headers />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/about_us" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service_details/:serviceId" element={<Service />} />
              <Route path="/training" element={<Services />} />
              <Route
                path="/training_details/:trainingId"
                element={<Service />}
              />
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
          </BrowserRouter>
        )}
      </div>
    </div>
  );
}

export default App;
