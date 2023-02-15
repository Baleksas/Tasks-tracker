import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { deleteTask, getTasks, updateTask } from "../../actions/tasks";
import Form from "../Form/Form";
import Task from "./Task";

const Tasks = () => {
  let location = useLocation();
  const tasksType =
    location.pathname === "/completed" ? "completed" : "default";
  console.log(new Date().getDay());
  console.log(new Date().getMonth());
  console.log(new Date().getFullYear());

  const dispatch = useDispatch();

  // CRUD of tasks

  // Read
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const tasks = useSelector((state) => state.tasks);

  console.log(new Date(tasks[0]?.dateToComplete).getFullYear());

  const isSameDay = (date) => {
    return (
      new Date().getFullYear() === new Date(date).getFullYear() &&
      new Date().getMonth() === new Date(date).getMonth() &&
      new Date().getDay() === new Date(date).getDay()
    );
  };

  // update
  const update = (id, task, message) => {
    try {
      dispatch(updateTask(id, task));
      // Alert success
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
        <div className="tasks-box">
          <div className="task-timeline">
            {tasks.filter((task) => isSameDay(task.dateToComplete)).length >
              0 && <div>Today</div>}
          </div>
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
