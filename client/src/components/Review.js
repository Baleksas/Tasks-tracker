import React from "react";
import { container, pageTransition } from "../Styles/Transitions";
import ReviewTask from "./Reviewtask";

const Review = ({ doneTasks }) => {
  return (
    <div className="container">
      <div className="tasks-container">
        <div className={`tasks-box`}>
          {doneTasks.length > 0 ? (
            <div className="review-items-container">
              <table className="review-items">
                <tr>
                  <th>Task</th>
                  <th>Paused times</th>
                  <th>Achieved in</th>
                </tr>

                {doneTasks.map((task) => (
                  <ReviewTask task={task} key={task.id} />
                ))}
              </table>
            </div>
          ) : (
            <div className="no__tasks">
              This is a review page.
              <br />
              You can see your results and reflect on them. To do that, you have
              to achieve tasks.
              <br />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
