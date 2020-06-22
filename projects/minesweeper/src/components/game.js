import React, { useState, useEffect } from 'react';

import Board from './board';
import Score from './score';
import { generateField, getBoolMap } from '../logic/minefield';
import { sum } from '../utils/utils';
import { gameStates, stateToName } from '../utils/constants';
import './game.css';

function Game(props) {
  const [width, setWidth] = useState(9);
  const [gameState, setGameState] = useState(gameStates.active);
  const [mineProb, setMineProb] = useState(0.1);

  const height = width;

  const createNewMaps = () => generateField(width, height, mineProb);
  const [{ mineMap, countMap }, setMaps] = useState(createNewMaps);

  const createNewBoolMap = () => getBoolMap(width, height);
  const [revealMap, setRevealMap] = useState(createNewBoolMap);
  const [flagMap, setFlagMap] = useState(createNewBoolMap);

  useEffect(() => {
    setMaps(generateField(width, height, mineProb));
    setRevealMap(getBoolMap(width, height));
    setFlagMap(getBoolMap(width, height));
  }, [width, height, mineProb]);

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
    setGameState(gameStates.active);
    setMaps(createNewMaps);
    setRevealMap(createNewBoolMap);
    setFlagMap(createNewBoolMap);
  };

  const mineCount = sum(mineMap.valueSeq());
  const flagCount = sum(flagMap.valueSeq());
  const minesLeft = mineCount - flagCount;

  return (
    <div className="container">
      <Score
        gameState={gameState}
        minesLeft={minesLeft}
        newGameButton={newGameButton}
      />
      <Board
        width={width}
        height={height}
        mineMap={mineMap}
        countMap={countMap}
        revealMap={revealMap}
        setRevealMap={setRevealMap}
        flagMap={flagMap}
        setFlagMap={setFlagMap}
        gameState={gameState}
        setGameState={setGameState}
      />
      <div className="controls">
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
        <div>Mines: {mineCount}</div>
        <div>State: {stateToName(gameState)}</div>
        <div>
          New game:<button onClick={newGameButton}>go</button>
        </div>
      </div>
    </div>
  );
}

export default Game;
