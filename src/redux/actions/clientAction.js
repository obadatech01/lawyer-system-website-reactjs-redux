import { useDeleteDataToken } from "../../hooks/useDeleteData";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertDataToken } from "../../hooks/useInsertData";
import { useUpdateDataToken } from "../../hooks/useUpdateData";
import { CREATE_CLIENT, DELETE_CLIENT, GET_ALL_CLIENT, GET_ONE_CLIENT, UPDATE_CLIENT, UPDATE_LIMIT_CLIENT, UPDATE_PAGE_CLIENT, UPDATE_SEARCH_CLIENT } from "../type";
// import baseURL from '../../Api/baseURL';

export const updateLimitClients = (limit) => ({
  type: UPDATE_LIMIT_CLIENT,
  payload: limit,
});

export const updatePageClients = (page) => ({
  type: UPDATE_PAGE_CLIENT,
  payload: page,
});

export const updateSearchClients = (search) => ({
  type: UPDATE_SEARCH_CLIENT,
  payload: search,
});

// get all clients with limit
export const getAllClients = (limit, page, search) => async (dispatch) => {

  try {
    const res = await useGetDataToken(`/api/v1/clients?limit=${limit}&page=${page}&search=${search}`);
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

