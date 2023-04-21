import React from "react";
import professionalAsideImage from "../../../assets/slideImages/M.jpg";
import ProgressController from "./ProgressController";
import "./profession.css";
function ProfessionalExpert() {
  return (
    <div className="professionalContentContainer position-absolute w-100 primaryBackGroundBlueColor container-fluid primaryTextBlackColor">
      <div className="profetionContent px-2 px-md-2">
        <div className="imageContainerContent">
          <img
            src={professionalAsideImage}
            alt="professionalAsideImage"
            className="img-fluid "
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className=" primaryBackGroundBlueColor p-3">
          <ProgressController />
        </div>
      </div>
    </div>
  );
}

export default ProfessionalExpert;
