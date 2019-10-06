import React from 'react';

import { Button } from '../styled';
import { useGameContext } from '../useGameContext';

const RollDiceButton = () => {
  const [state, dispatch] = useGameContext();
  const { playerTurn, gameEnded } = state;
  const { initRoll } = dispatch;

  function handleClick() {
    initRoll(playerTurn);
  }
  return (
    <Button onClick={handleClick} disabled={gameEnded}>
      Roll the Dice
    </Button>
  );
};

export default RollDiceButton;
