import React, { useEffect } from "react";
import { random } from "lodash";
import { DiceContainer } from "../styled";

import { ACTION_TYPES } from "../provider";
import { useGameStateContext, useGameDispatchContext } from "../useGameContext";

export default function Dice() {
  const { dieOne, dieTwo, rollingDice } = useGameStateContext();
  const dispatch = useGameDispatchContext();

  useEffect(() => {
    function rollDice() {
      return {
        dieOne: random(1, 6),
        dieTwo: random(1, 6)
      };
    }

    if (rollingDice) {
      dispatch({
        type: ACTION_TYPES.updateDice,
        payload: rollDice()
      });
    }
  }, [rollingDice, dispatch]);

  return (
    <>
      <DiceContainer>
        <span>{dieOne}</span>
        <span>{dieTwo}</span>
      </DiceContainer>
    </>
  );
}
