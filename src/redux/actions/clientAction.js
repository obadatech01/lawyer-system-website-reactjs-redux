import { useDeleteDataToken } from "../../hooks/useDeleteData";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertDataToken } from "../../hooks/useInsertData";
import { useUpdateDataToken } from "../../hooks/useUpdateData";
import { CREATE_CLIENT, DELETE_CLIENT, GET_ALL_CLIENT, GET_ONE_CLIENT, UPDATE_CLIENT } from "../type";
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
      type: GET_ALL_CLIENT,
      payload: err.response,
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
      type: GET_ALL_CLIENT,
      payload: err.response,
    });
  }
};

// create new client
export const createClient = (formData) => async (dispatch) => {
  try {
    const res = await useInsertDataToken(`/api/v1/clients`, formData);
    dispatch({
      type: CREATE_CLIENT,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: CREATE_CLIENT,
      payload: err.response,
    });
  }
};

// delete client with id
export const deleteClient = (id) => async (dispatch) => {
  try {
    const res = await useDeleteDataToken(`/api/v1/clients/${id}`);
    dispatch({
      type: DELETE_CLIENT,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: DELETE_CLIENT,
      payload: err.response,
    });
  }
};

// update client with id
export const updateClient = (id, data) => async (dispatch) => {
  try {
    const res = await useUpdateDataToken(`/api/v1/clients/${id}`, data);
    dispatch({
      type: UPDATE_CLIENT,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: UPDATE_CLIENT,
      payload: err.response,
    });
  }
};

// get one client by id
export const getOneClient = (id) => async (dispatch) => {
  try {
    const res = await useGetDataToken(`/api/v1/clients/${id}`);
    dispatch({
      type: GET_ONE_CLIENT,
      payload: res,
      loading: true
    });
  } catch (err) {
    dispatch({
      type: GET_ONE_CLIENT,
      payload: err.response,
    });
  }
};

