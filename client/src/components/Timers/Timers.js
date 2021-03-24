import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition } from "../../Styles/Transitions";
import Timer from "./Timer";
const Timers = ({ countRef, goals }) => {
  return (
    <motion.div
      exit="out"
      animate="in"
      initial="initial"
      variants={pageTransition}
      className="container"
    >
      {/* Goals are filtered with term=day only */}
      {goals.map((goal) => (
        <Timer countRef={countRef} key={goal.id} goal={goal} />
      ))}
    </motion.div>
  );
};

export default Timers;
