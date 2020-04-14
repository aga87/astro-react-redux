import React from 'react';

import OptionsBtn from './Components/OptionsBtn';
import OptionsModal from './Components/OptionsModal';
import Level from './Components/Level';
import RoundProgress from './Components/RoundProgress';
import LetterBtns from './Components/LetterBtns';
import PassBtn from './Components/PassBtn';
import StartBtn from './Components/StartBtn';
import CanvasTankPL1 from './Components/CanvasTankPL1';
import CanvasTankPL2 from './Components/CanvasTankPL2';
import CanvasHeadPL1 from './Components/CanvasHeadPL1';
import CanvasHeadPL2 from './Components/CanvasHeadPL2';
import PointsPL1 from './Components/PointsPL1';
import PointsPL2 from './Components/PointsPL2';
import GameOverModal from './Components/GameOverModal';
import QuitGameModal from './Components/QuitGameModal';

// fixme: https://eslint.org/docs/rules/arrow-parens

// todo: head

// todo: grid fallbacks

function App() {
  return (
    <div>
      <OptionsModal />
      <GameOverModal />
      <QuitGameModal />

      <div className="l-grid">
        <div className="l-grid__item-header">
          <header className="c-header">
            <h1 className="t2">Astroman</h1>
            <nav>
              <OptionsBtn />
            </nav>
          </header>
        </div>
        <div className="l-grid__item-level">
          <Level />
          <StartBtn />
        </div>
        <div className="l-grid__item-book">
          <RoundProgress />
        </div>
        <div className="l-grid__item-letters">
          <LetterBtns />
          <PassBtn />
        </div>

        <div className="l-grid__item-tankPL1">
          <CanvasTankPL1 />
        </div>
        <div className="l-grid__item-headPL1">
          <CanvasHeadPL1 />
        </div>

        {/* todo: u-text-center */}
        <div className="l-grid__item-pointsPL1">
          <PointsPL1 />
        </div>

        {/* todo: u-text-center */}
        <div className="l-grid__item-pointsPL2">
          <PointsPL2 />
        </div>

        <div className="l-grid__item-headPL2">
          <CanvasHeadPL2 />
        </div>

        <div className="l-grid__item-tankPL2">
          <CanvasTankPL2 />
        </div>
      </div>
    </div>
  );
}

export default App;
