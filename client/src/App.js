import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import React, {
  useState,
  useContext,
  useRef,
  createContext,
  useEffect,
} from "react";
import Nav from "./components/Nav";
import Timers from "./components/Timers/Timers";
import Review from "./components/Review";
import Goals from "./components/Goals/Goals";
import About from "./components/About";
import Contact from "./components/Contact/Contact";
import { AnimatePresence, motion } from "framer-motion";
const App = () => {
  const location = useLocation();
  const [doneGoals, setDoneGoals] = useState([]);
  const [goals, setGoals] = useState([]);
  const countRef = useRef(null);
  const didGoal = (goal) => {
    const newDoneGoal = { ...goal, doneIn: 5 };
    setDoneGoals([...doneGoals, newDoneGoal]);
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };
  return (
    <>
      <div id="backgroundLayer"></div>
      <h1 className="Habit">Habit</h1>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch exitBeforeEnter location={location} key={location.pathname}>
          <Route exact path="/">
            <Timers
              countRef={countRef}
              goals={goals.filter((goal) => goal.time == "day")}
            />
          </Route>
          <Route path="/goals">
            <Goals
              goals={goals}
              deleteGoal={deleteGoal}
              setGoals={setGoals}
              didGoal={didGoal}
            />
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
