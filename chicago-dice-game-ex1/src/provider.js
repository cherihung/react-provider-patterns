import produce from 'immer';
import React, { useReducer } from 'react';

const defaultState = {
  dieOne: 0,
  dieTwo: 0,
  round: 1,
  playerAScore: 0,
  playerBScore: 0,
  playerTurn: null,
  rollingDice: false,
  gameEnded: false
};

const ACTION_TYPES = {
  initRoll: "INIT_ROLL",
  updateDice: "UPDATE_DICE_AND_SCORE"
};

const decideTurn = current => {
  return current === "A" ? "B" : "A";
};

const DispatchContext = React.createContext();
const StateContext = React.createContext();

const reducer = (state, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION_TYPES.initRoll: {
        const nextTurn = decideTurn(action.payload);
        draft.rollingDice = true;
        draft.playerTurn = nextTurn;
        if (nextTurn === "A") {
          draft.round++;
        }
        if (state.round === 12 && nextTurn === "B") {
          draft.gameEnded = true;
        }
        return draft;
      }
      case ACTION_TYPES.updateDice: {
        const { dieOne, dieTwo } = action.payload;

        draft.rollingDice = false;
        draft.dieOne = dieOne;
        draft.dieTwo = dieTwo;

        const winning = dieOne + dieTwo === draft.round;
        if (state.playerTurn === "A" && winning) {
          draft.playerAScore++;
        }
        if (state.playerTurn === "B" && winning) {
          draft.playerBScore++;
        }

        return draft;
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  });

const GameProvider = ({ children }) => {
  const initState = {
    ...defaultState
  };

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export { GameProvider, DispatchContext, StateContext, ACTION_TYPES };
