type Method = "get" | "post";

const methods: Method[] = ["get", "post"];

const timeoutFun = (time = 60000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Timeout");
    }, time);
  });
};

const fetchRequest = async (
  method: Method,
  url: string,
  data: any = {},
  config: any = {}
) => {
  const { headers = {}, ...otherConfig } = config;
  console.log(otherConfig);
  if (method === "get" || otherConfig.paramsOnQuery === true) {
    const params = Object.keys(data)
      .map((key) => `${key}=${data[key]}`)
      .join("&");

    url += "?" + params;
  }
  return Promise.race([
    timeoutFun(),
    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: method === "post" ? JSON.stringify(data) : null,
      ...otherConfig,
    }).then((res) => res.json()),
  ]);
};

const Requests: any = {};

methods.forEach((method) => {
  Requests[method] = (url: string, data = {}, config = {}) => {
    return fetchRequest(method, url, data, config);
  };
});

export default Requests;
