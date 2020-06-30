import React from 'react';
import { useSelector } from 'react-redux';
import { nextTurnIsPL1 } from '../app/reducers/index';

function Player1() {
  const isNext = useSelector(nextTurnIsPL1);

  return (
    <div className={isNext ? 'o-player o-player--active' : 'o-player'}>
      Player 1
    </div>
  );
}

export default Player1;
