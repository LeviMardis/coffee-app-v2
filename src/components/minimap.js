import React, { useEffect, useState, useRef } from "react";
import "../styles/card.css"
export const Minimap = (props) => {
  const ref = useRef();
  const [calcWidth, setCalcWidth] = useState(0);
  const [pixelPerSecond, setPixelPerSecond] = useState(0);
  const [animate, setAnimate] = useState({ animation: "none"})

  useEffect(() => {
    if (props.isActive) {
      setAnimate({...animate, animation: `slideOver ${props.time}s linear forwards` })
    } else {
      setAnimate({...animate, animation: "none"})
    }
    setCalcWidth(ref.current.offsetWidth);
    setPixelPerSecond(calcWidth / props.time);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calcWidth, pixelPerSecond, props.isActive]);

  const circlesOverlay = props.points.map((point, index) => {
    return (
      <circle
        cx={Math.floor(point * pixelPerSecond)}
        cy="4"
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
        cy="4"
        r="3"
        stroke={props.color}
        strokeWidth="2"
        fill={props.color}
        key={index}
      />
    );
  });

  return (
    <div ref={ref}>
      <svg height="8px">
        <defs>
        <clipPath id="clip-path">
          <rect style={animate} width="100%" height="100%"/>
        </clipPath>
        </defs>
        <g>
          <path
            d={`m0 4 H ${calcWidth}`}
            stroke={props.color}
            strokeWidth="2"
          />
          <circle
            cx="4"
            cy="4"
            r="3"
            stroke={props.color}
            strokeWidth="2"
            fill={props.color}
          />
          <circle
            cx={calcWidth - 4}
            cy="4"
            r="3"
            stroke={props.color}
            strokeWidth="2"
            fill={props.color}
          />
          {circlesBase}
        </g>
        <g clipPath="url(#clip-path)">
          <path
            d={`m0 4 H ${calcWidth}`}
            stroke="#4C5980"
            strokeWidth="2"
          />
          <circle
            cx="4"
            cy="4"
            r="3"
            stroke="#4C5980"
            strokeWidth="2"
            fill="#0E0F12"
          />
          <circle
            cx={calcWidth - 4}
            cy="4"
            r="3"
            stroke="#4C5980"
            strokeWidth="2"
            fill="#0E0F12"
          />
          {circlesOverlay}
        </g>
      </svg>
    </div>
  );
};

//<path xmlns="http://www.w3.org/2000/svg" d="M0 4H207" stroke="gold" stroke-width="2" stroke-linecap="round" />
