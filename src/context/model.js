import { get } from "lodash";
import React, { useEffect } from "react";
import useStates from "@/hooks/useStates";
import { initialState, reducer } from "@/models";


const ModelContext = React.createContext();

export const ModelProvider = (props) => {
  const [state, dispatch] = useStates(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "init" });
  }, [dispatch]);
  return (
    <ModelContext.Provider value={[state, dispatch]}>
      {props.children}
    </ModelContext.Provider>
  );
};

export const useModel = (path) => {
  const [state, dispatch] = React.useContext(ModelContext);
  const model = path ? get(state, path, {}) : state;
  return [model, dispatch];
};
