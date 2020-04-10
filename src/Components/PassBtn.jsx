import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { passTurn } from '../app/actions';

import { passIsAllowed } from '../app/reducers/index';

function PassBtn() {
  const dispatch = useDispatch();

  const isDisabled = !useSelector(passIsAllowed);

  function handleClick() {
    dispatch(passTurn());
  }

  return (
    <button
      type="button"
      className="o-btn o-btn--auto"
      disabled={isDisabled}
      onClick={handleClick}
    >
      PASS
    </button>
  );
}

export default PassBtn;
