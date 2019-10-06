import React from "react";
import { ScoreContainer, PlayerContainer } from "../styled";
import { useGameStateContext } from "../useGameContext";

export default function PlayerScores() {
  const { playerAScore, playerBScore } = useGameStateContext();

  return (
    <ScoreContainer>
      <PlayerContainer>
        <h4>Player A</h4>
        <div>Score: {playerAScore}</div>
      </PlayerContainer>
      <PlayerContainer>
        <h4>Player B</h4>
        <div>Score: {playerBScore}</div>
      </PlayerContainer>
    </ScoreContainer>
  );
}
