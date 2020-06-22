import React from 'react';

import { range2d, mapToValue } from '../utils/utils';
import { cellSize, gameStates } from '../utils/constants';
import Cell from './cell';
import { neighbouringZeros, neighboursForAll } from '../logic/minefield';
import './board.css';

function Board(props) {
  const {
    width,
    height,
    mineMap,
    countMap,
    revealMap,
    setRevealMap,
    flagMap,
    setFlagMap,
    gameState,
    setGameState,
  } = props;

  const coords = range2d(width, height);

  const checkGameOver = (revealMap, flagMap) => {
    const untouched = coords.filter(c => !(flagMap.get(c) || revealMap.get(c)));

    if (untouched.size === 0) {
      setGameState(gameStates.won);
    }
  };

  const cells = coords.map(z => {
    const setIsRevealed = (
      localRevealMap = revealMap,
      localFlagMap = flagMap
    ) => {
      localRevealMap = localRevealMap.set(z, true);

      if (countMap.get(z) === 0) {
        const zeros = neighbouringZeros(z, coords, countMap);
        const frontier = neighboursForAll(zeros, coords);
        const reveal = zeros.union(frontier);
        localRevealMap = localRevealMap.merge(mapToValue(reveal, true));
        // unflag any cells included in the cascading reveal
        localFlagMap = localFlagMap.mapEntries(([c, flagged]) => [
          c,
          flagged && !reveal.has(c),
        ]);
      }

      setRevealMap(localRevealMap);
      setFlagMap(localFlagMap);
      checkGameOver(localRevealMap, localFlagMap);
    };

    const setIsFlagged = (value, localFlagMap = flagMap) => {
      localFlagMap = localFlagMap.set(z, value);

      setFlagMap(localFlagMap);
      checkGameOver(revealMap, localFlagMap);
    };

    return (
      <Cell
        isMine={mineMap.get(z)}
        mineCount={countMap.get(z)}
        isRevealed={revealMap.get(z)}
        setIsRevealed={setIsRevealed}
        isFlagged={flagMap.get(z)}
        setIsFlagged={setIsFlagged}
        gameState={gameState}
        setGameState={setGameState}
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
