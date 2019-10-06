import React from "react";
import ReactDOM from "react-dom";

import GameProgress from "./components/GameProgress";
import PlayerScores from "./components/PlayerScores";
import RollDiceButton from "./components/RollDiceButton";
import DiceBoard from "./components/DiceBoard";
import "./styles.css";

import { GameProvider } from "./provider";

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
