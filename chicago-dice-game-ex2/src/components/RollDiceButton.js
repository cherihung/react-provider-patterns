import React from "react";
import { Button } from "../styled";
import { useGameContext } from "../useGameContext";

export default function RollDiceButton() {
  const { playerTurn, gameEnded, initRoll } = useGameContext();

  function handleClick() {
    initRoll(playerTurn);
  }
  return (
    <Button onClick={handleClick} disabled={gameEnded}>
      Roll the Dice
    </Button>
  );
}
