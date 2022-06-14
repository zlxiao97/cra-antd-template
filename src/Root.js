import { useModel } from "./context/model";
import Router from "./router";
import config from "./config/config";
import serviceConfig from "./config/service";
import Login from "@/pages/Login";

const { auth } = config;
const { tokenStorageKey } = serviceConfig;

const Root = () => {
  const [token, dispatch] = useModel("token");
  if (auth && !token) {
    const setToken = (userToken) => {
      localStorage.setItem(tokenStorageKey, userToken);
      dispatch({
        type: "setToken",
        payload: userToken
      });
    };
    return <Login setToken={setToken} />;
  }
  return <Router />;
};

export default Root;
