import baseUrl from "../Api/baseURL";

const useInsertData = async (url, params) => {
  const res = await baseUrl.post(url, params);
  return res;
};

const useInsertDataToken = async (url, params) => {
  const config = {
    headers: {
      "Content-type": "application/json",
      "Authorization":
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2ZhMmM0ZTk4NTdhZGVhOTFiNmViNDMiLCJpYXQiOjE2ODE3NDQ2OTEsImV4cCI6MTY4OTUyMDY5MX0.00OT7hppuan86FzOI1_yQv54TQ-BNfJmBO-JPAFS4Ks",
    },
  };
  const res = await baseUrl.post(url, params, config);
  return res;
};

const useInsertDataWithImageToken = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization":
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2ZhMmM0ZTk4NTdhZGVhOTFiNmViNDMiLCJpYXQiOjE2ODE3NDQ2OTEsImV4cCI6MTY4OTUyMDY5MX0.00OT7hppuan86FzOI1_yQv54TQ-BNfJmBO-JPAFS4Ks",
    },
  };
  const res = await baseUrl.post(url, params, config);
  return res;
};

export { useInsertData, useInsertDataToken, useInsertDataWithImageToken };
