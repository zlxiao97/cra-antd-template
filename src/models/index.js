import init from "./reducers/init";
import config from "@/config/config";
import routes from "@/config/routes";
import serviceConfig from "@/config/service";

const { asyncRoutes } = config;
const { tokenStorageKey } = serviceConfig;

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
  token: localStorage.getItem(tokenStorageKey),
  routes: asyncRoutes ? [] : routes
};
