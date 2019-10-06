import React, { useEffect } from "react";
import { random } from "lodash";
import { DiceContainer } from "../styled";

import { useGameContext } from "../useGameContext";

export default function Dice() {
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
}
