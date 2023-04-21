import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import myImage from "./Images";
import "./test.css";
function Test() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    console.log("My width is : ", carousel);
  }, []);
  return (
    <div className="images--container">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="carousel-inner"
        >
          {myImage.map((image) => {
            return (
              <motion.div className="item">
                <img src={image} alt="myImages" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Test;
