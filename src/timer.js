import React, { useState, useEffect } from "react";
import "./card.css";

export const Timer = (props) => {
    const time = props.time;
  const [animate, setAnimate] = useState({
    background: `linear-gradient(90deg, ${props.color} 50%, grey 50%)`,
  });
  // const [ms, setMs] = useState(0); MiliSeconds
  const [seconds, setSeconds] = useState(time % 60);
  const [minutes, setMinutes] = useState(Math.floor(time / 60));

  const [isActive, setIsActive] = useState(false);

  function start() {
    setIsActive(true);
    setAnimate({...animate, animation: `minimap-fill ${props.time}s linear forwards`})
  }

  function reset() {
    setMinutes(Math.floor(time / 60));
    setSeconds(time % 60);
    //setMs(0);
    setIsActive(false);
    setAnimate({...animate, animation: "none" });
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  return (
    <div className="container">
      <div className="timerContainer">
        <div>Timer</div>
        <div>
          0{minutes}:{seconds < 10 ? "0" + seconds : seconds}
        </div>
      </div>
      <div className="timerContainer">
        <div>Recipe</div>
        <div className="minimap" style={animate}></div>
      </div>
      <div>
        <div>
          <button onClick={start}>Start</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};
