import React, { useState } from "react";
import "../styles/card.css"

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
          className="flexContainer2"
        >
          <svg id="coffeeL" width="6" height="18" onClick={handleClick}>
            <path
              d="M3.71831 17.3539C3.8994 17.7476 4.30986 18 4.74447 18C5.45674 18 6 17.5659 6 16.9703C6 16.6674 5.79477 16.2737 5.67404 16.0112L2.37827 8.99495L5.67404 1.97869C5.79477 1.71621 6 1.31239 6 1.01963C6 0.4341 5.45674 0 4.74447 0C4.30986 0 3.8994 0.242288 3.71831 0.636007L0.482897 7.52103C0.265594 7.98542 0 8.55076 0 8.99495C0 9.43915 0.265594 10.0045 0.482897 10.4689L3.71831 17.3539Z"
              fill="#4C5980"
            />
          </svg>
          {coffee <= 1 ? (
            <>
              <p> </p>
              <p>1</p>
              <p>2</p>
            </>
          ) : (
            <>
              <p>{coffee - 1}</p>
              <p>{coffee}</p>
              <p>{coffee + 1}</p>
            </>
          )}
          <svg id="coffeeR" width="6" height="18" onTouchStart={handleClick}>
            <path
              d="M2.28169 17.3539L5.5171 10.4689C5.73441 10.0045 6 9.43915 6 8.99495C6 8.55076 5.73441 7.98542 5.5171 7.52103L2.28169 0.636007C2.1006 0.242288 1.69014 0 1.24346 0C0.531187 0 0 0.4341 0 1.01963C0 1.31239 0.205231 1.71621 0.313883 1.97869L3.60966 8.99495L0.313883 16.0112C0.205231 16.2737 0 16.6674 0 16.9703C0 17.5659 0.531187 18 1.24346 18C1.69014 18 2.1006 17.7476 2.28169 17.3539Z"
              fill="#4C5980"
            />
          </svg>
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
          className="flexContainer2"
        >
          <svg id="ratioL" width="6" height="18" onTouchStart={handleClick}>
            <path
              d="M3.71831 17.3539C3.8994 17.7476 4.30986 18 4.74447 18C5.45674 18 6 17.5659 6 16.9703C6 16.6674 5.79477 16.2737 5.67404 16.0112L2.37827 8.99495L5.67404 1.97869C5.79477 1.71621 6 1.31239 6 1.01963C6 0.4341 5.45674 0 4.74447 0C4.30986 0 3.8994 0.242288 3.71831 0.636007L0.482897 7.52103C0.265594 7.98542 0 8.55076 0 8.99495C0 9.43915 0.265594 10.0045 0.482897 10.4689L3.71831 17.3539Z"
              fill="#4C5980"
            />
          </svg>
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
          <svg id="ratioR" width="6" height="18" onTouchStart={handleClick}>
            <path
              d="M2.28169 17.3539L5.5171 10.4689C5.73441 10.0045 6 9.43915 6 8.99495C6 8.55076 5.73441 7.98542 5.5171 7.52103L2.28169 0.636007C2.1006 0.242288 1.69014 0 1.24346 0C0.531187 0 0 0.4341 0 1.01963C0 1.31239 0.205231 1.71621 0.313883 1.97869L3.60966 8.99495L0.313883 16.0112C0.205231 16.2737 0 16.6674 0 16.9703C0 17.5659 0.531187 18 1.24346 18C1.69014 18 2.1006 17.7476 2.28169 17.3539Z"
              fill="#4C5980"
            />
          </svg>
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
          className="flexContainer2"
        >
          <svg id="waterL" width="6" height="18" onTouchStart={handleClick}>
            <path
              d="M3.71831 17.3539C3.8994 17.7476 4.30986 18 4.74447 18C5.45674 18 6 17.5659 6 16.9703C6 16.6674 5.79477 16.2737 5.67404 16.0112L2.37827 8.99495L5.67404 1.97869C5.79477 1.71621 6 1.31239 6 1.01963C6 0.4341 5.45674 0 4.74447 0C4.30986 0 3.8994 0.242288 3.71831 0.636007L0.482897 7.52103C0.265594 7.98542 0 8.55076 0 8.99495C0 9.43915 0.265594 10.0045 0.482897 10.4689L3.71831 17.3539Z"
              fill="#4C5980"
            />
          </svg>
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
          <svg id="waterR" width="6" height="18" onTouchStart={handleClick}>
            <path
              d="M2.28169 17.3539L5.5171 10.4689C5.73441 10.0045 6 9.43915 6 8.99495C6 8.55076 5.73441 7.98542 5.5171 7.52103L2.28169 0.636007C2.1006 0.242288 1.69014 0 1.24346 0C0.531187 0 0 0.4341 0 1.01963C0 1.31239 0.205231 1.71621 0.313883 1.97869L3.60966 8.99495L0.313883 16.0112C0.205231 16.2737 0 16.6674 0 16.9703C0 17.5659 0.531187 18 1.24346 18C1.69014 18 2.1006 17.7476 2.28169 17.3539Z"
              fill="#4C5980"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
