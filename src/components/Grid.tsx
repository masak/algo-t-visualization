import React from 'react';
import {gridSpacing} from '../lengths';

function Grid({ width, height }: { width: number, height: number }) {
  let verticalLines = Array.from({ length: Math.floor(width / gridSpacing) }, (_, i) => (
    <line key={i} x1={i * gridSpacing} y1="0" x2={i * gridSpacing} y2={height} strokeWidth={i % 4 === 0 ? 1 : 0.5} stroke="#333" />
  ));
  let horizontalLines = Array.from({ length: Math.floor(height / gridSpacing) }, (_, i) => (
    <line key={i} x1="0" y1={i * gridSpacing} x2={width} y2={i * gridSpacing} strokeWidth={i % 4 === 0 ? 1 : 0.5} stroke="#333" />
  ));
  return (
    <>
      <rect x="0" y="0" width={width} height={height} fill="white" stroke="red" />
      {verticalLines}
      {horizontalLines}
    </>
  );
}

export default Grid;
