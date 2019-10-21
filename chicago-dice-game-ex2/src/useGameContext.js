import { useContext } from 'react';

import { GameContext } from './provider';

const decideTurn = current => {
  return current === "A" ? "B" : "A";
};

const useGameContext = () => {
  const [state, dispatch] = useContext(GameContext);

  if (dispatch === undefined) {
    throw new Error("Must have dispatch defined");
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

  return {
    ...state,
    initRoll,
    updateDice
  };
};

export { useGameContext };
