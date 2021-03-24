import React from "react";

const ReviewGoal = ({ goal }) => {
  return (
    <tr>
      <td className="review-list-item">{goal.text}</td>
      <td>Paused times</td>
      <td>{goal.doneIn}</td>
    </tr>
  );
};

export default ReviewGoal;
