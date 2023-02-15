import { Button, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useCallback, useEffect, useState } from "react";
import Task from "./Task";
import dayjs from "dayjs";
import { Link, useLocation } from "react-router-dom";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useDispatch, useSelector } from "react-redux";
import { createTask, getTasks, deleteTask } from "../../actions/tasks";
import { updateTask } from "../../api";

const Tasks = ({ countRef, didTask }) => {
  let location = useLocation();
  const tasksType =
    location.pathname === "/completed" ? "completed" : "default";
  console.log(tasksType);
  console.log(location.pathname);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(dayjs("2022-04-07"));
  const dispatch = useDispatch();

  // CRUD of tasks

  // Read
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {}, [tasks]);

  // Create task
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: { title }.title,
      dateToComplete: { date }.date,
      type: "default",
    };
    // fix date format
    console.log(date.toString());
    if (newTask.title === "") {
      alert("Task title cannot be empty");
      return;
    }
    dispatch(createTask(newTask));
    setTitle("");
  };

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
          {tasksType === "default" && (
            <form noValidate className="add-task-form" onSubmit={handleSubmit}>
              <TextField
                name="task"
                variant="filled"
                label="Task title"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label="Date"
                  value={date}
                  onChange={(newDate) => setDate(newDate)}
                />
              </LocalizationProvider>

              <Button
                className="add-task-button"
                variant="outlined"
                color="primary"
                size="small"
                type="submit"
              >
                <AddIcon />
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
