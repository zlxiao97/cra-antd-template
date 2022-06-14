import { fetchUserInfo } from "@/services/user";
import config from "@/config/config";
import { get } from "lodash";

const { asyncRoutes, auth } = config;

const init = ({ state, payload }) => {
  const { dispatch } = payload;
  // 登录页不发请求
  if (!auth || state.token) {
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
  }

  return state;
};

export default init;
