import React, { useState } from "react";
import { pageTransition } from "../Styles/Transitions";
import { AnimatePresence, motion } from "framer-motion";
import ReviewGoal from "./Reviewgoal";
import { container, item } from "../Styles/Transitions";
import { Button } from "@material-ui/core";
import Goal from "../components/Goals/Goal";

const Review = ({ doneGoals }) => {
  const [term, setTerm] = useState("day");

  return (
    <motion.div
      exit="out"
      animate="in"
      initial="initial"
      variants={pageTransition}
      className="container"
    >
      <motion.div className="goals-container">
        <motion.div
          className="goals-box"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="goals-top">
            <ul>
              <motion.li variants={item}>
                <Button
                  onClick={() => setTerm("day")}
                  size="large"
                  variant="outlined"
                  color="primary"
                >
                  Day
                </Button>
              </motion.li>

              <motion.li variants={item}>
                <Button
                  onClick={() => setTerm("week")}
                  size="large"
                  variant="outlined"
                  color="primary"
                >
                  Week
                </Button>
              </motion.li>

              <motion.li variants={item}>
                <Button
                  onClick={() => setTerm("month")}
                  size="large"
                  variant="outlined"
                  color="primary"
                >
                  Month
                </Button>
              </motion.li>
            </ul>
          </div>
          {doneGoals.length > 0 ? (
            <table className="review-items">
              <tr>
                <th>Goal</th>
                <th>Paused times</th>
                <th>Achieved in</th>
              </tr>

              {doneGoals
                .filter((goal) => goal.time == term)
                .map((goal) => (
                  <ReviewGoal goal={goal} key={goal.id} />
                ))}
            </table>
          ) : (
            <div className="no__goals">
              This is a review page. You can see your results and reflect on
              them!
              <br />
              Now go and make some goals!
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Review;
