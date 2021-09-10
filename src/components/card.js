import React, { useEffect, useRef, useState } from "react";
import { Timer } from "./timer.js";
import { Recipe } from "./recipe.js";
import { Selector } from "./selector.js";
import "../styles/card.css";
import icon from "../images/Right.svg"

export const Card = (props) => {
  const cardRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [cardStyle, setCardStyle] = useState({
    height: 100,
    marginBottom: -50,
    zIndex: props.index,
    display: "block",
    borderColor: props.data.color
  });
  let currentHeight = window.innerHeight - 24

  const handleStart = () => {
    setIsActive(true);
  };
  const handleReset = () => {
    setIsActive(false);
  };
  const handleToggle = () => {
    props.toggle(props.index);
  };

  useEffect(() => {
    if (props.currentIndex === props.index) {
      setCardStyle({ ...cardStyle, height: currentHeight, marginBottom: 0 });
    } else if (props.currentIndex === null) {
      setCardStyle({ ...cardStyle, display: "block", height: 100, marginBottom: -50 });
    } else if (props.currentIndex > props.index) {
      setCardStyle({...cardStyle, marginBottom: -124 });
    } else {
      // setTimeout(() => {
      //   setCardStyle({...cardStyle, display: "none"})
      // }, 300)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentIndex]);
console.log(props.data.icon)
  return (
    <div ref={cardRef} className="cardContainer" style={cardStyle}>
      <img src={icon} alt="" />
      <h1 style={{ color: props.data.color }} onClick={handleToggle}>
        {props.data.brewType}
      </h1>
      <div className="container">
        <Selector
          coffee={props.data.settings[0]}
          ratio={props.data.settings[1]}
          color={props.data.color}
        />
        <Timer
          time={props.data.brewTime}
          color={props.data.color}
          isActive={isActive}
        />
        <Recipe
          time={props.data.brewTime}
          color={props.data.color}
          isActive={isActive}
          recipe={props.data.recipe}
        />
        <button onClick={handleStart}>start</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
};
