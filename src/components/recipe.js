import React from "react";
import { Minimap } from "./minimap";

export const Recipe = (props) => {
 const points = [10, 40, 80, 150]

    return (
        <div>
            <div className="flexContainer">
                <p>Recipe</p><Minimap color={props.color} time={props.time} points={points} isActive={props.isActive} />
            </div>
            <div>

            </div>
        </div>
    )
}