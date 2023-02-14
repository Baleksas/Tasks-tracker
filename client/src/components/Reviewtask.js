import React from "react";

const ReviewTask = ({ task }) => {
  return (
    <tr>
      <td className="review-list-item">{task.text}</td>
      <td>{task.pausedTimes}</td>
      <td>{task.doneIn}</td>
    </tr>
  );
};

export default ReviewTask;
