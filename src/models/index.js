import init from "./reducers/init";

export const reducer = (state, action = {}) => {
  const { type, payload = {} } = action;
  switch (type) {
    case "init":
      init({ state, payload });
    default:
      return state;
  }
};

export const initialState = {
  userInfo: {}
};
