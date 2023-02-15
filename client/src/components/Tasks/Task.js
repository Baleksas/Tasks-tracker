import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import moment from "moment";
import React from "react";
import { useLocation } from "react-router-dom";
const Task = ({ task, update, del }) => {
  let location = useLocation();
  const tasksType =
    location.pathname === "/completed" ? "completed" : "default";
  return (
    <div className="taskAndTimer">
      <li className={`task-item`}>
        <div className="task-item-text">
          <div>{task.title}</div>
          <div>{task.dateToComplete}</div>
          <span className="timeAgo">
            Modified {moment(task.createdAt).fromNow()}
          </span>
        </div>

        {tasksType === "default" && (
          <CheckCircleOutlineIcon
            className="doneIcon"
            onClick={() => {
              const updatedTask = {
                ...task,
              };
              updatedTask["type"] = "completed";
              update(task._id, updatedTask);
            }}
          />
        )}
        <DeleteOutlineIcon
          onClick={() => del(task._id)}
          className="deleteIcon"
        />
      </li>
    </div>
  );
};

export default Task;

// current tasks are reminders
// tasks should have subtasks and option to be repeated?
