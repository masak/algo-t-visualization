import React from 'react';

const spacing = 25;

function Grid({ width, height }: { width: number, height: number }) {
  let verticalLines = Array.from({ length: Math.floor(width / spacing) }, (_, i) => (
    <line key={i} x1={i * spacing} y1="0" x2={i * spacing} y2={height} strokeWidth={i % 4 == 0 ? 1 : 0.5} stroke="#333" />
  ));
  let horizontalLines = Array.from({ length: Math.floor(height / spacing) }, (_, i) => (
    <line key={i} x1="0" y1={i * spacing} x2={width} y2={i * spacing} strokeWidth={i % 4 == 0 ? 1 : 0.5} stroke="#333" />
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
