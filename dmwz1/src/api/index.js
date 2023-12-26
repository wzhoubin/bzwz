import request from "@/utils/requers";
export const headnavApi = () => {
  return request({
    url: "/head/headnav",
    method: "get"
  });
};
