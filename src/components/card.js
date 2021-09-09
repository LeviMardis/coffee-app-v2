import React, { useEffect, useRef, useState } from "react";
import { Timer } from "./timer.js";
import { Recipe } from "./recipe.js";
import { Selector } from "./selector.js";
import "../styles/card.css";

export const Card = (props) => {
    const cardRef = useRef(null)
  const [isActive, setIsActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0)
  const [openClose, setOpenClose] = useState({
    borderColor: props.data.color,
    height: 150,
    marginBottom: -50,
    zIndex: props.z,
  });


  const handleStart = () => {
    setIsActive(true);
  };
  const handleReset = () => {
    setIsActive(false);
  };
  const handleOpenClose = () => {
    if (isOpen) {
      setIsOpen(!isOpen);
        setOpenClose({ ...openClose, marginBottom: -50, height: 150 }); //close card
    } else {
        setIsOpen(!isOpen);
        setOpenClose({ ...openClose, marginBottom: 0, height: "99.4vh" }); //open card
        setScrollPosition(cardRef.current.getBoundingClientRect().top);
    }
  };
    
    useEffect(() => {
        if (isOpen) {
            cardRef.current.scrollIntoView(true);
        } else {
        window.scrollBy(0, -104)
        }
    }, [isOpen])

  return (
      <div ref={cardRef} className="cardContainer" style={openClose}>
      <div onClick={handleOpenClose}>test</div>
      <div className="container">
        <Selector
          coffee={props.data.settings[0]}
          ratio={props.data.settings[1]}
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
