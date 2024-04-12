"use client";

import React from "react";
import useUserStore from "@/stores/user";
import Apis from "@/apis";
import CryptoJs from "crypto-js";

function Index() {
  let [loginForm, setLoginForm] = React.useState({
    username: "",
    password: "",
  });
  const userinfo = useUserStore((state: any) => state.userinfo);
  const setUserInfo = useUserStore((state: any) => state.setUserInfo);
  const formChange = (key: string, value: any) => {
    setLoginForm((state) => {
      return {
        ...state,
        [key]: value.target.value,
      };
    });
  };
  const login = async () => {
    const res = await Apis.User.userLogin({
      username: loginForm.username,
      password: CryptoJs.MD5(loginForm.password).toString(),
    });
    // cookies().set("auth_token", res.data.accessToken);
  };

  return (
    <div className="text-[white]">
      <div>
        用户名：
        <input
          type="text"
          value={loginForm.username}
          onChange={(e) => formChange("username", e)}
        />
      </div>
      <div>
        密码：
        <input
          type="text"
          value={loginForm.password}
          onChange={(e) => formChange("password", e)}
        />
      </div>
      <button onClick={login}>登录</button>
    </div>
  );
}

export default Index;
