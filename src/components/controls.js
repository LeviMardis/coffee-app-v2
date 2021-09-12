import React from "react";
import { useEffect, useRef } from "react";

export const Controls = (props) => {
    const slideRef = useRef()
    let currentValue;



  useEffect(() => {
    slideRef.current.value = 0;
  }, []);

  const animateStart = () => {
    slideRef.current.value = currentValue;

    if (currentValue > 0 && currentValue < 70) {
      window.requestAnimationFrame(animateStart);
      currentValue = currentValue - 2;
    }
    if (currentValue > 69 && currentValue < 100) {
      window.requestAnimationFrame(animateStart);
      currentValue = currentValue + 2;
    }
  };
  const animateStop = () => {
    slideRef.current.value = currentValue;

    if (currentValue > 30 && currentValue < 100) {
      window.requestAnimationFrame(animateStop);
      currentValue = currentValue + 2;
    }
    if (currentValue > 0 && currentValue < 31) {
      window.requestAnimationFrame(animateStop);
      currentValue = currentValue - 2;
    }
  };

  const handleEnd = ({ target }) => {
    currentValue = parseInt(target.value);
    if (props.isActive) {
      if (currentValue < 31) {
        props.reset();
      }
      window.requestAnimationFrame(animateStop);
    } else {
      if (currentValue > 69) {
        props.start();
      }
      window.requestAnimationFrame(animateStart);
    }
  };

  return (
    <>
      <input
        ref={slideRef}
        id={`slide${props.index}`}
        type="range"
        min="0"
        max="100"
        onTouchEnd={handleEnd}
        onMouseUp={handleEnd}
      />
    </>
  );
};
