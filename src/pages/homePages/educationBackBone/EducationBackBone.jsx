import React from "react";
import "./education.css";
import backGroundImage from "../../../assets/images/consultancy.jpeg";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";
function EducationBackBone() {
  return (
    <div className="education___container primaryTextWhiteColor">
      <img
        src={backGroundImage}
        alt="backgroundImage"
        style={{ width: "100%", height: "100%", opacity: "0.4" }}
        className="position-relative text-center"
      />
      <div
        className="contentContainer  text-center justify-content-center mt-5 accordion-collapse position-relative "
        style={{ paddingTop: "10rem" }}
      >
        <p className="display-6 primaryTextBlueColor">
          BEST EDUCATION COMMUNITY
        </p>
        <h1 className="display-6 display-md-4 display-lg-2 px-2">
          Education Is The Backbone Of a Nation Expansion Of Idea
        </h1>
      </div>
      <div className="bnn-group text-center my-4 ">
        <div className="btn">
          <ButtonComponent
            text={"JOIN WITH US"}
            className={"primaryBackGroundOrangeColor p-2 px-4"}
            icon={<MdOutlineArrowRightAlt />}
          />{" "}
        </div>
        <div className="btn">
          <ButtonComponent
            text={"READ MORE"}
            className={
              "primaryBackGroundWhiteColor primaryTextBlueColor p-2 px-4"
            }
            icon={<MdOutlineArrowRightAlt />}
          />
        </div>
      </div>
    </div>
  );
}

export default EducationBackBone;
