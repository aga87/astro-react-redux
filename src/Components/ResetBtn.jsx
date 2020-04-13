import React from 'react';
import { useDispatch } from 'react-redux';

import { resetGame } from '../app/actions';

function ResetBtn() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(resetGame());
  }

  return (
    <button type="button" className="o-btn o-btn--modal" onClick={handleClick}>
      RESET GAME
    </button>
  );
}

export default ResetBtn;
