import React from 'react';
import { Counter } from './Counter';

function App() {
  return (
    <div className="App">
      <p>Pres a number key to increment a counter. Hold down alt to decrement a counter. Reload to reset.</p>
      {[...Array(9)].map((e, i) => <Counter key={i} number={i+1} />)}
    </div>
  );
}

export default App;
