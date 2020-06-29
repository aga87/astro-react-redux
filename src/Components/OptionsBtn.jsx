import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { openOptions } from '../app/actions';
import menuSound from '../audio/menu.mp3';

function OptionsBtn() {
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  function handleClick() {
    const audio = audioRef.current;
    audio.play();
    dispatch(openOptions());
  }

  return (
    <div>
      <button type="button" className="o-btn" onClick={handleClick}>
        OPTIONS
      </button>
      <audio src={menuSound} ref={audioRef} />
    </div>
  );
}

export default OptionsBtn;
