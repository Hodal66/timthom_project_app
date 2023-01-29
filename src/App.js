import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHomeSlidePage from "./components/homeCards/MainHomeSlidePage";
import Headers from "./components/Headers";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route exact path="/" element={<MainHomeSlidePage />} />
          {/* <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="notFound" element={<NotFound />} />
          <Route path="plans" element={<Plans />} />
          <Route path="trainers" element={<Trainers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
