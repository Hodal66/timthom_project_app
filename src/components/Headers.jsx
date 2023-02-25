import React from "react";
import NavBar from "./navbar/NavBar";

import NavigationBar from "./navigationBar/NavigationBar";

function Headers() {
  return (
    <div className="fixed-top">
      <NavigationBar />
      <NavBar />
    </div>
  );
}

export default Headers;
