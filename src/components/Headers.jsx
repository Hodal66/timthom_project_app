import React from "react";
import BodyNavBar from "./navigationBar/BodyNavBar";
import NavigationBar from "./navigationBar/NavigationBar";

function Headers() {
  return (
    <div className="fixed-top">
      <NavigationBar />
      <BodyNavBar />
    </div>
  );
}

export default Headers;
