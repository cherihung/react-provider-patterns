import React from "react";
import { useGameContext } from "../useGameContext";
import { H2 } from "../styled";

const PlayerProgress = ({ round, playerTurn, dieOne, dieTwo }) => {
  return (
    <H2>
      Target: {round} <br />
      Player {playerTurn} rolled <span>{dieOne + dieTwo}</span>
    </H2>
  );
};

const Winner = ({ playerAScore, playerBScore }) => {
  return playerAScore > playerBScore ? (
    <H2>
      Winner is <span>Player A</span>!{" "}
    </H2>
  ) : playerBScore > playerAScore ? (
    <H2>
      Winner is <span>Player B</span>!
    </H2>
  ) : (
    <H2>
      It's a tie. You are all losers.{" "}
      <span role="img" aria-label="ROFL">
        🤣
      </span>
    </H2>
  );
};

export default function GameProgress() {
  const {
    round,
    playerTurn,
    dieOne,
    dieTwo,
    gameEnded,
    playerAScore,
    playerBScore
  } = useGameContext();
  if (round === 1) {
    return <H2>Welcome to Chicago Dice</H2>;
  }
  return round > 1 && !gameEnded ? (
    <PlayerProgress {...{ round, playerTurn, dieOne, dieTwo }} />
  ) : (
    <Winner {...{ playerAScore, playerBScore }} />
  );
}
