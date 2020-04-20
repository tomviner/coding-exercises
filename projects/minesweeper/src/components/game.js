import React, { useState, useEffect } from 'react';

import Board from './board';
import { generateField, Revealer } from '../logic/minefield';
import { sum } from '../utils/utils';
import './game.css';

function Game(props) {
  const [width, setWidth] = useState(9);
  const [isGameOver, setIsGameOver] = useState(false);
  const [mineProb, setMineProb] = useState(0.1);

  const height = width;

  const createNewMaps = () => generateField(width, height, mineProb);
  const [maps, setMaps] = useState(createNewMaps);

  const revealer = new Revealer(width, height);
  // const [revealer, setRevealMap] = useState(revealer);

  useEffect(() => {
    setMaps(generateField(width, height, mineProb));
  }, [width, height, mineProb]);

  const gameOverButton = e => {
    setIsGameOver(!isGameOver);
  };

  const widthIncButton = e => {
    setWidth(width + 1);
  };

  const widthDecButton = e => {
    if (width > 1) {
      setWidth(width - 1);
    }
  };

  const roundToTenth = n => Math.round(10 * n) / 10;

  const mineProbDecButton = e => {
    setMineProb(Math.max(roundToTenth(mineProb - 0.1), 0));
  };

  const mineProbIncButton = e => {
    setMineProb(Math.min(roundToTenth(mineProb + 0.1), 1));
  };

  const newGameButton = e => {
    setIsGameOver(false);
    setMaps(createNewMaps);
  };

  return (
    <div>
      <div>
        Size: <button onClick={widthDecButton}>-</button>
        {width}
        <button onClick={widthIncButton}>+</button>
      </div>
      <div>
        Mines density: <button onClick={mineProbDecButton}>-</button>
        {mineProb}
        <button onClick={mineProbIncButton}>+</button>
      </div>
      <div>Mines: {sum(Object.values(maps.mines))}</div>
      <div>
        Gameover:{' '}
        <button onClick={gameOverButton}>{isGameOver.toString()}</button>
      </div>
      <div>
        New game: <button onClick={newGameButton}>go</button>
      </div>
      <Board
        width={width}
        height={height}
        maps={maps}
        revealer={revealer}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
      />
    </div>
  );
}

export default Game;
