import React from 'react';
import ModelBox from './ModelBox';
import { ID } from "../types";
import { modelOffsetX, modelOffsetY } from "../lengths";

interface Column {
  id: ID,
  count: number,
  sucList: ID[],
}

let columns: Array<Column> = [
  { id: 1, count: 0, sucList: [3] },
  { id: 2, count: 1, sucList: [8] },
  { id: 3, count: 1, sucList: [7] },
  { id: 4, count: 1, sucList: [6] },
  { id: 5, count: 2, sucList: [8] },
  { id: 6, count: 2, sucList: [] },
  { id: 7, count: 1, sucList: [4, 5] },
  { id: 8, count: 2, sucList: [6] },
  { id: 9, count: 0, sucList: [5, 2] },
];

function Model() {
  let boxes = columns.map((column, x) => [
    <ModelBox key={column.id} label={column.count} x={x} y={1} />,
    column.sucList.map((suc, y) => (
      <ModelBox key={y} label={suc} x={x} y={y + 2} />
    )),
  ]);
  return (
    <g transform={`translate(${modelOffsetX} ${modelOffsetY})`}>
      {boxes}
    </g>
  );
}

export default Model;
