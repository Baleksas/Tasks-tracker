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
        <div>Here will be presented Instructions for the application.</div>
        <div>To be continued...</div>
      </motion.div>
    </motion.div>
  );
};

export default Instructions;
