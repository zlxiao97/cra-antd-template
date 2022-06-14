import request from "@/utils/request";

export const fetchUserInfo = async () => {
  return request.get("/user/info");
};

export const loginUser = async (data) => {
  return request.post("/login", {
    data
  });
};
