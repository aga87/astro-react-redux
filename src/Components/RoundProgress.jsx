import React from 'react';

import { useSelector } from 'react-redux';

import { getRoundProgress } from '../app/reducers/index';

function RoundProgress() {
  // fixme: c-book

  const progress = useSelector(getRoundProgress);

  return <div className="o-book t1">{progress}</div>;
}

export default RoundProgress;
