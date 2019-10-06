import React from 'react';

import { ACTION_TYPES } from '../provider';
import { Button } from '../styled';
import { useGameDispatchContext, useGameStateContext } from '../useGameContext';

const RollDiceButton = () => {
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

export default RollDiceButton;