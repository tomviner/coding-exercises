import React, { useState, useEffect } from 'react';
import './cell.css';

function Cell(props) {
  const { isMine, mineCount } = props;

  const [isHidden, setIsHidden] = useState(true);
  const [isFlagged, setFlagged] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  if (isHidden) {
    return <ActiveCell />
  } else {
    return <InactiveCell />
  }

  return (
    <div
      className="cell"
      style={{
        backgroundColor: isHidden ? 'lightgrey' : 'white',
      }}
      onClick={() => setIsHidden(!isHidden)}
    >
      <p>{isMine ? '*' : '-'}</p>
    </div>
  );
}

function ActiveCell(props) {
  const [isFlagged, setFlagged] = useState(props.isFlagged);

  if (isFlagged) {
      // flag
    } else {
      // blank
    }
}

function InactiveCell(props) {
  const { isMine, mineCount } = props;

  // isGameOver

  if (isMine) {
    // mine
  } else {
    // neighbouring mine count
  }
}


export default Cell;
