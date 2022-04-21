import { fetchUserInfo } from "@/services/user";

export default ({ state, payload }) => {
  const { dispatch } = payload;
  fetchUserInfo().then((res) => {
    dispatch({
      type: "setUserInfo",
      payload: res.data
    });
  });
  return state;
};
