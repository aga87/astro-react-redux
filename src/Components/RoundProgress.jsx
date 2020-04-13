import React from 'react';

import { useSelector } from 'react-redux';

import { getRoundProgress } from '../app/reducers/index';

function RoundProgress() {
  const progress = useSelector(getRoundProgress);

  return <div className="c-round-progress t1">{progress}</div>;
}

export default RoundProgress;
