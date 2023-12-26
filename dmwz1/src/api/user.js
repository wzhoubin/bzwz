import request from "@/utils/requers";
export const loginApi = (username, password) => {
  return request({
    url: "/user/login",
    method: "post",
    data: { username, password }
  });
};
export const registerApi = (username, password) => {
  return request({
    url: "/user/register",
    method: "post",
    data: {
      username,
      password
    }
  });
};
