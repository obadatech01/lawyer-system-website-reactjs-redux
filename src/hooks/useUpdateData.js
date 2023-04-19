import baseUrl from "../Api/baseURL";

const useUpdateDataToken = async (url, params) => {
  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.put(url, params, config);
  return res;
};

const useInsUpdateData = async (url, parmas) => {
  const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  }
  const res = await baseUrl.put(url, parmas, config);
  return res;
}

const useUpdateDataWithImageToken = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.put(url, params, config);
  return res;
};

export { useUpdateDataToken, useUpdateDataWithImageToken, useInsUpdateData };
