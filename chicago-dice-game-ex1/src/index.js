import './styles.css';

import React from 'react';
import ReactDOM from 'react-dom';

import DiceBoard from './components/DiceBoard';
import GameProgress from './components/GameProgress';
import PlayerScores from './components/PlayerScores';
import RollDiceButton from './components/RollDiceButton';
import { GameProvider } from './provider';

// if (process.env.NODE_ENV === 'development') {
//   const whyDidYouRender = require('@welldone-software/why-did-you-render');
//   whyDidYouRender(React, {
//     onlyLogs: true,
//     //include: [/^DiceBoard/]
//     include: [/^[/A-za-z/]/]
//   });
// }

function App() {
  return (
    <div className="App">
      <GameProvider>
        <GameProgress />
        <DiceBoard />
        <RollDiceButton />
        <PlayerScores />
      </GameProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
