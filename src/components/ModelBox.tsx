import React from 'react';
import { ID } from '../types';
import { boxHeight, boxWidth } from "../lengths";
import { BoxCoords } from "./Box";

function boxCoords(x: number, y: number): BoxCoords {
  return [
    80 * x,
    120 * (y - 1),
    80 * x + boxWidth,
    120 * (y - 1) + boxHeight
  ];
}

function mid(v1: number, v2: number) {
  return (v1 + v2) / 2;
}

function ModelBox({ label, x, y }: { label: ID, x: number, y: number }) {
  let [x1, y1, x2, y2] = boxCoords(x, y);
  return (
    <>
      <rect
        x={x1}
        y={y1}
        width={x2 - x1}
        height={y2 - y1}
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
      <rect
        x={x1}
        y={y1 + boxHeight}
        width={x2 - x1}
        height={y2 - y1}
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
      <text
        x={mid(x1, x2)}
        y={mid(y1, y2)}
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="24px"
        style={{ cursor: "default" }}
      >
        {label}
      </text>
    </>
  );
}

export default ModelBox;