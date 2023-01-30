import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHomeSlidePage from "./components/homeCards/MainHomeSlidePage";
import Headers from "./components/Headers";
import AboutUs from "./pages/AboutUs";
import ErrorPage from "./pages/ErrorPage";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import RiseLoader from "react-spinners/RiseLoader";
import "./index.css";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 5000);
  }, []);
  return (
    <div className="loaderSpinner">
      <div className="App">
        {loading ? (
          <RiseLoader
            color="#171E43"
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
              <Route exact path="/" element={<MainHomeSlidePage />} />
              <Route path="about_us" element={<AboutUs />} />
              <Route path="services" element={<Services />} />
              <Route path="contact_us" element={<ContactUs />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            {/* <Footer /> */}
          </BrowserRouter>
        )}
      </div>
    </div>
  );
}

export default App;
