import React from "react";
const Instructions = () => {
  return (
    <div className="container">
      <div className="intro-container">
        <div className="intro-instructions">
          <h2>Tasks tracker</h2>
          <div className="intro-content">
            <div>
              <span>Requirements</span>
              <div>
                <li>- Tasks can be added to the application.</li>
                <li>
                  - All tasks or an individual task can be viewed or retrieved.
                </li>
                <li>- Tasks can be deleted from the application. </li>
                <li>
                  - Duplicate tasks should not be able to be added to the app.
                </li>
                <li>- Existing tasks can be updated in the app.</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
