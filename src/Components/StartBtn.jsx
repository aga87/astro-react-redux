import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { startLevel } from '../app/actions';

import { roundIsOver } from '../app/reducers/index';

function StartBtn() {
  const dispatch = useDispatch();

  const isDisabled = !useSelector(roundIsOver);

  function handleClick() {
    dispatch(startLevel());
  }

  // todo: apply styles based on isDisabled

  return (
    <button
      type="button"
      // className="o-btn o-btn--auto"
      className="o-btn"
      onClick={handleClick}
      disabled={isDisabled}
    >
      START
    </button>
  );
}

export default StartBtn;
