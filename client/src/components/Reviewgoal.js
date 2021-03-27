import React from "react";

const ReviewGoal = ({ goal }) => {
  return (
    <tr>
      <td className="review-list-item">{goal.text}</td>
      <td>{goal.pausedTimes}</td>
      <td>{goal.doneIn}</td>
    </tr>
  );
};

export default ReviewGoal;
