import React, { useEffect, useRef, useState } from "react";
import { Timer } from "./timer.js";
import { Recipe } from "./recipe.js";
import { Selector } from "./selector.js";
import "../styles/card.css";
import { Controls } from "./controls.js";

export const Card = (props) => {
  const cardPos = useRef()
	const [isActive, setIsActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
	const [cardStyle, setCardStyle] = useState({
    borderColor: props.data.color,
    marginBottom: -50,
    height: 70,
	});
	const [lock, setLock] = useState([
		{
			color: "#2A3147",
		},
		{
			margin: "16px 0px",
		},
		{
			opacity: "100%",
    },
	]);
	let currentHeight = window.innerHeight - 76;

	const handleStart = () => {
    setIsActive(true);
	};
	const handleReset = () => {
		setIsActive(false);
		setCurrentTime(0);
	};
	const handleToggle = () => {
    props.toggle(props.index, cardPos.current.getBoundingClientRect().top);
    setIsActive(false)
	};
	const handleTime = () => {
		setCurrentTime(currentTime + 1);
	};

	useEffect(() => {
		if (props.currentIndex === props.index) {
			setCardStyle({...cardStyle, marginBottom: 0, height: currentHeight}); // CURRENT CARD
		} else if (props.currentIndex === null) {
			setCardStyle({...cardStyle , marginBottom: -50, height: 70}); // NO ACTIVE CARD
		}
	}, [props.currentIndex]);

	useEffect(() => {
		if (isActive) {
			// ACTIVE
			setLock([
				{
					color: "#13171F",
				},
				{
					margin: "6px 0px",
				},
				{
					opacity: "0%",
				},
      ]);
		} else {
			// NOT ACTIVE
			setLock([
				{
					color: "#2A3147",
				},
				{
					margin: "16px 0px",
				},
				{
					opacity: "100%",
				},
      ]);
		}
	}, [isActive]);

	document.styleSheets[0].insertRule(
		`#slide${props.index}::-webkit-slider-thumb { border-color: ${props.data.color}; }`,
		0
	);
	document.styleSheets[0].insertRule(
		`#slide${props.index}:active::-webkit-slider-thumb { background: ${props.data.color}; }`,
		0
	);
	return (
		<div ref={cardPos} className="cardContainer" style={cardStyle}>
			<div onClick={handleToggle} className="section">
				<img src={props.data.icon} alt="" />
				<h1 style={{ color: props.data.color }}>{props.data.brewType}</h1>
			</div>
			<div className="section">
				<Selector
					coffee={props.data.settings[0]}
					ratio={props.data.settings[1]}
					color={props.data.color}
					left={props.data.left}
					isActive={isActive}
					lock={lock}
				/>
			</div>
			<div className="section">
				<Timer
					time={props.data.brewTime}
					color={props.data.color}
					isActive={isActive}
					addTime={handleTime}
				/>
			</div>
			<div className="section">
				<Recipe
					time={props.data.brewTime}
					color={props.data.color}
					isActive={isActive}
					recipe={props.data.recipe}
          currentTime={currentTime}
          cardIndex={props.index}
				/>
			</div>
			<div style={{ width: "100%" }}>
				<Controls
					color={props.data.color}
					isActive={isActive}
					start={handleStart}
					reset={handleReset}
					index={props.index}
				/>
			</div>
		</div>
	);
};
