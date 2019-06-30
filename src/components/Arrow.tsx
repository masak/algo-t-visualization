import React from 'react';
import { BoxCoords, boxCoords, mid } from './Box';

function intersection(start: number, end: number, point: number): number {
  return (point - start) / (end - start);
}

interface Vector {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

function clipToBox(v: Vector, [left, top, right, bottom]: BoxCoords) {
  let t = Math.min(...[
    intersection(v.x1, v.x2, left),
    intersection(v.x1, v.x2, right),
    intersection(v.y1, v.y2, top),
    intersection(v.y1, v.y2, bottom),
  ].filter((t) => t > 0));
  return [(1 - t) * v.x1 + t * v.x2, (1 - t) * v.y1 + t * v.y2];
}

function reverse(v: Vector): Vector {
  return {
    x1: v.x2,
    y1: v.y2,
    x2: v.x1,
    y2: v.y1,
  };
}

function angleOff(v: Vector, angleDegrees: number, distance: number): [number, number] {
  let originalAngleRadians = Math.atan2(v.y2 - v.y1, v.x2 - v.x1);
  let newAngleRadians = originalAngleRadians + angleDegrees * Math.PI / 180;
  return [
    v.x2 + Math.cos(newAngleRadians) * distance,
    v.y2 + Math.sin(newAngleRadians) * distance,
  ]
}

function Arrow({ fromX, fromY, toX, toY }: { fromX: number, fromY: number, toX: number, toY: number }) {
  let [b1x1, b1y1, b1x2, b1y2] = boxCoords(fromX, fromY);
  let [b2x1, b2y1, b2x2, b2y2] = boxCoords(toX, toY);
  let v: Vector = {
    x1: mid(b1x1, b1x2),
    y1: mid(b1y1, b1y2),
    x2: mid(b2x1, b2x2),
    y2: mid(b2y1, b2y2),
  };
  [v.x1, v.y1] = clipToBox(v, boxCoords(fromX, fromY));
  [v.x2, v.y2] = clipToBox(reverse(v), boxCoords(toX, toY));
  let [x2h1, y2h1] = angleOff(v, 135, 15);
  let [x2h2, y2h2] = angleOff(v, -135, 15);
  return (
    <>
      <line
        x1={v.x1}
        y1={v.y1}
        x2={v.x2}
        y2={v.y2}
        stroke="black"
        strokeWidth="2"
      />
      <path d={`M ${v.x2},${v.y2} L ${x2h1},${y2h1}`} stroke="black" strokeWidth="2" />
      <path d={`M ${v.x2},${v.y2} L ${x2h2},${y2h2}`} stroke="black" strokeWidth="2" />
    </>
  );
}

export default Arrow;