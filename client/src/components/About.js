import React from "react";
import { pageTransition } from "../Styles/Transitions";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import sodyboms from "../images/Sodyboms.png";
import Adex from "../images/Adex.png";
import TaskTimer from "../images/TaskAndTimer.png";
import { item, container } from "../Styles/Transitions";

const About = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      exit="out"
      animate="in"
      variants={pageTransition}
      className="container"
    >
      <div className="about-container">
        <motion.div
          className="grid"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="grid-itm projects">
            <motion.div
              variants={item}
              className="projects-motion-container"
              ref={constraintsRef}
            >
              <motion.div
                className="project"
                drag
                dragConstraints={constraintsRef}
              >
                <img src={sodyboms} alt="Landpage" />
                <a target="_blank" href="http://sodyboms.com/">
                  Visit
                </a>
              </motion.div>
              <motion.div
                className="project"
                drag
                dragConstraints={constraintsRef}
              >
                <img src={Adex} alt="Landpage" />
                <a
                  target="_blank"
                  href="https://mrforif.github.io/AdexDevelopments/"
                >
                  Visit
                </a>
              </motion.div>
              <motion.div
                className="project"
                drag
                dragConstraints={constraintsRef}
              >
                <img src={TaskTimer} alt="Todo" />
                <a target="_blank" href="https://todoandtimer.netlify.app">
                  Visit
                </a>
              </motion.div>
            </motion.div>
          </div>
          <motion.div variants={item} className="grid-itm name">
            <span>Aleksas Bagdonas</span>
          </motion.div>
          <motion.div variants={item} className="grid-itm location">
            <span>Newcastle Upon Tyne, UK</span>
          </motion.div>
          <motion.div variants={item} className="grid-itm education">
            <span>Computer science BSc</span>
          </motion.div>
          <motion.div variants={item} className="grid-itm university">
            <span>Newcastle University</span>
          </motion.div>
          <motion.div variants={item} className="grid-itm skills">
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>Figma</li>
            </ul>
            <ul>
              <li>React</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>NodeJS</li>
            </ul>
          </motion.div>
          <motion.div variants={item} className="grid-itm hobbies">
            <ul>
              <li>Psychological movies & books</li>
              <li>Extreme sports</li>
              <li>Cryptocurrency</li>
              <li>Stand-Up Comedy</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
