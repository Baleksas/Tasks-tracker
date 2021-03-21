import React, { useContext } from "react";
import { pageTransition } from "../Styles/Transitions";
import { AnimatePresence, motion } from "framer-motion";
import Goal from "./Goals/Goal";
const Review = ({ doneGoals }) => {
  return (
    <motion.div
      exit="out"
      animate="in"
      initial="initial"
      variants={pageTransition}
      className="container"
    >
      {doneGoals.map((goal) => (
        <h1>Item</h1>
      ))}
    </motion.div>
  );
};

export default Review;
