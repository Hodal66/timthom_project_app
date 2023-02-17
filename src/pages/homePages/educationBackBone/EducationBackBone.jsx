import React from "react";
import "./education.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";
function EducationBackBone() {
  return (
    <div className="education___container primaryTextWhiteColor text-center">
      <div className="contentContainer justify-content-center ">
        <p className="display-6 primaryTextWhiteColor">
          BEST EDUCATION COMMUNITY
        </p>
        <h1 className="display-6 display-md-4 py-4 display-lg-2 px-2">
          Education Is The Backbone Of a Nation Expansion Of Idea
        </h1>
      </div>
      <div className="my-4 EducationButtonContainer">
        <div className="emptRwo"></div>
        <div>
          <ButtonComponent
            text={"JOIN WITH US"}
            className={"primaryBackGroundOrangeColor py-2 px-4"}
            icon={<MdOutlineArrowRightAlt />}
          />{" "}
        </div>
        <div>
          <ButtonComponent
            text={"READ MORE"}
            className={
              "primaryBackGroundWhiteColor primaryTextBlueColor py-2 px-4"
            }
            icon={<MdOutlineArrowRightAlt />}
          />
        </div>
        <div className="emptRwo"></div>
      </div>
    </div>
  );
}

export default EducationBackBone;
