import { data } from "./data.js";
import "./styles/App.css";
import { Card } from "./components/card.js";
import { useState } from "react";

function App() {
	const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [scrollBack, setScrollBack] = useState()
  const [returnSpeed, setReturnSpeed] = useState()
  let speed
	let currentScroll;
	let final;

	const scrollAnimate = () => {
		if (!isOpen) {
      if (currentScroll < final - speed) {
				currentScroll = currentScroll + speed;
				window.scroll(0, currentScroll);
				window.requestAnimationFrame(scrollAnimate);
      } else {
				window.scroll(0, final);
				currentScroll = final;
			}
    } else {
      if (currentScroll > scrollBack + returnSpeed) {
        currentScroll = currentScroll - returnSpeed;
        window.scroll(0, currentScroll)
        window.requestAnimationFrame(scrollAnimate)
      } else {
        window.scroll(0, scrollBack)
      }
    }
	};
	const handleToggle = (i, s) => {
		setIsOpen(!isOpen);
		if (!isOpen) {
			setCurrentIndex(i);
			speed = s / 20;
			final = s + window.scrollY;
			currentScroll = window.scrollY;
      setScrollBack(window.scrollY);
      setReturnSpeed(speed)
    } else {
      setCurrentIndex(null);
      currentScroll = window.scrollY
      }
		scrollAnimate();
	};

	let cards = data.map((item, index) => {
		return (
			<Card
				data={item}
				key={index}
				index={index + 1}
				currentIndex={currentIndex}
				isOpen={isOpen}
				toggle={handleToggle}
			/>
		);
	});
	return <>{cards}</>;
}

export default App;
