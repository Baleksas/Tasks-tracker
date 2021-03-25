import React, { useState, useEffect } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import moment from "moment";
import Timer from "../Timers/Timer";
const Goal = ({ countRef, goal, didGoal, deleteGoal, priorityUp }) => {
  return (
    <>
      <li
        onDoubleClick={(e) => priorityUp(goal.id)}
        className={`goal-item ${goal.priority ? "importantGoal" : ""}`}
      >
        <div className="goal-item-text">
          <div>{goal.text}</div>
          <span className="timeAgo">{moment(goal.createdAt).fromNow()}</span>
        </div>

        <CheckCircleOutlineIcon
          className="doneIcon"
          onClick={() => {
            didGoal(goal);
            deleteGoal(goal.id);
          }}
        />
        <DeleteOutlineIcon
          onClick={() => deleteGoal(goal.id)}
          className="deleteIcon"
        />
      </li>
      <Timer countRef={countRef} goal={goal} />
    </>
  );
};

export default Goal;
