import { camelCase, lowerFirst, flow } from "lodash";
import { useCallback, useReducer } from "react";

const isKeyInState = (state) => (key) => {
  return Object.keys(state).includes(key);
};

const isSetAction = (type) => type.slice(0, 3) === "set";

const getKeyInActionType = (type) => type?.slice(3) || "";

const isSetterAction = (type, state) =>
  isSetAction(type) &&
  flow(getKeyInActionType, lowerFirst, isKeyInState(state))(type);

const nexTick = (func) => setTimeout(func, 0);

export default (reducer, initValues) => {
  // 自动处理 setXXX action
  const _reducer = useCallback(
    (state, action = {}) => {
      console.log("reducer:", action);
      const { type = "", payload } = action;
      if (isSetterAction(type, state)) {
        const key = flow(getKeyInActionType, lowerFirst)(type);
        return {
          ...state,
          [key]: payload
        };
      }
      return reducer(state, action);
    },
    [reducer]
  );
  const [state, _dispatch] = useReducer(_reducer, initValues);

  // 自动在payload中带上dispatch，便于action互相调用
  const dispatch = (action = {}) => {
    const { type = "", payload = {} } = action;
    if (
      !isSetterAction(type, state) &&
      Object.prototype.toString.call(payload) === "[object Object]"
    ) {
      console.log("dispatch:", action);
      _dispatch({
        type,
        payload: {
          ...payload,
          dispatch
        }
      });
    } else {
      nexTick(() => {
        // 在当前action执行完毕后才dispatch setter action
        console.log("dispatchSetter:", action);
        _dispatch(action);
      });
    }
  };
  return [state, dispatch];
};
