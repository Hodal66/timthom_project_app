import React from "react";
import { MdArrowForward, MdOutlinePlayLesson } from "react-icons/md";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";
import VideoContent from "../../../assets/videos/redeptionVideo.mp4";
import "./latestVideo.css";
function OurLatestVideo() {
  return (
    <div className="video___container thirdBackGroundBlueColor py-3 px-2 secondaryTextWhiteColor">
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
        <video autoPlay muted type="video/mp4" style={{ width: "100%" }}>
          <source src={VideoContent} />
        </video>
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
