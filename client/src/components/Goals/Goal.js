import React, { useState } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../../actions/goals";
const Goal = ({ goal, didGoal }) => {
  const dispatch = useDispatch();
  const priorityUp = () => {
    setPriority(priority - 1);
    if (priority === 1) {
      setPriority(3);
    }
  };

  const [priority, setPriority] = useState(3);
  return (
    <li onDoubleClick={priorityUp} className={`goal-item p${priority}`}>
      <div className="goal-item-text">
        <div>{goal.text}</div>
        <span className="timeAgo">{moment(goal.createdAt).fromNow()}</span>
      </div>

      <CheckCircleOutlineIcon
        className="doneIcon"
        onClick={() => didGoal(goal)}
      />
      <DeleteOutlineIcon
        onClick={() => dispatch(deleteGoal(goal._id))}
        className="deleteIcon"
      />
    </li>
  );
};

export default Goal;
