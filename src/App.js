import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Headers from "./components/Headers";

import RiseLoader from "react-spinners/RiseLoader";
import "./index.css";
import AllAnimatedRoutes from "./AllAnimatedRoutes";
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
            <AllAnimatedRoutes />
          </BrowserRouter>
        )}
      </div>
    </div>
  );
}

export default App;
