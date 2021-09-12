import React from "react";
import { Minimap } from "./minimap";

export const Recipe = (props) => {
    const points = Object.keys(props.recipe)


    return (
        <div>
            <div className="flexContainer">
                <h2 style={{color:props.color}}>RECIPE</h2>
                <div className="selector">
                <Minimap color={props.color} time={props.time} points={points} isActive={props.isActive} />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
