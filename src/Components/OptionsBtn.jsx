import React from 'react';

import { useDispatch } from 'react-redux';

import { openOptions } from '../app/actions';

function OptionsBtn() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(openOptions());
  }

  return (
    <button type="button" className="o-btn o-btn--auto" onClick={handleClick}>
      OPTIONS
    </button>
  );
}

export default OptionsBtn;
