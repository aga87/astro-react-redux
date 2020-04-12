import React from 'react';

import OptionsBtn from './Components/OptionsBtn';
import OptionsModal from './Components/OptionsModal';
import Level from './Components/Level';
import RoundProgress from './Components/RoundProgress';
import LetterBtns from './Components/LetterBtns';
import PassBtn from './Components/PassBtn';
import StartBtn from './Components/StartBtn';

import PointsPL1 from './Components/PointsPL1';
import PointsPL2 from './Components/PointsPL2';

import GameOverModal from './Components/GameOverModal';
import QuitGameModal from './Components/QuitGameModal';

// fixme: https://eslint.org/docs/rules/arrow-parens

// todo: audio

// todo: head, import fonts

function App() {
  return (
    <div>
      <OptionsBtn />
      <OptionsModal />
      <GameOverModal />

      <Level />
      <StartBtn />
      <RoundProgress />
      <LetterBtns />
      <PassBtn />
      <PointsPL1 />
      <PointsPL2 />
      <QuitGameModal />
    </div>
  );
}

export default App;
