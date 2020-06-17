import React, { useState, useEffect } from 'react';

import Board from './board';
import { generateField, getBoolMap } from '../logic/minefield';
import { sum } from '../utils/utils';
import './game.css';

function Game(props) {
  console.log('render Game');
  const [width, setWidth] = useState(9);
  const [isGameOver, setIsGameOver] = useState(false);
  const [mineProb, setMineProb] = useState(0.1);

  const height = width;

  const createNewMaps = () => generateField(width, height, mineProb);
  const [{ mines, counts }, setMaps] = useState(createNewMaps);

  const createNewBoolMap = () => getBoolMap(width, height);
  const [revealMap, setRevealMap] = useState(createNewBoolMap);
  const [flagMap, setFlagMap] = useState(createNewBoolMap);

  useEffect(() => {
    setMaps(generateField(width, height, mineProb));
    setRevealMap(getBoolMap(width, height));
    setFlagMap(getBoolMap(width, height));
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
    setRevealMap(createNewBoolMap);
    setFlagMap(createNewBoolMap);
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
      <div>Mines: {sum(mines.valueSeq())}</div>
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
        mines={mines}
        counts={counts}
        revealMap={revealMap}
        setRevealMap={setRevealMap}
        flagMap={flagMap}
        setFlagMap={setFlagMap}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
      />
    </div>
  );
}

export default Game;
