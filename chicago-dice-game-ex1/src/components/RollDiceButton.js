import React from "react";
import { Button } from "../styled";
import { ACTION_TYPES } from "../provider";
import { useGameStateContext, useGameDispatchContext } from "../useGameContext";

export default function RollDiceButton() {
  const { playerTurn, gameEnded } = useGameStateContext();
  const dispatch = useGameDispatchContext();

  function handleClick() {
    dispatch({
      type: ACTION_TYPES.initRoll,
      payload: playerTurn
    });
  }
  return (
    <Button onClick={handleClick} disabled={gameEnded}>
      Roll the Dice
    </Button>
  );
}
