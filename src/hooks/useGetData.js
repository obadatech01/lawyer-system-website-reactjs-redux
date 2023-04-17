import baseUrl from "../Api/baseURL";

const useGetData = async (url) => {
  const res = await baseUrl.get(url);
  return res.data;
};

const useGetDataToken = async (url) => {
  const config = {
    headers: {
      "Authorization":
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2ZhMmM0ZTk4NTdhZGVhOTFiNmViNDMiLCJpYXQiOjE2ODE3NDQ2OTEsImV4cCI6MTY4OTUyMDY5MX0.00OT7hppuan86FzOI1_yQv54TQ-BNfJmBO-JPAFS4Ks",
    },
  };
  const res = await baseUrl.get(url, config);
  return res.data;
};

export { useGetData, useGetDataToken };
