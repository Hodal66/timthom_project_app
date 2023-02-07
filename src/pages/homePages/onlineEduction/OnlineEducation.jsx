import React from "react";
import { FaCertificate } from "react-icons/fa";
import { TbBrandTripadvisor } from "react-icons/tb";
import "./onlineEducation.css";
import VideoContent from "../../../assets/videos/redeptionVideo.mp4";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";
function OnlineEducation() {
  return (
    <div className="container-fluid OnineEducationContainer">
      <div className="leftContentSide mx-5">
        <h1 className="py-5">Let’s See Online Education</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo invenw tore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <div className="iconsContainer">
          <div className="experAdvisor py-2">
            <div className="myIcon">
              <TbBrandTripadvisor
                style={{ fontSize: "4rem" }}
                className="icon"
              />
              <div>
                <h5>Expert Advisors</h5>
                <p>Sedut perspiciatis unde omn iste natus error sites</p>
              </div>
            </div>
          </div>
          <div className="getCertificate py-2">
            <div className="myIcon">
              <FaCertificate style={{ fontSize: "4rem" }} className="icon" />
              <div>
                <h5>Get Certifications</h5>
                <p>Sedut perspiciatis unde omn iste natus error sites</p>
              </div>
            </div>
          </div>
        </div>
        <div className="btn py-4">
          <ButtonComponent
            text="REGISTRATION NOW"
            className={`primaryBackGroundOrangeColor primaryTextWhiteColor`}
          />
        </div>
      </div>
      <div className="rightContentSide mx-5">
        <video autoPlay muted type="video/mp4" style={{ width: "100%" }}>
          <source src={VideoContent} />
        </video>
      </div>
    </div>
  );
}
export default OnlineEducation;
