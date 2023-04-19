import baseUrl from "../Api/baseURL";

const useGetData = async (url) => {
  const res = await baseUrl.get(url);
  return res.data;
};

const useGetDataToken = async (url) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  
  const res = await baseUrl.get(url, config);
  return res.data;
};

export { useGetData, useGetDataToken };
