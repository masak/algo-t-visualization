import React, { useState } from 'react';
import { ID } from '../types';
import {
  boxColumnSpacing,
  boxHeight,
  boxRowSpacing,
  boxWidth,
} from "../lengths";

export type BoxCoords = [number, number, number, number];

export function boxCoords(x: number, y: number): BoxCoords {
  return [
    boxColumnSpacing * (x - 1),
    boxRowSpacing * (y - 1),
    boxColumnSpacing * (x - 1) + boxWidth,
    boxRowSpacing * (y - 1) + boxHeight
  ];
}

export function mid(v1: number, v2: number) {
  return (v1 + v2) / 2;
}

function Box({ label, x, y }: { label: ID, x: number, y: number }) {
  let [hoverState, setHoverState] = useState(false);
  let [x1, y1, x2, y2] = boxCoords(x, y);
  let hoverBehavior = {
    onMouseEnter: () => setHoverState(true),
    onMouseLeave: () => setHoverState(false),
  };
  return (
    <>
      <rect
        x={x1}
        y={y1}
        width={x2 - x1}
        height={y2 - y1}
        fill={hoverState ? "#dfd" : "white"}
        stroke="black"
        strokeWidth="2"
        {...hoverBehavior}
      />
      <text
        x={mid(x1, x2)}
        y={mid(y1, y2)}
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="24px"
        style={{ cursor: "default" }}
        {...hoverBehavior}
      >
        {label}
      </text>
    </>
  );
}

export default Box;