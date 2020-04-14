import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeMove } from '../app/actions';
import { getAvailLetterIds } from '../app/reducers/index';
import { alphabet } from '../app/game-setup';
import guessSound from '../audio/guess.mp3';

function LetterBtns() {
  const availLetterIds = useSelector(getAvailLetterIds);
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  function handleClick(e) {
    const letter = e.target.getAttribute('data-letter');
    dispatch(makeMove(letter));
    const audio = audioRef.current;
    audio.play();
  }

  const letterListItems = alphabet.map((letter) => {
    const isDisabled = !availLetterIds.includes(letter.toLowerCase());

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

  return (
    <div>
      <ul className="l-list">{letterListItems}</ul>
      <audio src={guessSound} ref={audioRef} />
    </div>
  );
}

export default LetterBtns;
