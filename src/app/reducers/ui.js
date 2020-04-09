import { OPEN_OPTIONS, CLOSE_OPTIONS, RESET_GAME, QUIT_GAME } from '../actions';

const initialState = {
  optionsModalIsOpen: false,
  quitModalIsOpen: false
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_OPTIONS:
      return {
        ...state,
        optionsModalIsOpen: true
      };
    case CLOSE_OPTIONS:
      return {
        ...state,
        optionsModalIsOpen: false
      };
    case QUIT_GAME:
      return {
        optionsModalIsOpen: false,
        quitModalIsOpen: true
      };
    case RESET_GAME:
      return initialState;
    default:
      return state;
  }
};

export default ui;

export const optionsModalIsOpen = state => state.optionsModalIsOpen;
export const quitModalIsOpen = state => state.quitModalIsOpen;
