import baseURL from "../Api/baseURL";

const useGetData = async (url) => {
  const res = await baseURL.get(url);
  return res.data;
};

const useGetDataToken = async (url) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  
  const res = await baseURL.get(url, config);
  return res.data;
};

export { useGetData, useGetDataToken };
