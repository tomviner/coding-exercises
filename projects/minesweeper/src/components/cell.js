import React, { useState, useEffect } from 'react';
import './cell.css';

function Cell(props) {
  const { isMine, mineCount } = props;

  const [isHidden, setIsHidden] = useState(true);
  const [isFlagged, setIsFlagged] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const onRightClick = (e) => {
    console.log(e);
    setIsFlagged(!isFlagged);
    e.preventDefault();
  }

  return (
    <div
      className="cell"
      style={{
        backgroundColor: isHidden ? 'lightgrey' : 'white',
      }}
      onClick={(e) => {console.log(e.type); setIsHidden(!isHidden)}}
    >
      {
        isHidden ?
          <ActiveCell isFlagged={isFlagged} onRightClick={onRightClick} /> :
          <InactiveCell isMine={isMine} />
      }
    </div>
  );
}

function ActiveCell(props) {
  const { onRightClick } = props;
  const [isFlagged, setFlagged] = useState(props.isFlagged);

  const content = isFlagged ? '🚩' : '-';

  return <div onContextMenu={onRightClick} />
}

function InactiveCell(props) {
  const { isMine, mineCount } = props;

  // isGameOver

  if (isMine) {
    // mine
    return '💣'
  } else {
    // neighbouring mine count
    return '3'
  }
}


export default Cell;
