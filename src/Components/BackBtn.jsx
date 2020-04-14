import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { closeOptions } from '../app/actions';
import menuSound from '../audio/menu.wav';

function BackBtn() {
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  function handleClick() {
    const audio = audioRef.current;
    audio.play();
    dispatch(closeOptions());
  }

  return (
    <div>
      <button
        type="button"
        className="o-btn o-btn--modal"
        onClick={handleClick}
      >
        BACK
      </button>
      <audio src={menuSound} ref={audioRef} />
    </div>
  );
}

export default BackBtn;
