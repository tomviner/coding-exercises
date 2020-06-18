import React from 'react';
import { getClsNames } from '../utils/utils';
import { cellSize } from '../utils/constants';
import { List } from 'immutable';
import './cell.css';

function Cell(props) {
  const {
    isMine,
    mineCount,
    isRevealed,
    setIsRevealed,
    isFlagged,
    setIsFlagged,
    isGameOver,
    setIsGameOver,
    z,
  } = props;
  if (z === List([0, 0])) {
    console.log('render Cell. isRevealed', isRevealed);
  }

  const onClick = e => {
    if (!isGameOver && !isFlagged) {
      setIsRevealed();
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
    incorrect = false,
    mineClass = {};

  if (isRevealed || isGameOver) {
    if (isMine) {
      content = '💣'
    } else {
      content = mineCount || '';
      mineClass[`m${mineCount}`] = true;
    }
    if (isGameOver) {
      correct = isFlagged && isMine;
      incorrect = isFlagged !== isMine;
    }
  } else {
    content = isFlagged ? '🚩' : '';
  }


  const classNames = getClsNames({ isRevealed, correct, incorrect, ...mineClass }, 'cell');
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
