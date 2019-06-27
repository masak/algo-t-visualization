import React from 'react';
import { ID } from '../types';

function Box({ label, x, y }: { label: ID, x: number, y: number }) {
  return (
    <>
      <rect
        x={200 * x - 100}
        y={70 * y}
        width={50}
        height={50}
        fill="white"
        stroke="black"
      />
      <text
        x={200 * x - 75}
        y={70 * y + 25}
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="24px"
      >
        {label}
      </text>
    </>
  );
}

export default Box;