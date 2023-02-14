import React, { useRef, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Tasks from "./components/Tasks/Tasks";
import Instructions from "./components/Instructions";
import Nav from "./components/Nav";
import Review from "./components/Review";
const App = () => {
  const location = useLocation();
  const [doneTasks, setDoneTasks] = useState([]);
  const [tasks, setTasks] = useState([]);
  const countRef = useRef(null);
  const didTask = (task, doneTime, pausedTimes) => {
    const newDoneTask = { ...task, doneIn: doneTime, pausedTimes: pausedTimes };
    setDoneTasks([...doneTasks, newDoneTask]);
  };

  return (
    <>
      <Nav />
      <Switch exitBeforeEnter location={location} key={location.pathname}>
        <Route exact path="/" component={Instructions}></Route>

        <Route path="/tasks">
          <Tasks
            countRef={countRef}
            tasks={tasks}
            setTasks={setTasks}
            didTask={didTask}
          />
        </Route>

        <Route path="/review">
          <Review doneTasks={doneTasks} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
