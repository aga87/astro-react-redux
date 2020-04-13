import React from 'react';
import { useSelector } from 'react-redux';

import { gameIsOver } from '../app/reducers/index';

import WinningMsg from './WinningMsg';
import Star from './Star';
import PlayAgainBtn from './PlayAgainBtn';
import QuitBtn from './QuitBtn';

function GameOverModal() {
  const isOpen = useSelector(gameIsOver);

  return (
    <div className={isOpen ? 'c-modal c-modal--is-open' : 'c-modal'}>
      <div className="c-modal__content">
        <h1 className="t1">GAME OVER</h1>
        <WinningMsg />

        <div>
          <Star /> <Star /> <Star />
        </div>

        <PlayAgainBtn />
        <QuitBtn />

        <div>
          <Star /> <Star /> <Star />
        </div>
      </div>
    </div>
  );
}

export default GameOverModal;
