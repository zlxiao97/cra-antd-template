import init from "./reducers/init";
import config from "@/config/config";
import routes from "@/config/routes";

const { asyncRoutes } = config;

export const reducer = (state, action = {}) => {
  const { type, payload = {} } = action;
  switch (type) {
    case "init":
      init({ state, payload });
      return state;
    default:
      return state;
  }
};

export const initialState = {
  userInfo: {},
  routes: asyncRoutes ? [] : routes
};
