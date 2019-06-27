import React from 'react';

function intersection(start: number, end: number, point: number): number {
  return (point - start) / (end - start);
}

interface Vector {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

type BoxCoords = [number, number, number, number];

function clipToBox(v: Vector, [left, top, right, bottom]: BoxCoords) {
  let t = Math.min(...[
    intersection(v.x1, v.x2, left),
    intersection(v.x1, v.x2, right),
    intersection(v.y1, v.y2, top),
    intersection(v.y1, v.y2, bottom),
  ].filter((t) => t > 0));
  return [(1 - t) * v.x1 + t * v.x2, (1 - t) * v.y1 + t * v.y2];
}

function boxCoords(x: number, y: number): BoxCoords {
  return [200 * x - 100, 70 * y, 200 * x - 50, 70 * y + 50];
}

function Arrow({ fromX, fromY, toX, toY }: { fromX: number, fromY: number, toX: number, toY: number }) {
  let v: Vector = {
    x1: 200 * fromX - 75,
    y1: 70 * fromY + 25,
    x2: 200 * toX - 75,
    y2: 70 * toY + 25,
  };
  function reverse(v: Vector): Vector {
    return {
      x1: v.x2,
      y1: v.y2,
      x2: v.x1,
      y2: v.y1,
    };
  }
  [v.x1, v.y1] = clipToBox(v, boxCoords(fromX, fromY));
  [v.x2, v.y2] = clipToBox(reverse(v), boxCoords(toX, toY));
  return (
    <>
      <line
        x1={v.x1}
        y1={v.y1}
        x2={v.x2}
        y2={v.y2}
        stroke="black"
      />
    </>
  );
}

export default Arrow;