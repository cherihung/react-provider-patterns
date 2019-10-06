import { useContext } from 'react';

import { DispatchContext, StateContext } from './provider';

const useGameStateContext = () => {
  const state = useContext(StateContext);

  if (state === undefined) {
    throw new Error("Ut oh, where is my state?");
  }

  return state;
};

const useGameDispatchContext = () => {
  const dispatch = useContext(DispatchContext);

  if (dispatch === undefined) {
    throw new Error("Ut oh, where is my dispatch?");
  }

  return dispatch;
};

export { useGameDispatchContext, useGameStateContext };
