import React from 'react';

interface Vector {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

function angleOff(v: Vector, angleDegrees: number, distance: number): [number, number] {
  let originalAngleRadians = Math.atan2(v.y2 - v.y1, v.x2 - v.x1);
  let newAngleRadians = originalAngleRadians + angleDegrees * Math.PI / 180;
  return [
    v.x2 + Math.cos(newAngleRadians) * distance,
    v.y2 + Math.sin(newAngleRadians) * distance,
  ]
}

function ModelArrow({ x, y }: { x: number, y: number }) {
  return (
    <>
      <line
        x1={80 * x + 20}
        y1={120 * (y - 1) - 60}
        x2={80 * x + 20}
        y2={120 * (y - 1)}
        stroke="black"
        strokeWidth="2"
      />
      <circle
        cx={80 * x + 20}
        cy={120 * (y - 1) - 60}
        r={4}
        stroke="none"
        fill="black"
      />
    </>
  );
}

export default ModelArrow;