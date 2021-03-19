import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Nav from "./components/Nav";
import Timers from "./components/Timers";
import Review from "./components/Review";
import Goals from "./components/Goals/Goals";
import About from "./components/About";
import Contact from "./components/Contact/Contact";
import { AnimatePresence, motion } from "framer-motion";
import { getGoals } from "./actions/goals";
const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [doneGoals, setDoneGoals] = useState([]);

  useEffect(() => {
    dispatch(getGoals());
  }, [dispatch]);
  const didGoal = (goal) => {
    setDoneGoals([...doneGoals, goal]);
  };
  return (
    <>
      <div id="backgroundLayer"></div>
      <h1 className="Habit">Habit</h1>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch exitBeforeEnter location={location} key={location.pathname}>
          <Route exact path="/" component={Timers}></Route>
          <Route path="/goals">
            <Goals didGoal={didGoal} />{" "}
          </Route>
          <Route path="/about" component={About}></Route>
          <Route path="/review">
            <Review doneGoals={doneGoals} />
          </Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
