import React from 'react';

import { gameFaces, stateToName } from '../utils/constants';

import './score.css';

function Score(props) {
  const { gameState, minesLeft, newGameButton } = props;

  const face = gameFaces[gameState];
  return (
    <div className="score-container">
      <button className="face" onClick={newGameButton}>
        <span role="img" aria-label={stateToName(gameState)}>
          {face}
        </span>
      </button>
      <span className="score">
        {minesLeft}{' '}
        <span role="img" aria-label="mines left">
          💣
        </span>
      </span>
    </div>
  );
}

export default Score;
