import { useContext } from "react";

import { DispatchContext, StateContext } from "./provider";

const useGameStateContext = () => {
  const state = useContext(StateContext);

  if (state === undefined) {
    throw new Error("must be used within a Provider");
  }

  return state;
};

const useGameDispatchContext = () => {
  const dispatch = useContext(DispatchContext);

  if (dispatch === undefined) {
    throw new Error("must be used within a Provider");
  }

  return dispatch;
};

export { useGameDispatchContext, useGameStateContext };
