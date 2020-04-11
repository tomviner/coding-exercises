import { mockRandom, resetMockRandom } from 'jest-mock-random';

import { range2d } from './utils';

describe('2d range', () => {
  test('returns all coord pairs', () => {
    console.log(range2d);
    const z = range2d(2, 3);
    console.log(z);
    expect(z).toEqual(
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 1],
        [1, 2],
      ]
    );
  });
});
