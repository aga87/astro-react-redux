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

import './App.scss';

// fixme: https://eslint.org/docs/rules/arrow-parens

// fixme: add normalize to index js rather than to the app?

// todo: audio

function App() {
  return (
    <div className="App">
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
