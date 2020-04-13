import React from 'react';

import { range2d } from '../utils/utils';
import Cell from './cell';
import './board.css';

function Board(props) {
  const { width, height, maps, isGameOver, setIsGameOver } = props;

  // const [hideGrid, setHideGrid] = useState(null);

  const cells = range2d(width, height).map(z => {
    return (
      <Cell
        isMine={maps.mines[z]}
        mineCount={maps.counts[z]}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
        key={z}
      />
    );
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
