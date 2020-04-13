import React from 'react';

import { useDispatch } from 'react-redux';

import { resetGame } from '../app/actions';

function PlayAgainBtn() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(resetGame());
  }

  return (
    <button type="button" className="o-btn o-btn--modal" onClick={handleClick}>
      PLAY AGAIN
    </button>
  );
}

export default PlayAgainBtn;
