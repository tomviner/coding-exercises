import { List, Set } from 'immutable';
import { range2d, rand, sum, mapToFunction, mapToValue } from '../utils/utils';

export const generateField = (width, height, mineProb) => {
  const coords = range2d(width, height);

  const mineMap = mapToFunction(coords, _ => rand(mineProb));

  // When outside the boundary it'c `undefined || 0`
  const isMine = z => mineMap.get(z) || 0;

  const countAround = z => sum(neighbours(z, coords).map(isMine));

  const countMap = mapToFunction(coords, countAround);

  return {
    mines: mineMap,
    counts: countMap,
  };
};

export const getBoolMap = (width, height, value = false) => mapToValue(range2d(width, height), value)


// prettier-ignore
export const neighbourCoords = ([x, y]) => (
  [
    [x-1, y-1], [x, y-1], [x+1, y-1],
    [x-1, y],             [x+1, y],
    [x-1, y+1], [x, y+1], [x+1, y+1],
  ].map(List)
);

export const neighbours = (z, coords) =>
  neighbourCoords(z).filter(c => coords.includes(c));

export const neighboursForAll = (zs, coords) =>
  Set(zs.flatMap(c => neighbours(c, coords)));

export const neighbouringZeros = (z, coords, counts) => {
  let fronteer = Set([z]);
  let toReveal = Set();
  let lastFrontier

  while (fronteer.size > 0) {
    lastFrontier = Set(fronteer)
    fronteer = Set()

    fronteer = neighboursForAll(lastFrontier, coords)
      .filterNot(c => toReveal.includes(c))
      .filter(c => counts.get(c) === 0)
    toReveal = toReveal.union(fronteer)
  }
  return toReveal;
};
