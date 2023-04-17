import { useGetDataToken } from "../../hooks/useGetData";
import { userInsertDataToken } from "../../hooks/useInsertData";
import { CREATE_CLIENT, GET_ALL_CLIENT, GET_ERROR } from "../type";
// import baseURL from '../../Api/baseURL';

// get all clients with limit
export const getAllClient = (limit) => async (dispatch) => {

  try {
    const res = await useGetDataToken(`/api/v1/clients?limit=${limit}`);
    dispatch({
      type: GET_ALL_CLIENT,
      payload: res
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: GET_ERROR,
      payload: "Error " + err,
    });
  }
};

// get all clients with pagination
export const getAllClientPage = (page) => async (dispatch) => {

  try {
    const res = await useGetDataToken(`/api/v1/clients?limit=3&page=${page}`);
    dispatch({
      type: GET_ALL_CLIENT,
      payload: res
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: GET_ERROR,
      payload: "Error " + err,
    });
  }
};

// create new client
export const createClient = (formData) => async (dispatch) => {
  try {
    const res = await userInsertDataToken(`/api/v1/clients`, formData);
    dispatch({
      type: CREATE_CLIENT,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: GET_ERROR,
      payload: "Error " + err,
    });
  }
};

