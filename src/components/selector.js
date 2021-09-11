import React, { useState } from "react";
import "../styles/card.css";
const left = require("../images/left.svg").default;
const right = require("../images/right.svg").default;

export const Selector = (props) => {
  const [coffeeSave, setCoffeeSave] = useState(props.coffee);
  const [ratioSave, setRatioSave] = useState(props.ratio);
  const [xdown, setXdown] = useState(0);
  const [xmove, setXmove] = useState(0);
  const [coffee, setCoffee] = useState(props.coffee);
  const [ratio, setRatio] = useState(props.ratio);

  const setStart = (event) => {
    setXdown(event.touches[0].clientX);
  };
  const changeCoffee = (event) => {
    setXmove(Math.trunc((event.touches[0].clientX - xdown) / 20) * -1);
    setCoffee(coffee < 1 ? 1 : coffeeSave + xmove);
  };
  const changeRatio = (event) => {
    setXmove(Math.trunc((event.touches[0].clientX - xdown) / 40) * -1);
    setRatio(ratio < 1 ? 1 : ratioSave + xmove);
  };
  const touchEnd = () => {
    setCoffeeSave(coffee < 1 ? 1 : coffee);
    setRatioSave(ratio < 1 ? 1 : ratio);
    setXmove(0);
  };
  const handleClick = (event) => {
    switch (event.target.id) {
      case "coffeeL":
        setCoffee(coffee - 1);
        break;
      case "coffeeR":
        setCoffee(coffee + 1);
        break;
      case "waterL":
        setCoffee(coffee - 1);
        break;
      case "waterR":
        setCoffee(coffee + 1);
        break;
      case "ratioL":
        setRatio(ratio - 1);
        break;
      case "ratioR":
        setRatio(ratio + 1);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="flexContainer">
        <div>
          <h2 style={{ color: props.color }}>COFFEE</h2>
        </div>
        <div
          onTouchStart={setStart}
          onTouchMove={changeCoffee}
          onTouchEnd={touchEnd}
          className="selector"
        >
          <img src={left} alt="" onClick={handleClick} id="coffeeL" />
          {coffee <= 1 ? (
            <>
              <p> </p>
              <p>1</p>
              <p>2</p>
            </>
          ) : coffee >= 100 ? (
              <>
                
              </>
          ) : (
            <>
              <p>{coffee - 1}</p>
              <p>{coffee}</p>
              <p>{coffee + 1}</p>
            </>
          )}
          <img src={right} alt="" id="coffeeR" onTouchStart={handleClick} />
        </div>
      </div>
      <div className="flexContainer">
        <div>
          <h2 style={{ color: props.color }}>RATIO</h2>
        </div>
        <div
          onTouchStart={setStart}
          onTouchMove={changeRatio}
          onTouchEnd={touchEnd}
          className="selector"
        >
          <img src={left} alt="" id="ratioL" onTouchStart={handleClick} />
          {ratio <= 1 ? (
            <>
              <p> </p>
              <p>1:1</p>
              <p>1:2</p>
            </>
          ) : (
            <>
              <p>1:{ratio - 1}</p>
              <p>1:{ratio}</p>
              <p>1:{ratio + 1}</p>
            </>
          )}
          <img src={right} alt="" id="ratioR" onTouchStart={handleClick} />
        </div>
      </div>
      <div className="flexContainer">
        <div>
          <h2 style={{ color: props.color }}>WATER</h2>
        </div>
        <div
          onTouchStart={setStart}
          onTouchMove={changeCoffee}
          onTouchEnd={touchEnd}
          className="selector"
        >
          <img src={left} alt="" id="waterL" onTouchStart={handleClick} />
          {coffee <= 1 ? (
            <>
              <p> </p>
              <p>{ratio}</p>
              <p>{ratio * 2}</p>
            </>
          ) : (
            <>
              <p>{(coffee - 1) * ratio}</p>
              <p>{coffee * ratio}</p>
              <p>{(coffee + 1) * ratio}</p>
            </>
          )}
          <img src={right} alt="" id="waterR" onTouchStart={handleClick} />
        </div>
      </div>
    </>
  );
};
