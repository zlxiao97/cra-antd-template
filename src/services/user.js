import request from "@/utils/request";

export const fetchUserInfo = async () => {
  return request.get("/user/info");
};
