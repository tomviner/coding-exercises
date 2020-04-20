import { mockRandom, resetMockRandom } from 'jest-mock-random';

import { generateField, Revealer } from './minefield';

describe('minefield generation', () => {
  test('generateField small field safe from mines', () => {
    expect(generateField(1, 1, 0)).toEqual({
      mines: { '0,0': false },
      counts: { '0,0': 0 },
    });
  });

  test('generateField small field full of mines', () => {
    expect(generateField(1, 1, 1)).toEqual({
      mines: { '0,0': true },
      counts: { '0,0': 0 },
    });
  });

  test('generateField medium field with one mine', () => {
    mockRandom([0.001, 0.999, 0.999, 0.999]);
    expect(generateField(2, 2, 0.5)).toEqual({
      mines: {
        '0,0': true,
        '0,1': false,
        '1,0': false,
        '1,1': false,
      },
      counts: {
        '0,0': 0,
        '0,1': 1,
        '1,0': 1,
        '1,1': 1,
      },
    });
    resetMockRandom();
  });

  test('generateField medium field with three mines', () => {
    mockRandom([0.001, 0.001, 0.001, 0.999]);
    expect(generateField(2, 2, 0.5)).toEqual({
      mines: {
        '0,0': true,
        '0,1': true,
        '1,0': true,
        '1,1': false,
      },
      counts: {
        '0,0': 2,
        '0,1': 2,
        '1,0': 2,
        '1,1': 3,
      },
    });
    resetMockRandom();
  });
});

describe('Revealer', () => {
  test('Inialise revealer', () => {
    expect(new Revealer(1, 1)._map).toEqual({ '0,0': false });
  });
});
