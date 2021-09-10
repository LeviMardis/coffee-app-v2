import { data } from "./data.js";
import "./styles/App.css";
import { Card } from "./components/card.js";
import { useEffect, useState } from "react/cjs/react.development";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)

  const handleToggle = (i) => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setCurrentIndex(i)
      window.scroll()
    } else {
      setCurrentIndex(null)
    }
  }


  let cards = data.map((item, index) => {
    return <Card data={item} key={index} index={index + 1} currentIndex={currentIndex} isOpen={isOpen} toggle={handleToggle} />;
  });
console.log(data[0].icon)
  return <>{cards}</>;
}

export default App;
