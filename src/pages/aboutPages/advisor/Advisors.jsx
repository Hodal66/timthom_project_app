import React from "react";
import Advisor from "./Advisor";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./advisor.css";
import { AdvisorData } from "../../../database/AdvisorData";
function Advisors() {
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

  const advisorContent = AdvisorData.map((advisorDetails) => (
    <Advisor
      advisorName={advisorDetails.name}
      advisorImage={advisorDetails.image}
      facebookLink={advisorDetails.facebook}
      whatsapLink={advisorDetails.whatsup}
      instagramLink={advisorDetails.instagram}
      youTibeLink={advisorDetails.youtub}
      twitterLink={advisorDetails.twitter}
    />
  ));

  return (
    <div className="overflow-hidden" style={{ width: "100%" }}>
      <header>
        <h1 className="py-4">Meet Our Expert Advisors</h1>
        <Carousel responsive={responsive}>{advisorContent}</Carousel>;
      </header>
    </div>
  );
}

export default Advisors;
