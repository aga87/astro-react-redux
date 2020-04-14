import { combineReducers } from 'redux';

import game, * as fromGame from './game';
import ui, * as fromUI from './ui';

export default combineReducers({ game, ui });

// Selectors (global state)
export const getLevel = (state) => fromGame.getLevel(state.game);
export const getRoundProgress = (state) =>
  fromGame.getRoundProgress(state.game);
export const getAvailLetterIds = (state) =>
  fromGame.getAvailLetterIds(state.game);
export const nextTurnIsPL1 = (state) => fromGame.nextTurnIsPL1(state.game);
export const passIsAllowed = (state) => fromGame.passIsAllowed(state.game);
export const getChancesPL1 = (state) => fromGame.getChancesPL1(state.game);
export const getChancesPL2 = (state) => fromGame.getChancesPL2(state.game);
export const roundIsOver = (state) => fromGame.roundIsOver(state.game);
export const getPointsPL1 = (state) => fromGame.getPointsPL1(state.game);
export const getPointsPL2 = (state) => fromGame.getPointsPL2(state.game);
export const gameIsOver = (state) => fromGame.gameIsOver(state.game);
export const getWinner = (state) => fromGame.getWinner(state.game);

export const optionsModalIsOpen = (state) =>
  fromUI.optionsModalIsOpen(state.ui);
export const quitModalIsOpen = (state) => fromUI.quitModalIsOpen(state.ui);
