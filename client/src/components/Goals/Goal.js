import React, { useState, useEffect } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import moment from "moment";
const Goal = ({ goal, didGoal, deleteGoal, priorityUp }) => {
  return (
    <li
      onDoubleClick={(e) => priorityUp(goal.id)}
      className={`goal-item p${goal.priority}`}
    >
      <div className="goal-item-text">
        <div>{goal.text}</div>
        <span className="timeAgo">{moment(goal.createdAt).fromNow()}</span>
      </div>

      <CheckCircleOutlineIcon
        className="doneIcon"
        onClick={() => didGoal(goal)}
      />
      <DeleteOutlineIcon
        onClick={() => deleteGoal(goal.id)}
        className="deleteIcon"
      />
    </li>
  );
};

export default Goal;
