import getRandomBook from './app-utils';

// Actions:
export const START_LEVEL = 'START_LEVEL';
export const MAKE_MOVE = 'MAKE_MOVE';
export const PASS_TURN = 'PASS_TURN';
export const OPEN_OPTIONS = 'OPEN_OPTIONS';
export const CLOSE_OPTIONS = 'CLOSE_OPTIONS';
export const RESET_GAME = 'RESET_GAME';
export const QUIT_GAME = 'QUIT_GAME';

// Action creators:

export const startLevel = () => ({
  type: START_LEVEL,
  // Passing the impure getRandomBook function to the action creator
  payload: getRandomBook(),
});

/** Make move
 * @param {string} letter - user's guess/ input
 */

export const makeMove = (letter) => ({
  type: MAKE_MOVE,
  payload: letter,
});

export const passTurn = () => ({
  type: PASS_TURN,
});

export const resetGame = () => ({
  type: RESET_GAME,
});

export const quitGame = () => ({
  type: QUIT_GAME,
});

export const openOptions = () => ({
  type: OPEN_OPTIONS,
});

export const closeOptions = () => ({
  type: CLOSE_OPTIONS,
});
