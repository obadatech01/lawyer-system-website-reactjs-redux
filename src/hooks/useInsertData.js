import baseUrl from "../Api/baseURL";

const useInsertData = async (url, params) => {
  const res = await baseUrl.post(url, params);
  return res;
};

const useInsertDataToken = async (url, params) => {
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, params, config);
  return res;
};

const useInsertDataWithImageToken = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, params, config);
  return res;
};

export { useInsertData, useInsertDataToken, useInsertDataWithImageToken };
