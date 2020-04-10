import React from 'react';
import { useSelector } from 'react-redux';
import { getWinner } from '../app/reducers/index';

function WinningMsg() {
  const msg = useSelector(getWinner);

  return <p>{msg}</p>;
}

export default WinningMsg;
