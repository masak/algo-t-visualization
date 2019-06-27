export type ID = number;

export interface Node {
  id: ID;
  x: number;
  y: number;
}

export interface Edge {
  from: ID;
  to: ID;
}

