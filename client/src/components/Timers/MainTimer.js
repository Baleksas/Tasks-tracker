import React from "react";

const MainTimer = ({ mainTime }) => {
  return (
    <div className="main_clock">
      <div className="main_time_box">
        <span>{parseInt(mainTime / 3600)}</span>
      </div>
      <div className="main_time_box">
        <span>{parseInt((mainTime % 3600) / 60)}</span>
      </div>
      <div className="main_time_box">
        <span>{parseInt(mainTime % 3600) % 60}</span>
      </div>
    </div>
  );
};

export default MainTimer;
