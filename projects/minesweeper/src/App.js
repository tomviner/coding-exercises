import React from 'react';
import './App.css';
import Board from './components/board';

function App() {
  return (
    <div className="App">
      <Board width={5} mineProb={0.4} />
    </div>
  );
}

export default App;
