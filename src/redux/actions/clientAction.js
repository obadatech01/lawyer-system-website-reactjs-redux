import { useGetDataToken } from "../../hooks/useGetData";
import { GET_ALL_CLIENT, GET_ERROR } from "../type";
// import baseURL from '../../Api/baseURL';

export const getAllClient = () => async (dispatch) => {

  try {
    const res = await useGetDataToken('api/v1/clients');
    dispatch({
      type: GET_ALL_CLIENT,
      payload: res
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ERROR,
      payload: "Error " + err,
    });
  }
};