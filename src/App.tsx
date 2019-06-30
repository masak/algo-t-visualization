import React from 'react';
import { appWidth, appHeight } from './lengths';
import Grid from './components/Grid';
import Dag from './components/Dag';

function App() {
  return (
    <svg width={appWidth} height={appHeight} viewBox={`0 0 ${appWidth} ${appHeight}`}>
      <Grid width={appWidth} height={appHeight} />
      <Dag />
    </svg>
  );
}

export default App;
