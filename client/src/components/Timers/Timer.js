import React, { useEffect, useState } from "react";

const Timer = ({
  mainTime,
  setMainTime,
  pausedTimes,
  setPausedTimes,
  countRef,
  goal,
  setDoneTime,
}) => {
  const [timer, setTimer] = useState(0);
  const [status, setStatus] = useState("");
  useEffect(() => {
    return () => {
      setDoneTime(timer);
    };
  }, [timer]);
  const handleStart = () => {
    setStatus("active");
    countRef.current = setInterval(() => {
      setMainTime((mainTime) => mainTime + 1);
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const handlePause = () => {
    setStatus("paused");
    setPausedTimes(pausedTimes + 1);
    clearInterval(countRef.current);
  };

  return (
    <div className="timer">
      <div className="stopwatch-card">
        <p>{parseInt(timer / 3600)}</p>
        <p>{parseInt((timer % 3600) / 60)}</p>
        <p>{parseInt((timer % 3600) % 60)}</p>
      </div>
      <div className="buttons">
        {status == "active" || status == "paused" ? (
          <button
            className="pointer"
            onClick={status == "active" ? handlePause : handleStart}
          >
            {status == "active" ? "Pause" : "Resume"}
          </button>
        ) : (
          <button className="pointer" onClick={handleStart}>
            Start
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
