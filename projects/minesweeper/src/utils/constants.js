import { Map } from 'immutable';

export const cellSize = 35;

export const gameStates = {
  active: 0,
  won: 1,
  lost: 2,
};

export const stateToName = state => Map(gameStates).flip().get(state);

export const gameFaces = {
  0: '🙂',
  1: '😎',
  2: '😵',
};
