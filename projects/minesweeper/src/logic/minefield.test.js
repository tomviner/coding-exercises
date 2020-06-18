import { mockRandom, resetMockRandom } from 'jest-mock-random';
import { Map, List, Set } from 'immutable';

import {
  generateField,
  getBoolMap,
  neighbours,
  neighbourCoords,
  neighbouringZeros,
} from './minefield';
import { range2d } from '../utils/utils';

describe('minefield generation', () => {
  test('generateField small field safe from mines', () => {
    expect(generateField(1, 1, 0)).toEqual({
      mines: Map([[List([0, 0]), false]]),
      counts: Map([[List([0, 0]), 0]]),
    });
  });

  test('generateField small field full of mines', () => {
    expect(generateField(1, 1, 1)).toEqual({
      mines: Map([[List([0, 0]), true]]),
      counts: Map([[List([0, 0]), 0]]),
    });
  });

  test('generateField medium field with one mine', () => {
    mockRandom([0.001, 0.999, 0.999, 0.999]);
    expect(generateField(2, 2, 0.5)).toEqual({
      mines: Map([
        [List([0, 0]), true],
        [List([0, 1]), false],
        [List([1, 0]), false],
        [List([1, 1]), false],
      ]),
      counts: Map([
        [List([0, 0]), 0],
        [List([0, 1]), 1],
        [List([1, 0]), 1],
        [List([1, 1]), 1],
      ]),
    });
    resetMockRandom();
  });

  test('generateField medium field with three mines', () => {
    mockRandom([0.001, 0.001, 0.001, 0.999]);
    expect(generateField(2, 2, 0.5)).toEqual({
      mines: Map([
        [List([0, 0]), true],
        [List([0, 1]), true],
        [List([1, 0]), true],
        [List([1, 1]), false],
      ]),
      counts: Map([
        [List([0, 0]), 2],
        [List([0, 1]), 2],
        [List([1, 0]), 2],
        [List([1, 1]), 3],
      ]),
    });
    resetMockRandom();
  });
});

describe('getBoolMap', () => {
  test('Initialise revealMap', () => {
    expect(getBoolMap(1, 1)).toEqual(Map([[List([0, 0]), false]]));
  });
});

describe('Neighbours', () => {
  test('neighbourCoords', () => {
    expect(neighbourCoords([2, 7])).toEqual([
      List([1, 6]),
      List([2, 6]),
      List([3, 6]),
      List([1, 7]),
      List([3, 7]),
      List([1, 8]),
      List([2, 8]),
      List([3, 8]),
    ]);
  });

  test('neighbours at edge', () => {
    const ns = neighbours(List([1, 0]), range2d(2, 2));
    expect(ns).toEqual([List([0, 0]), List([0, 1]), List([1, 1])]);
  });

  test('neighbouringZeros 2 x 2', () => {
    const counts = Map([
      [List([0, 0]), 1],
      [List([0, 1]), 0],
      [List([1, 0]), 0],
      [List([1, 1]), 0],
    ]);
    const ns = neighbouringZeros(List([0, 0]), range2d(2, 2), counts);
    expect(ns).toEqual(Set([List([1, 0]), List([0, 1]), List([1, 1])]));
  });

  test('neighbouringZeros 1 x 4', () => {
    const counts = Map([
      [List([0, 0]), 0],
      [List([0, 1]), 0],
      [List([0, 2]), 0],
      [List([0, 3]), 0],
    ]);
    const ns = neighbouringZeros(List([0, 0]), range2d(1, 4), counts);
    expect(ns).toEqual(
      Set([List([0, 0]), List([0, 1]), List([0, 2]), List([0, 3])])
    );
  });
});
