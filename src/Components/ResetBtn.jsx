import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { resetGame } from '../app/actions';
import menuSound from '../audio/menu.mp3';

function ResetBtn() {
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
        RESET GAME
      </button>
      <audio src={menuSound} ref={audioRef} />
    </div>
  );
}

export default ResetBtn;
