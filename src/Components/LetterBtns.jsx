import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeMove } from '../app/actions';
import { getAvailLetterIds } from '../app/reducers/index';

function LetterBtns() {
  const alphabet = [
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
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const availLetterIds = useSelector(getAvailLetterIds);

  const dispatch = useDispatch();

  function handleClick(e) {
    const letter = e.target.getAttribute('data-letter');
    dispatch(makeMove(letter));
  }

  const letterListItems = alphabet.map((letter) => {
    const isDisabled = !availLetterIds.includes(letter.toLowerCase());

    // fixme: list class names?

    return (
      <li key={letter.toLowerCase()} className="l-list__item">
        <button
          type="button"
          className="o-btn o-btn--letter"
          data-letter={letter.toLowerCase()}
          onClick={handleClick}
          disabled={isDisabled}
        >
          {letter}
        </button>
      </li>
    );
  });

  return <ul className="l-list">{letterListItems}</ul>;
}

export default LetterBtns;
