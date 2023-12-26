import request from "@/utils/requers";

export const ImgAllApi = () => {
  return request({
    url: "/img/imgall",
    method: "get"
  });
};
// 发送评论
export const PostCommentApi = ({ id, comment }) => {
  return request({
    url: "/img/comment",
    method: "post",
    data: {
      id,
      comment
    }
  });
};
// 获取评论
export const GetCommentApi = (id) => {
  return request({
    method: "get",
    url: "/img/comment",
    params: {
      id
    }
  });
};
export const imgSearchApi = (name) => {
  return request({
    url: "/img/Search",
    method: "post",
    data: {
      name
    }
  });
};
export const BoutiqueApi = () => {
  return request({
    url: "/img/Boutique",
    method: "get"
  });
};
export const PostBoutiqueApi = (name) => {
  return request({
    url: "/img/PostBoutique",
    method: "post",
    data: {
      name
    }
  });
};
// 热门图片
export const GetHotImgApi = () => {
  return request({
    method: "get",
    url: "/img/hot"
  });
};
// 分享图片接口
export const GetshareImgApi = () => {
  return request({
    method: "get",
    url: "/testApi/file"
  });
};
