import { fetchUserInfo } from "@/services/user";
import config from "@/config/config";
import { get } from "lodash";

const { asyncRoutes } = config;

const init = ({ state, payload }) => {
  const { dispatch } = payload;
  fetchUserInfo().then((res) => {
    if (asyncRoutes) {
      dispatch({
        type: "setRoutes",
        payload: get(res, "result.routes", [])
      });
    }
    dispatch({
      type: "setUserInfo",
      payload: res.result
    });
  });
  return state;
};

export default init;
