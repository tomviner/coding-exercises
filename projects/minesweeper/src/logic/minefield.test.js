import { mockRandom, resetMockRandom } from 'jest-mock-random';

import { generate } from './minefield';

describe('minefield generation', () => {
  test('generate small field safe from mines', () => {
    expect(generate(1, 1, 0)).toEqual(
      {
        'mines': {'0,0': false},
        'counts': {'0,0': 0},
      }
    );
  });

  test('generate small field full of mines', () => {
    expect(generate(1, 1, 1)).toEqual(
      {
        'mines': {'0,0': true},
        'counts': {'0,0': 0},
      }
    );
  });

  test('generate medium field with one mine', () => {
    mockRandom([0.001, 0.999, 0.999, 0.999]);
    expect(generate(2, 2, 0.5)).toEqual(
      {
        'mines': {
          '0,0': true,
          '0,1': false,
          '1,0': false,
          '1,1': false,
        },
        'counts': {
          '0,0': 0,
          '0,1': 1,
          '1,0': 1,
          '1,1': 1,
        },
      }
    );
    resetMockRandom();
  });

  test('generate medium field with three mines', () => {
    mockRandom([0.001, 0.001, 0.001, 0.999]);
    expect(generate(2, 2, 0.5)).toEqual(
      {
        'mines': {
          '0,0': true,
          '0,1': true,
          '1,0': true,
          '1,1': false,
        },
        'counts': {
          '0,0': 2,
          '0,1': 2,
          '1,0': 2,
          '1,1': 3,
        },
      }
    );
    resetMockRandom();
  });
});
