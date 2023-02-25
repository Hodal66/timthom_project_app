import React from "react";
import { MdArrowForward, MdOutlinePlayLesson } from "react-icons/md";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";

import "./latestVideo.css";
import VideoComponent from "./Video";
function OurLatestVideo() {
  return (
    <div className="video___container thirdBackGroundBlueColor py-3 px-2 secondaryTextWhiteColor text-center">
      <div className="overImageTextContainer py-4">
        <p className="videoTitle">WATCH OUR LASTEST VIDEO</p>
        <p className="py-2">Let’s Take a Small Tour From Our Campus</p>
        <ButtonComponent
          text="REGISTRATION"
          icon={<MdArrowForward />}
          className="registrationButton"
        />
      </div>
      <div className="Main__Video-container">
       <VideoComponent/>
      </div>

      <div className="rightButtonController d-none">
        <ButtonComponent
          icon={<MdOutlinePlayLesson />}
          className="VideoButtonController"
          id="IncreaseFontSize"
        />
      </div>
    </div>
  );
}

export default OurLatestVideo;
