import { fetchUserInfo } from "@/services/user";

const init = ({ state, payload }) => {
  const { dispatch } = payload;
  fetchUserInfo().then((res) => {
    dispatch({
      type: "setUserInfo",
      payload: res.result
    });
  });
  return state;
};

export default init;
