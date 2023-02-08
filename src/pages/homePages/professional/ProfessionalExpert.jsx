import React from "react";
import professionalAsideImage from "../../../assets/images/course9.jpg";
import ProgressController from "./ProgressController";
import "./profession.css";
function ProfessionalExpert() {
  return (
    <div className="professionalContentContainer position-absolute w-100  mx-auto primaryBackGroundBlueColor container-fluid primaryTextWhiteColor row">
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
  );
}

export default ProfessionalExpert;
