import { motion } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import { pageTransition } from "../../Styles/Transitions";
import { container, item } from "../../Styles/Transitions";
import { Link, Switch } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import Goal from "./Goal";
import {
  Button,
  FormControl,
  Input,
  FormHelperText,
  InputLabel,
  TextField,
} from "@material-ui/core";
import { createGoal } from "../../actions/goals";
const Goals = ({ didGoal }) => {
  const dispatch = useDispatch();
  const goals_redux = useSelector((state) => state.goals);
  const [goals, setGoals] = useState([]);
  const [term, setTerm] = useState("day");
  const [text, setText] = useState("");
  const [goalData, setGoalData] = useState({
    text: "",
    priority: 3,
    time: "day",
  });
  useEffect(() => {
    setGoalData({ ...goalData, time: term });
  }, [term]);
  //depending on term, goals will be filtered and shown in the list
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal(goalData));
    // const newGoal = {
    //   text: { text }.text,
    //   time: { term }.term,
    //   id: uuidv4(),
    // };

    // setGoals([...goals, newGoal]);
    // setText("");
  };
  // const deleteGoal = (id) => {
  //   setGoals(goals.filter((goal) => goal.id !== id));
  // };
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
            {goals_redux
              .filter((goal) => goal.time == term)
              .map((goal) => (
                <Goal didGoal={didGoal} goal={goal} key={goal._id} />
              ))}
          </div>
          <form noValidate className="add-goal-form" onSubmit={handleSubmit}>
            {/* React textfield */}
            {/* <TextField
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
            /> */}
            {/* Redux textfield */}
            <TextField
              name="text"
              variant="filled"
              label="Goal"
              fullWidth
              value={goalData.text}
              onChange={(e) =>
                setGoalData({ ...goalData, text: e.target.value })
              }
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
