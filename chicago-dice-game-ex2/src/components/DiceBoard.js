import { random } from 'lodash';
import React, { useEffect } from 'react';

import { DiceContainer } from '../styled';
import { useGameContext } from '../useGameContext';

const DiceBoard = () => {
  const { dieOne, dieTwo, rollingDice, updateDice } = useGameContext();

  useEffect(() => {
    function rollDice() {
      return {
        dieOne: random(1, 6),
        dieTwo: random(1, 6)
      };
    }

    if (rollingDice) {
      const payload = rollDice();
      updateDice(payload);
    }
  }, [rollingDice, updateDice]);

  return (
    <>
      <DiceContainer>
        <span>{dieOne}</span>
        <span>{dieTwo}</span>
      </DiceContainer>
    </>
  );
};

export default DiceBoard;
