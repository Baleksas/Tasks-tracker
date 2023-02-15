import React from "react";
const Instructions = () => {
  return (
    <div className="container">
      <div className="intro-container">
        <div className="intro-instructions">
          <h2>Everflow Technical Exercise</h2>
          <div className="intro-content">
            <div>
              <span>Requirements</span>
              <div>
                <li>- Reminders can be added to the application.</li>
                <li>
                  - All tasks or an individual task can be viewed or retrieved.
                </li>
                <li>- Reminders can be deleted from the application. </li>
                <li>
                  - Duplicate reminders should not be able to be added to the
                  app.
                </li>
                <li>- Existing Reminders can be updated in the app.</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
