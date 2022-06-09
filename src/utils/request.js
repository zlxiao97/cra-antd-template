import { message, notification } from "antd";
import axios from "axios";
import { get } from "lodash";
import serviceConfig from "@/config/service";
import { loginPath } from "@/config/routes";
import { delay } from ".";

const { timeout, apiPrefix, tokenStorageKey, tokenHeaderKey } = serviceConfig;

const service = axios.create({
  timeout: timeout // 请求超时时间
});

service.interceptors.request.use(
  (config) => {
    // 设置请求头 token等
    if (!config.url.startsWith(apiPrefix)) {
      config.url = `${apiPrefix}${config.url}`;
    }
    const token = localStorage.getItem(tokenStorageKey);
    config.headers[tokenHeaderKey] = token ? `${token}` : "";
    config.params = Object.assign({}, get(config, "params", {}), {
      t: Date.now()
    });
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (!data.success) {
      switch (data.code) {
        case "AUTH200003":
          message.info("请先登录");
          break;
        case "AUTH200004":
          message.info("需要重新登录");
          break;
        default:
          notification.error({
            message: "错误提示",
            description: data.message || "接口返回结果异常",
            duration: null
          });
          break;
      }
      if (["AUTH200004", "AUTH200003"].includes(data.code)) {
        delay(3000).then(() => {
          localStorage.setItem(tokenStorageKey, "");
          window.location.replace(loginPath);
        });
      }
    }
    return data;
  },
  (error) => {
    notification.error({
      description: "您的网络发生异常，无法连接服务器",
      message: "网络异常"
    });
    return Promise.reject(error);
  }
);

const fetch = (method) => (url, options) =>
  service({
    ...options,
    method,
    url
  });

const request = {
  get: fetch("GET"),
  post: fetch("POST")
};

export default request;
