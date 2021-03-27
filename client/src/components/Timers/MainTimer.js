import React from "react";

const MainTimer = ({ mainTime }) => {
  return (
    <>
      <div className="main_clock">
        {/* Pause all the goals and show resting timer instead vv */}
        <button>Pause</button>

        <div className="main_time_box">
          <span>
            {mainTime < 3600 ? "0" : ""}
            {parseInt(mainTime / 3600)}
          </span>
        </div>
        <div className="main_time_box">
          <span>
            {mainTime < 60 ? "0" : ""}
            {parseInt((mainTime % 3600) / 60)}
          </span>
        </div>
        <div className="main_time_box">
          <span>
            {mainTime < 10 ? "0" : ""}
            {parseInt(mainTime % 3600) % 60}
          </span>
        </div>
      </div>
    </>
  );
};

export default MainTimer;
