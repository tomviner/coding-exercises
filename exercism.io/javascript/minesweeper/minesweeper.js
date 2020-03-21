// Turn
// +-----+
// | * * |
// |  *  |
// |  *  |
// |     |
// +-----+
// into this:
// +-----+
// |1*3*1|
// |13*31|
// | 2*2 |
// | 111 |
// +-----+

const sum = nums => nums.reduce((a, b) => a + b, 0);

export const annotate = (input) =>  {

  // cast Array keys to Strings
  const map = {};

  input.forEach((row, y) => {
    Array.from(row).forEach((cell, x) =>
      map[[x, y]] = cell
    );
  });

  const isBomb = z => map[z] == '*'

  const neighbours = ([x, y]) => [
    [x-1, y-1], [x, y-1], [x+1, y-1],
    [x-1, y],             [x+1, y],
    [x-1, y+1], [x, y+1], [x+1, y+1],
  ];

  const countAround = z => sum(neighbours(z).map(isBomb)) || ' '

  return input.map((row, y) => (
    Array.from(row).map((cell, x) =>
      cell === ' ' ? countAround([x, y]) : cell
    ).join('')
  ))
}
