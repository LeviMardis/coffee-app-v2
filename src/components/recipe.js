import React, { useEffect, useState } from "react";
import { Minimap } from "./minimap";

export const Recipe = (props) => {
	const points = Object.keys(props.recipe);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [recipe, setRecipe] = useState()

    const createRecipe = () => {
        setRecipe(Object.values(props.recipe).map((elem, index) => {
		return (
			<p key={index} index={index + 1}>
				{elem}
			</p>
		);
    })) 
    }
    const updateRecipe = () => {
        
    }

	useEffect(() => {
        if (props.currentTime.toString() === 0) {
            createRecipe()
        } else if (props.currentTime.toString() === points[currentIndex]) {
            updateRecipe()
		}
	}, [props.currentTime]);

	return (
		<div>
			<div className="flexContainer">
				<h2 style={{ color: props.color }}>RECIPE</h2>
				<Minimap
					color={props.color}
					time={props.time}
					points={points}
					isActive={props.isActive}
				/>
			</div>
			<div>{recipe}</div>
		</div>
	);
};
