import React from 'react';

import { range2d } from '../utils/utils';
import { cellSize } from '../utils/constants';
import Cell from './cell';
import './board.css';

function Board(props) {
  const { width, height, maps, revealer, isGameOver, setIsGameOver } = props;

  const cells = range2d(width, height).map(z => {

    let setIsRevealed = z => {
      revealer.setRevealed(z);
    }
    return (
      <Cell
        isMine={maps.mines[z]}
        mineCount={maps.counts[z]}
        isRevealed={revealer.isRevealed[z]}
        setIsRevealed={setIsRevealed}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
        key={z}
      />
    );
  });
  const widthPx = cellSize * width + 1;
  const heightPx = cellSize * height + 1;
  const style = { width: widthPx, height: heightPx };
  return (
    <div className="board" style={style}>
      {cells}
    </div>
  );
}

export default Board;
