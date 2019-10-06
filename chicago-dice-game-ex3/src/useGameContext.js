import { useContext } from 'react';

import { DispatchContext, StateContext } from './provider';

function decideTurn(current) {
  return current === "A" ? "B" : "A";
};

function useGameStateContext() {
  const state = useContext(StateContext);

  if (state === undefined) {
    throw new Error("Ut oh, where is my state?");
  }

  return state;
};

function useGameDispatchContext() {
  const dispatch = useContext(DispatchContext);

  if (dispatch === undefined) {
    throw new Error("Ut oh, where is my dispatch?");
  }

  function initRoll(currentPlayer) {
    const nextTurn = decideTurn(currentPlayer);
    dispatch(draft => {
      draft.rollingDice = true;
      draft.playerTurn = nextTurn;
      if (nextTurn === "A") {
        draft.round++;
      }
      if (draft.round === 12 && nextTurn === "B") {
        draft.gameEnded = true;
      }
    });
  }

    function updateDice({ dieOne, dieTwo }) {
    dispatch(draft => {
      draft.rollingDice = false;
      draft.dieOne = dieOne;
      draft.dieTwo = dieTwo;

      const winning = dieOne + dieTwo === draft.round;
      if (draft.playerTurn === "A" && winning) {
        draft.playerAScore++;
      }
      if (draft.playerTurn === "B" && winning) {
        draft.playerBScore++;
      }
    });
  }

  return { initRoll, updateDice };
};

const useGameContext = () => {
  return [useGameStateContext(), useGameDispatchContext()]
}

export { useGameContext };
