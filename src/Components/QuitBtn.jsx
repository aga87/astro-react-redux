import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { quitGame } from '../app/actions';
import menuSound from '../audio/menu.mp3';

function QuitBtn() {
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  function handleClick() {
    const audio = audioRef.current;
    audio.play();
    dispatch(quitGame());
  }

  return (
    <div>
      <button
        type="button"
        className="o-btn o-btn--modal"
        onClick={handleClick}
      >
        QUIT GAME
      </button>
      <audio src={menuSound} ref={audioRef} />
    </div>
  );
}

export default QuitBtn;
