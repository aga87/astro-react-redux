import React from 'react';
import { useSelector } from 'react-redux';
import { nextTurnIsPL1 } from '../app/reducers/index';

function Player2() {
  const isNext = !useSelector(nextTurnIsPL1);

  return (
    <div className={isNext ? 'o-player o-player--active' : 'o-player'}>
      Player 2
    </div>
  );
}

export default Player2;
