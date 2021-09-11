import React, { useEffect, useState } from "react";
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
  //const [lock, setLock] = useState({margin: "20px 0px"})

  const setStart = (event) => {
    setXdown(event.touches[0].clientX);
  };
  const changeCoffee = (event) => {
    setXmove(Math.trunc((event.touches[0].clientX - xdown) / 20) * -1);
    setCoffee(coffee < 1 ? 1 : coffee > 99 ? 100 : coffeeSave + xmove);
  };
  const changeRatio = (event) => {
    setXmove(Math.trunc((event.touches[0].clientX - xdown) / 40) * -1);
    setRatio(ratio < 1 ? 1 : ratio > 20 ? 20 : ratioSave + xmove);
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

  // useEffect(() => {
  //   if (props.isActive) {
  //     setLock({margin: "5px 0px"})
  //   } else {
  //     setLock({margin: "20px 0px"})
  //   }
  // }, [props.isActive])
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
          style={props.lock[1]}
        >
          <img
            src={left}
            alt=""
            onClick={handleClick}
            id="coffeeL"
            style={props.lock[2]}
          />
          {coffee <= 1 ? (
            <>
              <p>&nbsp;</p>
              <p style={{color: "#ded9d3"}}>1</p>
              <p style={props.lock[0]}>2</p>
            </>
          ) : coffee >= 100 ? (
            <>
              <p style={props.lock[0]}>99</p>
              <p style={{color: "#ded9d3"}}>100</p>
              <p>&nbsp;</p>
            </>
          ) : (
            <>
              <p style={props.lock[0]}>{coffee - 1}</p>
              <p style={{color: "#ded9d3"}}>{coffee}</p>
              <p style={props.lock[0]}>{coffee + 1}</p>
            </>
          )}
          <img
            src={right}
            alt=""
            id="coffeeR"
            onTouchStart={handleClick}
            style={props.lock[2]}
          />
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
          style={props.lock[1]}
        >
          <img
            src={left}
            alt=""
            id="ratioL"
            onTouchStart={handleClick}
            style={props.lock[2]}
          />
          {ratio <= 1 ? (
            <>
              <p>&nbsp;</p>
              <p style={{color: "#ded9d3"}}>1:1</p>
              <p style={props.lock[0]}>1:2</p>
            </>
          ) : ratio >= 20 ? (
            <>
              <p style={props.lock[0]}>1:19</p>
              <p style={{color: "#ded9d3"}}>1:20</p>
              <p>&nbsp;</p>
            </>
          ) : (
            <>
              <p style={props.lock[0]}>1:{ratio - 1}</p>
              <p style={{color: "#ded9d3"}}>1:{ratio}</p>
              <p style={props.lock[0]}>1:{ratio + 1}</p>
            </>
          )}
          <img
            src={right}
            alt=""
            id="ratioR"
            onTouchStart={handleClick}
            style={props.lock[2]}
          />
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
          style={props.lock[1]}
        >
          <img
            src={left}
            alt=""
            id="waterL"
            onTouchStart={handleClick}
            style={props.lock[2]}
          />
          {coffee <= 1 ? (
            <>
              <p>&nbsp;</p>
              <p style={{color: "#ded9d3"}}>{ratio}</p>
              <p style={props.lock[0]}>{ratio * 2}</p>
            </>
          ) : coffee >= 100 ? (
            <>
              <p style={props.lock[0]}>{ratio * (coffee - 1)}</p>
              <p style={{color: "#ded9d3"}}>{ratio * coffee}</p>
              <p>&nbsp;</p>
            </>
          ) : (
            <>
              <p style={props.lock[0]}>{(coffee - 1) * ratio}</p>
              <p style={{color: "#ded9d3"}}>{coffee * ratio}</p>
              <p style={props.lock[0]}>{(coffee + 1) * ratio}</p>
            </>
          )}
          <img
            src={right}
            alt=""
            id="waterR"
            onTouchStart={handleClick}
            style={props.lock[2]}
          />
        </div>
      </div>
    </>
  );
};
