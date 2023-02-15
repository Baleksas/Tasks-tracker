import React, { useRef, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Tasks from "./components/Tasks/Tasks";
import Instructions from "./components/Instructions";
import Nav from "./components/Nav";
const App = () => {
  const location = useLocation();

  return (
    <>
      <Nav />
      <Switch exitBeforeEnter location={location} key={location.pathname}>
        <Route exact path="/" component={Instructions}></Route>

        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/completed">
          <Tasks />
        </Route>
      </Switch>
    </>
  );
};

export default App;
