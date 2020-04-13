import { mockRandom, resetMockRandom } from 'jest-mock-random';

import { range2d, rand, sum, getClsNames } from './utils';

describe('2d range', () => {
  test('returns all coord pairs', () => {
    expect(range2d(2, 3)).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
    ]);
  });
});

describe('sum', () => {
  test('returns sums of numbers in array', () => {
    expect(sum([1, 2, 3, -10])).toEqual(-4);
  });
});

describe('rand', () => {
  test('returns certain chance as true', () => {
    expect(rand(1)).toEqual(true);
  });

  test('returns hopeless chance as false', () => {
    expect(rand(0)).toEqual(false);
  });
});

describe('getClsNames', () => {
  test('filters by value', () => {
    const trueName = true;
    const falseName = false;
    expect(getClsNames({ trueName, falseName })).toEqual('trueName');
  });

  test('returns static names too', () => {
    expect(getClsNames({ dyn: true }, 'static other')).toEqual(
      'static other dyn'
    );
  });
});
