import React from "react";
import "react-multi-carousel/lib/styles.css";
import { timtomTeam } from "../../../database/Team";
import Team from "./Team";
function Teams() {
  const teamTomContent = timtomTeam.map((teamTomDetails) => (
    <div key={teamTomDetails.id}>
      <Team
        teamTomName={teamTomDetails.name}
        teamTomImage={teamTomDetails.image}
        position={teamTomDetails.positon}
        facebookLink={teamTomDetails.facebook}
        whatsapLink={teamTomDetails.whatsup}
        instagramLink={teamTomDetails.instagram}
        youTibeLink={teamTomDetails.youtub}
        twitterLink={teamTomDetails.twitter}
      />
    </div>
  ));

  return (
    <div className="overflow-hidden" style={{ width: "100%" }}>
      <div className=".advisor__Container">{teamTomContent}</div>
    </div>
  );
}

export default Teams;
