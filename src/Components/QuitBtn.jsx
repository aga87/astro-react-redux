import React from 'react';

import { useDispatch } from 'react-redux';

import { quitGame } from '../app/actions';

function QuitBtn() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(quitGame());
  }

  return (
    <button type="button" className="o-btn o-btn--modal" onClick={handleClick}>
      QUIT GAME
    </button>
  );
}

export default QuitBtn;
