import React from "react";
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
        <Goal text={goal.text} />
      ))}
    </motion.div>
  );
};

export default Review;
