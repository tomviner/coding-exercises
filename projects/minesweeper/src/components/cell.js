import React, { useState, useEffect } from 'react';
import './cell.css';

function Cell() {
  const [isMine, setIsMine] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div
      className="cell"
      style={{
        backgroundColor: isHidden ? 'black' : 'white',
      }}
    >
      <p>{isMine ? '*' : '-'}</p>
      <button onClick={() => setIsHidden(!isHidden)}>Toggle</button>
    </div>
  );
}

export default Cell;
