import { List, Map, Range } from 'immutable';

export const range2d = (a, b) =>
  // returns an Array of List pairs.

  // flat map concats the inner arrays, so we get each row's coords
  // directly after the last, in the same outer Array
  Range(0, a)
    .flatMap((_, x) =>
      // this is an array of coords
      Range(0, b).map((_, y) => List([x, y]))
    )
    .toList();

export const rand = chance => Math.random() < chance;

export const sum = nums => nums.reduce((a, b) => a + b, 0);

export const getClsNames = (namedBools, staticNames = '') => {
  const conditionalNames = Object.keys(namedBools).filter(
    name => namedBools[name]
  );
  return `${staticNames} ${conditionalNames.join(' ')}`.trim();
};

export const mapToFunction = (seq, func) => Map(seq.map(x => [x, func(x)]));

export const mapToValue = (seq, value) => Map(seq.map(x => [x, value]));
