import React from 'react';

import WinningMsg from './WinningMsg';
import Star from './Star';
import PlayAgainBtn from './PlayAgainBtn';
import QuitBtn from './QuitBtn';

function GameOverModal() {
  // jsGameOverModal

  return (
    <div className="c-modal l-modal">
      <div className="c-modal__content l-modal__content">
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
