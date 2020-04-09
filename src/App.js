import React from 'react';

import Level from './Components/Level';
import RoundProgress from './Components/RoundProgress';
import StartBtn from './Components/StartBtn';
import PointsPL1 from './Components/PointsPL1';
import PointsPL2 from './Components/PointsPL2';

import './App.scss';

// fixme: https://eslint.org/docs/rules/arrow-parens

function App() {
  return (
    <div className="App">
      <Level />
      <StartBtn />
      <RoundProgress />
      <PointsPL1 />
      <PointsPL2 />
    </div>
  );
}

export default App;
