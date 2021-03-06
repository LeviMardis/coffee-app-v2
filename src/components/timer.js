import React, { useState, useEffect } from "react";
import "../styles/card.css";

export const Timer = (props) => {
  const time = props.time;
  const [seconds, setSeconds] = useState(time % 60);
  const [minutes, setMinutes] = useState(Math.floor(time / 60));

  useEffect(() => {
    let interval = null;
    if (props.isActive) {
      interval = setInterval(() => {
        props.addTime()
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
      setMinutes(Math.floor(time / 60))
      setSeconds(time % 60)
    }
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isActive, seconds, minutes]);

  return (

      <div className="flexContainer">
        <h2 style={{color:props.color}}>TIMER</h2>
        <div className="flexContainerTimer">
          0{minutes}:{seconds < 10 ? "0" + seconds : seconds}
        </div>
      </div>

  );
};
