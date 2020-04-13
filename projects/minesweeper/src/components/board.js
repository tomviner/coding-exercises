import React, { useState } from 'react';

import { generate } from '../logic/minefield';
import { range2d } from '../utils/utils';
import Cell from './cell';
import './board.css';

function Board(props) {
  const { width, mineProb } = props;
  const height = width;

  const { mines, counts } = generate(width, height, mineProb);

  // const [hideGrid, setHideGrid] = useState(null);

  const cells = range2d(width, height).map(z => {
    return <Cell isMine={mines[z]} mineCount={counts[z]} key={z} />;
  });
  const widthPx = 100 * width + 1;
  const heightPx = 100 * height + 1;
  const style = { width: widthPx, height: heightPx };
  return (
    <div className="board" style={style}>
      {cells}
    </div>
  );
}

export default Board;
