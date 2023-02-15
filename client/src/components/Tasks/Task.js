import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EditTask from "../Form/EditTask";
import RestoreIcon from "@mui/icons-material/Restore";
import dayjs from "dayjs";

const Task = ({ task, update, del }) => {
  const [allowEdit, setAllowEdit] = useState(false);
  let location = useLocation();
  const pathType = location.pathname === "/completed" ? "completed" : "default";
  //Date formatting
  let formatedDate = task.dateToComplete
    ? dayjs(task.dateToComplete).format("ddd, MMM DD, hh:mm A")
    : null;

  return (
    <React.Fragment>
      <div className="taskBox">
        <li className={`task-item`}>
          <div className="task-item-text">
            <div>{task.title}</div>
            <div>{formatedDate}</div>
            <span className="timeAgo">
              Modified {moment(task.createdAt).fromNow()}
            </span>
          </div>

          {pathType === "default" && (
            <React.Fragment>
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
              <EditIcon
                className="editIcon"
                onClick={() => setAllowEdit((prev) => !prev)}
              />
            </React.Fragment>
          )}

          {pathType === "completed" && (
            <RestoreIcon
              className="editIcon"
              onClick={() => {
                const restoredTask = { ...task, type: "default" };
                update(task._id, restoredTask);
              }}
            />
          )}
          <DeleteOutlineIcon
            onClick={() => del(task._id)}
            className="deleteIcon"
          />
        </li>
      </div>
      {allowEdit && (
        <EditTask
          update={update}
          task={task}
          allowEdit={allowEdit}
          setAllowEdit={setAllowEdit}
        />
      )}
    </React.Fragment>
  );
};

export default Task;
