const rand = (chance) => (Math.random() < chance);

const sum = nums => nums.reduce((a, b) => a + b, 0);

export const annotate = (width, height, mineProb) =>  {

  // cast Array keys to Strings
  const map = {};

  Array(width).fill().forEach((_, x) => {
    Array(height).fill().forEach((_, y) => {
      map[[x, y]] = rand(mineProb);
    });
  });

  const neighbours = ([x, y]) => [
    [x-1, y-1], [x, y-1], [x+1, y-1],
    [x-1, y],             [x+1, y],
    [x-1, y+1], [x, y+1], [x+1, y+1],
  ];

  const isBomb = z => map[z] || 0

  const countAround = z => sum(neighbours(z).map(isBomb))

  Array(width).fill().forEach((_, x) => {
    Array(height).fill().forEach((_, y) => {
      map[[x, y]] = map[[x, y]] ? -1 : countAround([x, y]);
    });
  });

  return map;
}
