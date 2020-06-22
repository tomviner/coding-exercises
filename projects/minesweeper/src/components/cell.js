import React from 'react';
import { getClsNames } from '../utils/utils';
import { cellSize } from '../utils/constants';
import { List } from 'immutable';
import { gameStates } from '../utils/constants';
import './cell.css';

function Cell(props) {
  const {
    isMine,
    mineCount,
    isRevealed,
    setIsRevealed,
    isFlagged,
    setIsFlagged,
    gameState,
    setGameState,
    z,
  } = props;
  const onClick = e => {
    if (!gameState && !isFlagged) {
      setIsRevealed();
      if (isMine) {
        setGameState(gameStates.lost);
      }
    }
    e.preventDefault();
  };

  const onRightClick = e => {
    setIsFlagged(!isFlagged);
    e.preventDefault();
  };

  let content,
    correct = false,
    incorrect = false,
    mineClass = {};

  if (isRevealed || gameState) {
    if (isMine) {
      content = '💣';
    } else {
      content = mineCount || '';
      mineClass[`m${mineCount}`] = true;
    }
    if (gameState) {
      correct = isFlagged && isMine;
      incorrect = isFlagged !== isMine;
    }
  } else {
    content = isFlagged ? '🚩' : '';
  }

  const classNames = getClsNames(
    { isRevealed, correct, incorrect, isFlagged, isMine, ...mineClass },
    'cell'
  );
  const style = { width: cellSize, height: cellSize };

  return (
    <div
      className={classNames}
      onClick={onClick}
      onContextMenu={onRightClick}
      style={style}
    >
      {content}
    </div>
  );
}

export default Cell;
