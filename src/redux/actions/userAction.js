import { useDeleteDataToken } from "../../hooks/useDeleteData";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertDataWithImageToken } from "../../hooks/useInsertData";
import { useInsUpdateData, useUpdateDataWithImageToken } from "../../hooks/useUpdateData";
import { CREATE_USER, DELETE_USER, GET_ALL_USER, GET_ONE_USER, UPDATE_PASSWORD, UPDATE_USER } from "../type";
// import baseURL from '../../Api/baseURL';

// get all users with limit
export const getAllUser = (limit) => async (dispatch) => {

  try {
    const res = await useGetDataToken(`/api/v1/users?limit=${limit}`);
    dispatch({
      type: GET_ALL_USER,
      payload: res
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: GET_ALL_USER,
      payload: err.response,
    });
  }
};

// get all users with pagination
export const getAllUserPage = (page) => async (dispatch) => {

  try {
    const res = await useGetDataToken(`/api/v1/users?limit=3&page=${page}`);
    dispatch({
      type: GET_ALL_USER,
      payload: res
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: GET_ALL_USER,
      payload: err.response,
    });
  }
};

// create new user
export const createUser = (formData) => async (dispatch) => {
  try {
    const res = await useInsertDataWithImageToken(`/api/v1/users`, formData);
    dispatch({
      type: CREATE_USER,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: CREATE_USER,
      payload: err.response,
    });
  }
};

// delete user with id
export const deleteUser = (id) => async (dispatch) => {
  try {
    const res = await useDeleteDataToken(`/api/v1/users/${id}`);
    dispatch({
      type: DELETE_USER,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: DELETE_USER,
      payload: err.response,
    });
  }
};

// update user with id
export const updateUser = (id, data) => async (dispatch) => {
  try {
    const res = await useUpdateDataWithImageToken(`/api/v1/users/${id}`, data);
    dispatch({
      type: UPDATE_USER,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: UPDATE_USER,
      payload: err.response,
    });
  }
};

// update user password with id
export const updateUserPassword = (id, data) => async (dispatch) => {
  try {
    const res = await useInsUpdateData(`/api/v1/users/changePassword/${id}`, data);
    dispatch({
      type: UPDATE_PASSWORD,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: UPDATE_PASSWORD,
      payload: err.response,
    });
  }
};

// get one user by id
export const getOneUser = (id) => async (dispatch) => {
  try {
    const res = await useGetDataToken(`/api/v1/users/${id}`);
    dispatch({
      type: GET_ONE_USER,
      payload: res,
      loading: true
    });
  } catch (err) {
    dispatch({
      type: GET_ONE_USER,
      payload: err.response,
    });
  }
};

