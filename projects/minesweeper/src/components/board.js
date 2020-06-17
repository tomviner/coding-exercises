import React from 'react';

import { range2d, mapToValue } from '../utils/utils';
import { cellSize } from '../utils/constants';
import Cell from './cell';
import { neighbouringZeros, neighboursForAll } from '../logic/minefield';
import './board.css';

function Board(props) {
  console.log('render Board');
  const {
    width,
    height,
    mines,
    counts,
    revealMap,
    setRevealMap,
    flagMap,
    setFlagMap,
    isGameOver,
    setIsGameOver,
  } = props;

  const coords = range2d(width, height);

  const checkGameOver = (revealMap, flagMap) => {
    const untouched = coords.filter(c =>
      (!(flagMap.get(c) || revealMap.get(c)))
    )

    if (untouched.size === 0) {
      setIsGameOver(true)
    }
  }

  const cells = coords.map(z => {
    const setIsRevealed = (localRevealMap = revealMap) => {
      localRevealMap = localRevealMap.set(z, true);

      if (counts.get(z) === 0) {
        const zeros = neighbouringZeros(z, coords, counts)
        const frontier = neighboursForAll(zeros, coords)
        const reveal = zeros.union(frontier)
        localRevealMap = localRevealMap.merge(mapToValue(reveal, true))
      }

      setRevealMap(localRevealMap);
      checkGameOver(localRevealMap, flagMap)
    };

    const setIsFlagged = (value, localFlagMap = flagMap) => {
      localFlagMap = localFlagMap.set(z, value);

      setFlagMap(localFlagMap);
      checkGameOver(revealMap, localFlagMap)
    };

    return (
      <Cell
        isMine={mines.get(z)}
        mineCount={counts.get(z)}
        isRevealed={revealMap.get(z)}
        setIsRevealed={setIsRevealed}
        isFlagged={flagMap.get(z)}
        setIsFlagged={setIsFlagged}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
        revealMap={revealMap}
        key={z}
        z={z}
      />
    );
  });
  const widthPx = cellSize * width;
  const heightPx = cellSize * height;
  const style = { width: widthPx, height: heightPx };
  return (
    <div className="board" style={style}>
      {cells}
    </div>
  );
}

export default Board;
