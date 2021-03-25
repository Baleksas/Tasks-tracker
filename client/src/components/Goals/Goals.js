import { motion } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import { pageTransition } from "../../Styles/Transitions";
import { container, item } from "../../Styles/Transitions";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";
import Goal from "./Goal";
import {
  Button,
  FormControl,
  Input,
  FormHelperText,
  InputLabel,
  TextField,
} from "@material-ui/core";
const Goals = ({ countRef, didGoal, goals, setGoals, deleteGoal }) => {
  const [term, setTerm] = useState("day");
  const [text, setText] = useState("");
  const [goalData, setGoalData] = useState({
    text: "",
    priority: true,
    time: "day",
  });
  useEffect(() => {
    setGoalData({ ...goalData, time: term });
  }, [term]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoal = {
      text: { text }.text,
      time: { term }.term,
      priority: false,
      id: uuidv4(),
    };
    setGoals([...goals, newGoal]);
    setText("");
  };
  const priorityUp = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              priority: !goal.priority,
            }
          : goal
      )
    );
  };

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

          <div className="goals-items">
            {goals
              .filter((goal) => goal.time == term)
              .map((goal) => (
                <Goal
                  countRef={countRef}
                  didGoal={didGoal}
                  deleteGoal={deleteGoal}
                  priorityUp={priorityUp}
                  goal={goal}
                  key={goal.id}
                />
              ))}
          </div>
          <form noValidate className="add-goal-form" onSubmit={handleSubmit}>
            <TextField
              name="goal"
              variant="filled"
              label="Goal"
              fullWidth
              value={text}
              onChange={useCallback(
                (e) => {
                  setText(e.target.value);
                },
                [text]
              )}
            />

            <Button
              className="add-goal-button"
              variant="outlined"
              color="primary"
              size="small"
              type="submit"
            >
              <AddIcon />
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Goals;
