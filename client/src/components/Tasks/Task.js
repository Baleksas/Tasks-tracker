import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import moment from "moment";
import React from "react";
const Task = ({ task, del }) => {
  console.log(task);
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

        <CheckCircleOutlineIcon
          className="doneIcon"
          onClick={() => {
            //Move to done db
            del(task.id);
          }}
        />
        <DeleteOutlineIcon
          onClick={() => del(task._id)}
          className="deleteIcon"
        />
      </li>
    </div>
  );
};

export default Task;
