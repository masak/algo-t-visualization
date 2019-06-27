import React, { useState } from 'react';
import { ID } from '../types';

function Box({ label, x, y }: { label: ID, x: number, y: number }) {
  let [hoverState, setHoverState] = useState(false);

  return (
    <>
      <rect
        x={200 * x - 100}
        y={70 * y}
        width={50}
        height={50}
        fill={hoverState ? "#dfd" : "white"}
        stroke="black"
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
      />
      <text
        x={200 * x - 75}
        y={70 * y + 25}
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="24px"
        style={{ cursor: "default" }}
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
      >
        {label}
      </text>
    </>
  );
}

export default Box;