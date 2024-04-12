import React from "react";
import Client from "./client";
import Apis from "@/apis";

export const dynamic = "force-dynamic";
export const getData = async function () {
  const data = await Apis.User.getUsdt();
  return data;
};

async function Page() {
  const data = await getData();

  return (
    <div className="flex items-center justify-between">
      <div>
        {data.message}---
        <input type="password"></input>
        <input></input>
      </div>
      <Client></Client>
    </div>
  );
}

export default Page;
