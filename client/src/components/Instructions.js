import React from "react";
import { container, item } from "../Styles/Transitions";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition } from "../Styles/Transitions";
import Logo from "../../src/images/Logo.svg";
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
        <div className="intro-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="intro-info">
          <span>This is a prototype of productivity application.</span>
          <br />
          <span>
            The application is not connected to database, nor it has local
            memory.
          </span>
          <br />
          <span>
            This project was done to demonstrate Front-End development skills.
          </span>
        </div>
        <div className="intro-instructions">
          <h2>Goals & Review</h2>
          <ul>
            <li>
              Goals section is dedicated to create goals for day/week/month
            </li>
            <li>You can navigate through it by pressing relevant button</li>
            <li>
              After completing the goal, it will appear in{" "}
              <a href="/review">Review</a> section with relevant information
              about the goal
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Instructions;
