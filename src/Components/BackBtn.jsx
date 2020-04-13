import React from 'react';

import { useDispatch } from 'react-redux';

import { closeOptions } from '../app/actions';

function BackBtn() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(closeOptions());
  }

  return (
    <button type="button" className="o-btn o-btn--modal" onClick={handleClick}>
      BACK
    </button>
  );
}

export default BackBtn;
