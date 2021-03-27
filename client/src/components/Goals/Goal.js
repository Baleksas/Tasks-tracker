import React, { useState, useEffect } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import moment from "moment";
import Timer from "../Timers/Timer";
const Goal = ({
  mainTime,
  setMainTime,
  countRef,
  goal,
  didGoal,
  deleteGoal,
  priorityUp,
}) => {
  console.log(goal);
  const [doneTime, setDoneTime] = useState(0);
  const [pausedTimes, setPausedTimes] = useState(0);
  return (
    <div className="goalAndTimer">
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
            didGoal(goal, doneTime + 1, pausedTimes);
            deleteGoal(goal.id);
          }}
        />
        <DeleteOutlineIcon
          onClick={() => deleteGoal(goal.id)}
          className="deleteIcon"
        />
      </li>
      <Timer
        mainTime={mainTime}
        setMainTime={setMainTime}
        pausedTimes={pausedTimes}
        setPausedTimes={setPausedTimes}
        setDoneTime={setDoneTime}
        countRef={countRef}
        goal={goal}
      />
    </div>
  );
};

export default Goal;
