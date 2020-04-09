import React from 'react';

import { useSelector } from 'react-redux';

import { getLevel } from '../app/reducers/index';

function Level() {
  const level = useSelector(getLevel);

  return <div>{level}</div>;
}

export default Level;
