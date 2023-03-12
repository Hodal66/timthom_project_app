import React from "react";
import "./modal.css";
// import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backDropVariant = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};
function ModalComponent({ showModal }) {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="backdrop"
          varients={backDropVariant}
          initial="hidden"
          animate="visible"
        >
          <h1>Hello This is A Modal</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ModalComponent;
