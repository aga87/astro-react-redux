import {
  PASS_TURN,
  RESET_GAME,
  START_LEVEL,
  MAKE_MOVE,
  OPEN_OPTIONS,
  CLOSE_OPTIONS,
  QUIT_GAME,
  AUDIO_ENDED
} from '../actions';

const initialState = {
  ids: ['menuSound', 'guessSound', 'passSound', 'startSound'],
  isPlaying: false,
  currentId: 'menuSound'
};

const audio = (state = initialState, action) => {
  switch (action.type) {
    case RESET_GAME:
    case OPEN_OPTIONS:
    case CLOSE_OPTIONS:
    case QUIT_GAME: {
      return {
        ...state,
        isPlaying: true,
        currentId: 'menuSound'
      };
    }
    case START_LEVEL: {
      return {
        ...state,
        isPlaying: true,
        currentId: 'startSound'
      };
    }
    case MAKE_MOVE: {
      return {
        ...state,
        isPlaying: true,
        currentId: 'guessSound'
      };
    }
    case PASS_TURN: {
      return {
        ...state,
        isPlaying: true,
        currentId: 'passSound'
      };
    }
    case AUDIO_ENDED: {
      return {
        ...state,
        isPlaying: false
      };
    }

    default:
      return state;
  }
};

export default audio;

export const isPlaying = state => state.isPlaying;
export const getCurrentId = state => state.currentId;
