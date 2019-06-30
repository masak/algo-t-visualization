import React from 'react';
import { ID, Node, Edge } from './types';
import { appWidth, appHeight } from './lengths';
import Box from './components/Box';
import Arrow from './components/Arrow';
import Grid from './components/Grid';

let nodes: Array<Node> = [
  { id: 1, x: 2, y: 1 },
  { id: 2, x: 1, y: 6 },
  { id: 3, x: 3, y: 2 },
  { id: 4, x: 2, y: 3 },
  { id: 5, x: 3, y: 6 },
  { id: 6, x: 1, y: 4 },
  { id: 7, x: 3, y: 4 },
  { id: 8, x: 2, y: 5 },
  { id: 9, x: 2, y: 7 },
];

let edges: Array<Edge> = [
  { from: 1, to: 3 },
  { from: 2, to: 8 },
  { from: 3, to: 7 },
  { from: 4, to: 6 },
  { from: 5, to: 8 },
  { from: 7, to: 4 },
  { from: 7, to: 5 },
  { from: 8, to: 6 },
  { from: 9, to: 2 },
  { from: 9, to: 5 },
];

function n(id: ID): Node {
  let node = nodes.find((node) => node.id === id);
  if (!node) {
    throw new Error(`Node ${id} not found`);
  }
  return node;
}

function App() {
  let boxes = nodes.map((node) => (
    <Box
      key={node.id}
      label={node.id}
      x={node.x}
      y={node.y}
    />
  ));
  let arrows = edges.map((edge, i) => (
    <Arrow
      key={i}
      fromX={n(edge.from).x}
      fromY={n(edge.from).y}
      toX={n(edge.to).x}
      toY={n(edge.to).y}
    />
  ));

  return (
    <svg width={appWidth} height={appHeight} viewBox={`0 0 ${appWidth} ${appHeight}`}>
      <Grid width={appWidth} height={appHeight} />
      { boxes }
      { arrows }
    </svg>
  );
}

export default App;
