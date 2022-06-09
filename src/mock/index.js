import Mock from "mockjs";
import serviceConfig from "@/config/service";
import userInfo from "./userInfo";

const { apiPrefix } = serviceConfig;

const allMocks = [].concat(userInfo);

const responseScheme = {
  success: true,
  result: null
};

allMocks.forEach((mock) => {
  Mock.mock(new RegExp(`^${apiPrefix}${mock.api}`, "g"), mock.method, {
    ...responseScheme,
    result: mock.result
  });
});
