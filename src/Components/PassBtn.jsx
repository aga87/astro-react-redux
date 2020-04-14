import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { passTurn } from '../app/actions';
import { passIsAllowed } from '../app/reducers/index';
import passSound from '../audio/pass.mp3';

function PassBtn() {
  const dispatch = useDispatch();
  const isDisabled = !useSelector(passIsAllowed);
  const audioRef = useRef(null);

  function handleClick() {
    const audio = audioRef.current;
    audio.play();
    dispatch(passTurn());
  }

  return (
    <div>
      <button
        type="button"
        className="o-btn"
        disabled={isDisabled}
        onClick={handleClick}
      >
        PASS
      </button>
      <audio src={passSound} ref={audioRef} />
    </div>
  );
}

export default PassBtn;
