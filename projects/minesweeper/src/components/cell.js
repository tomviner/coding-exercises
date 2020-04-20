import React, { useState } from 'react';
import { getClsNames } from '../utils/utils';
import { cellSize } from '../utils/constants';
import './cell.css';

function Cell(props) {
  const {
    isMine,
    mineCount,
    isRevealed,
    setIsRevealed,
    isGameOver,
    setIsGameOver,
  } = props;

  // const [isRevealed, setIsRevealed] = useState(false);
  const [isFlagged, setIsFlagged] = useState(false);

  const onClick = e => {
    if (!isGameOver && !isFlagged) {
      setIsRevealed(true);
      if (isMine) {
        setIsGameOver(true);
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
    incorrect = false;

  if (isRevealed || isGameOver) {
    content = isMine ? '💣' : mineCount;
    if (isGameOver) {
      correct = isFlagged && isMine;
      incorrect = isFlagged !== isMine;
    }
  } else {
    content = isFlagged ? '🚩' : '?';
  }

  const classNames = getClsNames({ isRevealed, correct, incorrect }, 'cell');
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
