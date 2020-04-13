import React, { useState } from 'react';

import Board from './board';
import { generate } from '../logic/minefield';
import './game.css';

function Game(props) {
  const [width, setWidth] = useState(5);
  const [isGameOver, setIsGameOver] = useState(false);
  const [mineProb, setMineProb] = useState(0.3);

  const height = width;

  const createNewMaps = () => generate(width, height, mineProb);
  const [maps, setMaps] = useState(createNewMaps);

  const gameOverButton = e => {
    setIsGameOver(!isGameOver);
  };

  const widthIncButton = e => {
    setWidth(width + 1);
    setMaps(createNewMaps);
  };

  const widthDecButton = e => {
    if (width > 1) {
      setWidth(width - 1);
      setMaps(createNewMaps);
    }
  };

  const mineProbDecButton = e => {
    setMineProb(Math.max(mineProb - 0.1, 0));
    setMaps(createNewMaps);
  };

  const mineProbIncButton = e => {
    setMineProb(Math.min(mineProb + 0.1, 1));
    setMaps(createNewMaps);
  };

  const newGameButton = e => {
    setMaps(createNewMaps);
  }


  return (
    <div>
      <div>
        Size
        <button onClick={widthDecButton}>-</button>
        {width}
        <button onClick={widthIncButton}>+</button>
      </div>
      <div>
        Mines density
        <button onClick={mineProbDecButton}>-</button>
        {mineProb}
        <button onClick={mineProbIncButton}>+</button>
      </div>
      <div>
        gameover
        <button onClick={gameOverButton}>{isGameOver.toString()}</button>
      </div>
      <div>
        <button onClick={newGameButton}>new game</button>
      </div>
      <Board
        width={width}
        height={height}
        maps={maps}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
      />
    </div>
  );
}

export default Game;
