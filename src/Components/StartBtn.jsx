import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLevel } from '../app/actions';
import { roundIsOver } from '../app/reducers/index';
import startSound from '../audio/start.mp3';

function StartBtn() {
  const dispatch = useDispatch();
  const isDisabled = !useSelector(roundIsOver);
  const audioRef = useRef(null);

  function handleClick() {
    dispatch(startLevel());
    const audio = audioRef.current;
    audio.play();
  }

  return (
    <div>
      <button
        type="button"
        className="o-btn"
        onClick={handleClick}
        disabled={isDisabled}
      >
        START
      </button>
      <audio src={startSound} ref={audioRef} />
    </div>
  );
}

export default StartBtn;
