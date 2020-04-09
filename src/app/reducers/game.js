import { PASS_TURN, RESET_GAME, START_LEVEL, MAKE_MOVE } from '../actions';

const initialState = {
  bookKey: [],
  roundProgress: ['MISSION: UNCOVER THE TITLES OF SCI-FI MASTERWORKS'],
  uniqueLettersNo: 0,
  nextTurnIsPL1: true,
  passIsAllowed: false,
  pointsPL1: 0,
  pointsPL2: 0,
  chancesPL1: 8,
  chancesPL2: 8,
  level: 1,
  gameOver: false,
  availLetters: [],
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case START_LEVEL: {
      const randomBook = action.payload;
      // We will compare players' guesses against this array.
      const bookArr = randomBook.toUpperCase().split('');

      const lettersToUnderscores = bookArr.map((letter) => {
        if (letter === ' ') return ' ';
        return '_';
      });

      // Filter the book title array for unique letters (excluding spaces)
      const uniqueLetters = bookArr
        .filter((letter, index, self) => self.indexOf(letter) === index)
        .filter((letter) => letter !== ' ');

      return {
        ...state,
        bookKey: bookArr,
        roundProgress: lettersToUnderscores,
        uniqueLettersNo: uniqueLetters.length,
        availLetters: [
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'W',
          'V',
          'Y',
          'X',
          'Y',
          'Z',
        ],
      };
    }
    case MAKE_MOVE:
      {
        // Get the player's guess
        const guess = action.payload.toUpperCase();

        // Check if the guess is correct, i.e. if the book title contains the letter
        const guessIsCorrect = state.bookKey.some((letter) => letter === guess);

        // Compare the guess against each letter in the book key
        // and replace the respective underscores with the guess
        const updatedRoundProgress = state.bookKey.map((letter, index) => {
          if (letter === guess) return guess;
          return state.roundProgress[index];
        });

        while (state.uniqueLettersNo > 1) {
          if (guessIsCorrect) {
            return {
              ...state,
              roundProgress: updatedRoundProgress,
              uniqueLettersNo: state.uniqueLettersNo - 1,
              passIsAllowed: true,
              availLetters: state.availLetters.filter(
                (letter) => letter !== guess
              ),
            };
          }

          // (if the guess is wrong)
          if (
            // if one of the players has no chances left
            (state.nextTurnIsPL1 && state.chancesPL1 === 0) ||
            (!state.nextTurnIsPL1 && state.chancesPL2 === 0)
          ) {
            return {
              ...state,
              gameOver: true,
            };
          }

          if (state.nextTurnIsPL1) {
            return {
              ...state,
              nextTurnIsPL1: !state.nextTurnIsPL1,
              chancesPL1: state.chancesPL1 - 1,
              passIsAllowed: false,
              availLetters: state.availLetters.filter(
                (letter) => letter !== guess
              ),
            };
          }

          if (!state.nextTurnIsPL1) {
            return {
              ...state,
              nextTurnIsPL1: !state.nextTurnIsPL1,
              chancesPL2: state.chancesPL2 - 1,
              passIsAllowed: false,
              availLetters: state.availLetters.filter(
                (letter) => letter !== guess
              ),
            };
          }
        }
        // (if state.uniqueLettersNo === 1)
        if (guessIsCorrect) {
          if (state.nextTurnIsPL1) {
            return {
              ...state,
              roundProgress: updatedRoundProgress,
              pointsPL1: state.pointsPL1 + 1,
              uniqueLettersNo: state.uniqueLettersNo - 1,
              passIsAllowed: false,
              availLetters: [],
              level: state.level + 1,
            };
          }
          if (!state.nextTurnIsPL1) {
            return {
              ...state,
              roundProgress: updatedRoundProgress,
              pointsPL2: state.pointsPL2 + 1,
              uniqueLettersNo: state.uniqueLettersNo - 1,
              passIsAllowed: false,
              availLetters: [],
              level: state.level + 1,
            };
          }
        }
      }
      // todo: why ESLint asks only for this one break statement?
      break;
    case PASS_TURN:
      return {
        ...state,
        nextTurnIsPL1: !state.nextTurnIsPL1,
        passIsAllowed: false,
      };

    case RESET_GAME:
      return initialState;

    default:
      return state;
  }
};

export default game;

// Selectors

export const getLevel = (state) => `Level ${state.level}`;
export const getRoundProgress = (state) => state.roundProgress.join('');

export const getAvailLetterIds = (state) =>
  state.availLetters.map((letter) => letter.toLowerCase());

export const nextTurnIsPL1 = (state) => state.nextTurnIsPL1;
export const passIsAllowed = (state) => state.passIsAllowed;
export const getChancesPL1 = (state) => state.chancesPL1;
export const getChancesPL2 = (state) => state.chancesPL2;

export const roundIsOver = (state) => {
  if (state.uniqueLettersNo === 0) {
    return true;
  }
  return false;
};

export const getPointsPL1 = (state) => state.pointsPL1;
export const getPointsPL2 = (state) => state.pointsPL2;
export const gameIsOver = (state) => state.gameOver;

export const getWinner = (state) => {
  if (state.pointsPL1 > state.pointsPL2) return 'Player 1 wins';
  if (state.pointsPL1 < state.pointsPL2) return 'Player 2 wins';
  if (state.chancesPL1 > state.chancesPL2) return 'Player 1 wins';
  return 'Player 2 wins';
};
