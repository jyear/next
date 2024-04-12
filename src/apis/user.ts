const apis = {
  getUsdt: {
    path: "https://test1-api.flipped.space/api/setting/detail/wallet",
    method: "get",
  },
  login: {
    path: `/api/user/login`,
    method: "post",
    paramsOnQuery: true,
  },
  userLogin: {
    path: `http://localhost:3000/apis/user_login`,
    method: "post",
  },
};

export default apis;
