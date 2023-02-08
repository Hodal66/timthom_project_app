import React from "react";
import HeaderPageComponent from "../../components/headerPages/HeaderPageComponent";

function Service() {
  return (
    <div>
      <HeaderPageComponent
        title="Service"
        prevLink="/services"
        prevLinkText="Services"
        nextLink=""
        nextLinkText="Service_detail"
      />
    </div>
  );
}

export default Service;
