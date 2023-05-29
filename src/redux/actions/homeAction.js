import { useGetDataToken } from "../../hooks/useGetData";
import { GET_HOME } from "../type";
// import baseURL from '../../Api/baseURL';

// get all data in home dashboard
export const getAllHome = () => async (dispatch) => {

  try {
    const res = await useGetDataToken('/api/v1/home');
    dispatch({
      type: GET_HOME,
      payload: res
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: GET_HOME,
      payload: err.response,
    });
  }
};

