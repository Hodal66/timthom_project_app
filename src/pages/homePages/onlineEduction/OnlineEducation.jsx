import React from "react";
import { FaCertificate } from "react-icons/fa";
import { TbBrandTripadvisor } from "react-icons/tb";
import "./onlineEducation.css";
import VideoContent from "../../../assets/videos/yt5s.com-Parts of an Aircraft in 2 minutes _ Airbus A320 NEO _ Aviation Notes.mp4";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";
import WaveLine from "../../../components/WaveLine/WaveLine";
function OnlineEducation() {
  return (
    <div className="container-fluid OnineEducationContainer mt-5">
      <div className="leftContentSide mx-5">
        <WaveLine className="mt-2" />
        <h1 className="primaryTitle ">
          We have an experts and we provide certicates
        </h1>
        <p>
          Online aviation courses provide a convenient and flexible way for
          individuals to learn about various aspects of aviation, including
          aviation management, aviation safety, aviation operations, and more.
          These courses can be beneficial for those who want to pursue a career
          in aviation, advance in their current aviation-related career, or
          simply have an interest in the field.
        </p>
        <div className="iconsContainer">
          <div className="experAdvisor py-2">
            <div className="myIcon">
              <div className="icon">
                <TbBrandTripadvisor />
              </div>
              <div>
                <h5>Expert Advisors</h5>
                <p>
                  As We are expert in aviation, we can provide advice and
                  guidance to organizations and individuals in the industry
                </p>
              </div>
            </div>
          </div>
          <div className="getCertificate py-2">
            <div className="myIcon">
              <div className="icon">
                <FaCertificate />
              </div>
              <div>
                <h5>Get Certifications</h5>
                <p>
                  We provide a certificate, we recognize and validate the
                  recipient's hard work and achievements, and to provide them
                  with a credential that they can use to advance their career
                  and demonstrate their expertise in a particular field.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <ButtonComponent text="REGISTRATION NOW" className="btnBlue" />
        </div>
      </div>
      <div className="rightContentSide mx-5 ">
        <video autoPlay muted type="video/mp4" style={{ width: "100%" }}>
          <source src={VideoContent} />
        </video>
      </div>
    </div>
  );
}
export default OnlineEducation;
