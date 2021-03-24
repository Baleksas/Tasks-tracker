import React, { useEffect, useState } from "react";

const Timer = ({ countRef, goal }) => {
  const [timer, setTimer] = useState(0);
  const [status, setStatus] = useState("");

  const handleStart = () => {
    setStatus("active");
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const handlePause = () => {
    setStatus("paused");
    clearInterval(countRef.current);
  };

  return (
    <div className="timer">
      <h3>{goal.text}</h3>
      <div className="stopwatch-card">
        <p>{timer}</p> {/* here we will show timer */}
        <div className="buttons">
          {status == "active" || status == "paused" ? (
            <button onClick={status == "active" ? handlePause : handleStart}>
              {status == "active" ? "Pause" : "Resume"}
            </button>
          ) : (
            <button onClick={handleStart}>Start</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;
