import { range2d, rand, sum } from '../utils/utils';


export const generate = (width, height, mineProb) =>  {

  // cast Array keys to Strings
  const mineMap = {};
  const countMap = {};
  const coords = range2d(width, height);

  coords.forEach(z => {
    mineMap[z] = rand(mineProb);
  });

  const neighbours = ([x, y]) => [
    [x-1, y-1], [x, y-1], [x+1, y-1],
    [x-1, y],             [x+1, y],
    [x-1, y+1], [x, y+1], [x+1, y+1],
  ];

  // When outside the boundary it's `undefined || 0`
  const isMine = z => mineMap[z] || 0;

  const countAround = z => sum(neighbours(z).map(isMine))

  coords.forEach(z => {
    countMap[z] = countAround(z);
  });

  console.log(
    Object.entries(mineMap),
    Object.entries(countMap),
  );
  return {
    'mines': mineMap,
    'counts': countMap,
  };
}
