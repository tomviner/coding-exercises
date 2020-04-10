import React, { useState, useEffect } from 'react';
import './cell.css';

function Cell(props) {
  const { isMine, mineCount } = props;

  const [isHidden, setIsHidden] = useState(true);
  const [isFlagged, setIsFlagged] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const onClick = (e) => {
    console.log('onClick', isHidden);
    isFlagged || setIsHidden(false);
    e.preventDefault();
  }

  const onRightClick = (e) => {
    console.log('onRightClick', isFlagged);
    setIsFlagged(!isFlagged);
    e.preventDefault();
  }

  return (
    <div
      className="cell"
      style={{
        backgroundColor: isHidden ? 'lightgrey' : 'white',
      }}
    >
      {
        isHidden ?
          <ActiveCell isFlagged={isFlagged} onClick={onClick} onRightClick={onRightClick} /> :
          <InactiveCell isMine={isMine} mineCount={mineCount} />
      }
    </div>
  );
}

function ActiveCell(props) {
  const { isFlagged, onClick, onRightClick } = props;
  const content = isFlagged ? '🚩' : '?';

  return (
    <div
      className="active-cell"
      onClick={onClick}
      onContextMenu={onRightClick}
    >
      {content}
    </div>
  );
}

function InactiveCell(props) {
  const { isMine, mineCount } = props;

  const content = isMine ? '💣' : mineCount;

  return (
    <div
      className="inactive-cell"
      onContextMenu={(e) => e.preventDefault()}
    >
      {content}
    </div>
  )
}

export default Cell;
