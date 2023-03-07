import React from "react";
import Advisor from "./Advisor";
import "react-multi-carousel/lib/styles.css";
import "./advisor.css";
import { AdvisorData } from "../../../database/AdvisorData";
function Advisors() {
  const advisorContent = AdvisorData.map((advisorDetails) => (
    <div key={advisorDetails.id}>
      <Advisor
        advisorName={advisorDetails.name}
        advisorImage={advisorDetails.image}
        position={advisorDetails.position}
        facebookLink={advisorDetails.facebook}
        whatsapLink={advisorDetails.whatsup}
        instagramLink={advisorDetails.instagram}
        youTibeLink={advisorDetails.youtub}
        twitterLink={advisorDetails.twitter}
      />
    </div>
  ));

  return (
    <div className="overflow-hidden" style={{ width: "100%" }}>
      <header className="advisor__Container">{advisorContent}</header>
    </div>
  );
}

export default Advisors;
