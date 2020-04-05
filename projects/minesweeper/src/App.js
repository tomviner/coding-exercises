import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board';

function App() {
  return (
    <div className="App">
      <Board width={5} />
    </div>
  );
}

export default App;
