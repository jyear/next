import User from "./user";
import request from "@/utils/request";
const config = {
  BaseUrl: "https://test1-api.flipped.space",
};

const files: any = {
  User,
};
const apiObj: any = {};

Object.keys(files).forEach((key: string) => {
  const apis: any = files[key];
  if (!apiObj[key]) {
    apiObj[key] = {};
  }
  Object.keys(apis).map((apiKey: string) => {
    apiObj[key][apiKey] = function (
      data: unknown,
      option: unknown
    ): Promise<unknown> {
      const apiItem = apis[apiKey];
      const method = apiItem.method || "get";

      const path = apiItem.path.startsWith("http")
        ? apiItem.path
        : `${config.BaseUrl}${apiItem.path}`;

      return request[method](path, data, {
        ...(option || {}),
        paramsOnQuery: apiItem.paramsOnQuery,
      });
    };
  });
});

export default apiObj;
