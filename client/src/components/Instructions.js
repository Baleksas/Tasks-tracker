import React from "react";
import { container, item } from "../Styles/Transitions";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition } from "../Styles/Transitions";

const Instructions = () => {
  return (
    <motion.div
      exit="out"
      animate="in"
      initial="initial"
      variants={pageTransition}
      className="container"
    >
      <motion.div className="intro-container">
        <div>
          <span>This is a prototype of productivity application.</span>
        </div>
        <div>
          <ul></ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Instructions;
