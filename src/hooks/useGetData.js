import baseUrl from "../Api/baseURL";

const useGetData = async (url, parmas) => {
  const res = await baseUrl.get(url, parmas);
  return res.data;
};

const useGetDataToken = async (url, parmas) => {
  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2ZhMmM0ZTk4NTdhZGVhOTFiNmViNDMiLCJpYXQiOjE2ODExMzk5MDcsImV4cCI6MTY4ODkxNTkwN30.QcOmJPUiGRBZN8RJi_ZiEKVirBIzkbby6JtIOoDmr44",
    },
  };
  const res = await baseUrl.get(url, config);
  return res.data;
};

export { useGetData, useGetDataToken };
