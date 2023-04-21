import React from "react";
import NavBar from "./navbar/NavBar";

import NavigationBar from "./navigationBar/NavigationBar";
// import { motion, useScroll } from "framer-motion";
function Headers() {
  // const { scrollYProgress } = useScroll();
  return (
    <div className="fixed-top">
      <NavigationBar />
      <NavBar />
      {/* <motion.div
        style={{
          scale: scrollYProgress,
          right: 0,
          left: 0,
          height: "10px",
          backgroundColor: "orange",
          transformOrigin: "0%",
        }}
      ></motion.div> */}
    </div>
  );
}

export default Headers;
