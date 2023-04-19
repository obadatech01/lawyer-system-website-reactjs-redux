import baseUrl from "../Api/baseURL";

const useDeleteDataToken = async (url) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.delete(url, config);
  return res.data;
};

export { useDeleteDataToken };
