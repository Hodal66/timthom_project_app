import React from "react";
import HeaderPageComponent from "../../components/headerPages/HeaderPageComponent";
import FindYourCourse from "../homePages/findYourCourse/FindYourCourse";
import WhatWeOffer from "../homePages/whatWeOffer/WhatWeOffer";

function ContactUs() {
  return (
    <div>
      <HeaderPageComponent
        title="Contact Us"
        nextLink=""
        prevLink="/"
        prevLinkText="Home"
        nextLinkText="Contact Us"
      />

      <FindYourCourse className="findCourses bg-danger" />
      <WhatWeOffer className="findCourses" />
    </div>
  );
}

export default ContactUs;
