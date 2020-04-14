import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { resetGame } from '../app/actions';
import menuSound from '../audio/menu.wav';

function PlayAgainBtn() {
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  function handleClick() {
    const audio = audioRef.current;
    audio.play();
    dispatch(resetGame());
  }

  return (
    <div>
      <button
        type="button"
        className="o-btn o-btn--modal"
        onClick={handleClick}
      >
        PLAY AGAIN
      </button>
      <audio src={menuSound} ref={audioRef} />
    </div>
  );
}

export default PlayAgainBtn;
