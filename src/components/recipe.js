import React, { useEffect, useState } from "react";
import { Minimap } from "./minimap";

export const Recipe = (props) => {
	const points = Object.keys(props.recipe);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [recipe, setRecipe] = useState();

    const createRecipe = () => {
		setCurrentIndex(0);
		setRecipe(
			Object.values(props.recipe).map((elem, index) => {
				return (
					<p key={index} id={`${props.cardIndex}index${index}`}>
						{elem}
					</p>
				);
			})
		);
    };
    
	const updateRecipe = () => {
		document
			.getElementById(`${props.cardIndex}index${currentIndex}`)
			.classList.add("animateRecipeScroll");
		setTimeout(() => {
			setRecipe(recipe.slice(1));
			setCurrentIndex(currentIndex + 1);
		}, 500);
	};

	useEffect(() => {
		if (props.currentTime === 0) {
			createRecipe();
		} else if (props.currentTime.toString() === points[currentIndex]) {
			updateRecipe();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
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
			<div className="recipeList">{recipe}</div>
		</div>
	);
};
