import React, { useState } from "react";
import { Timer } from './timer.js'
import { Recipe } from "./recipe.js";
import "../styles/card.css";

export const Card = (props) => {
    const [isActive, setIsActive] = useState(false)

    const handleStart = () => {
        setIsActive(true)
    }
    const handleReset = () => {
        setIsActive(false)
    }


    return (
        <div className="container">
            <Timer time={props.time} color={props.color} isActive={isActive} />
            <Recipe time={props.time} color={props.color} isActive={isActive} />
            <button onClick={handleStart}>start</button>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}