import React, { useEffect, useState, useRef } from "react";
import "../styles/card.css"
export const Minimap = (props) => {
  const ref = useRef();
  const [calcWidth, setCalcWidth] = useState(0);
  const [pixelPerSecond, setPixelPerSecond] = useState(0);
  const [animateFill, setAnimateFill] = useState({ animation: "none" })
  const [animateHide, setAnimateHide] = useState({ animation: "none" });


  useEffect(() => {
    if (props.isActive) {
      setAnimateFill({ animation: `minimapFill ${props.time}s linear forwards` })
      setAnimateHide({ animation: `minimapHide ${props.time}s linear forwards` });
    } else {
      setAnimateFill({ animation: "none" });
      setAnimateHide({ animation: "none" });
    }
    setCalcWidth(ref.current.offsetWidth);
    setPixelPerSecond(calcWidth / props.time);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calcWidth, pixelPerSecond, props.isActive]);

  const circlesOverlay = props.points.map((point, index) => {
    return (
      <circle
        cx={Math.floor(point * pixelPerSecond)}
        cy="5"
        r="3"
        stroke="#4C5980"
        strokeWidth="2"
        fill="#0E0F12"
        key={index}
      />
    );
  });
  const circlesBase = props.points.map((point, index) => {
    return (
      <circle
        cx={Math.floor(point * pixelPerSecond)}
        cy="5"
        r="3"
        stroke={props.color}
        strokeWidth="2"
        fill="#0E0F12"
        key={index}
      />
    );
  });

  return (
    <div ref={ref} style={{ width: "100%" }}>
      <svg height="10px" width={calcWidth}>
        <g style={animateHide}>
          <path d={`m0 5 H ${calcWidth}`} stroke="#4C5980" strokeWidth="2" />
          <circle
            cx="4"
            cy="5"
            r="3"
            stroke="#4C5980"
            strokeWidth="2"
            fill="#0E0F12"
          />
          <circle
            cx={calcWidth - 4}
            cy="5"
            r="3"
            stroke="#4C5980"
            strokeWidth="2"
            fill="#0E0F12"
          />
          {circlesOverlay}
        </g>
        <g className="minimapFill" style={animateFill}>
          <path
            d={`m0 5 H ${calcWidth}`}
            stroke={props.color}
            strokeWidth="2"
          />
          <circle
            cx="4"
            cy="5"
            r="3"
            stroke={props.color}
            strokeWidth="2"
            fill="#13171F"
          />
          <circle
            cx={calcWidth - 4}
            cy="5"
            r="3"
            stroke={props.color}
            strokeWidth="2"
            fill="#13171F"
          />
          {circlesBase}
        </g>
      </svg>
    </div>
  );
};

//<path xmlns="http://www.w3.org/2000/svg" d="M0 4H207" stroke="gold" stroke-width="2" stroke-linecap="round" />
