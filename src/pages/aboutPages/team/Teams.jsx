import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { timtomTeam } from "../../../database/Team";
import Team from "./Team";
function Teams() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

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
      <header>
        <Carousel responsive={responsive}>{teamTomContent}</Carousel>;
      </header>
    </div>
  );
}

export default Teams;
