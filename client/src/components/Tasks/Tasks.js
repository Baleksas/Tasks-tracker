import {
  Button,
  Checkbox,
  TextField,
  FormControlLabel,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useCallback, useEffect, useState } from "react";
import Task from "./Task";
import { Link, useLocation } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useDispatch, useSelector } from "react-redux";
import {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
} from "../../actions/tasks";
import CustomizedSnackbars from "../Snackbar";
import Form from "../Form/Form";

const Tasks = () => {
  let location = useLocation();
  const tasksType =
    location.pathname === "/completed" ? "completed" : "default";

  const dispatch = useDispatch();

  // CRUD of tasks

  // Read
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const tasks = useSelector((state) => state.tasks);

  // update
  const update = (id, task) => {
    try {
      dispatch(updateTask(id, task));
    } catch (error) {
      console.log(error);
    }
  };

  // delete
  const del = (id) => {
    try {
      dispatch(deleteTask(id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="tasks-container">
        <div className={`tasks-box`}>
          <div className="tasks-items">
            {tasks
              .filter((task) => task.type === tasksType)
              .map((task) => (
                <Task del={del} update={update} task={task} key={task._id} />
              ))}
          </div>
          <Form tasks={tasks} tasksType={tasksType} />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
