import { useDeleteDataToken } from "../../hooks/useDeleteData";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertDataToken } from "../../hooks/useInsertData";
import { useUpdateDataToken } from "../../hooks/useUpdateData";
import { CREATE_PERMISSION, DELETE_PERMISSION, GET_ALL_PERMISSION, GET_ONE_PERMISSION, UPDATE_PERMISSION } from "../type";
// import baseURL from '../../Api/baseURL';

// get all permissions with limit
export const getAllPermission = (limit) => async (dispatch) => {

  try {
    const res = await useGetDataToken(`/api/v1/permissions?limit=${limit}`);
    dispatch({
      type: GET_ALL_PERMISSION,
      payload: res
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: GET_ALL_PERMISSION,
      payload: err.response,
    });
  }
};

// get all permissions with pagination
export const getAllPermissionPage = (page) => async (dispatch) => {

  try {
    const res = await useGetDataToken(`/api/v1/permissions?limit=3&page=${page}`);
    dispatch({
      type: GET_ALL_PERMISSION,
      payload: res
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: GET_ALL_PERMISSION,
      payload: err.response,
    });
  }
};

// create new permission
export const createPermission = (formData) => async (dispatch) => {
  try {
    const res = await useInsertDataToken(`/api/v1/permissions`, formData);
    dispatch({
      type: CREATE_PERMISSION,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: CREATE_PERMISSION,
      payload: err.response,
    });
  }
};

// delete permission with id
export const deletePermission = (id) => async (dispatch) => {
  try {
    const res = await useDeleteDataToken(`/api/v1/permissions/${id}`);
    dispatch({
      type: DELETE_PERMISSION,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: DELETE_PERMISSION,
      payload: err.response,
    });
  }
};

// update permission with id
export const updatePermission = (id, data) => async (dispatch) => {
  try {
    const res = await useUpdateDataToken(`/api/v1/permissions/${id}`, data);
    dispatch({
      type: UPDATE_PERMISSION,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: UPDATE_PERMISSION,
      payload: err.response,
    });
  }
};

// get one permission by id
export const getOnePermission = (id) => async (dispatch) => {
  try {
    const res = await useGetDataToken(`/api/v1/permissions/${id}`);
    dispatch({
      type: GET_ONE_PERMISSION,
      payload: res,
      loading: true
    });
  } catch (err) {
    dispatch({
      type: GET_ONE_PERMISSION,
      payload: err.response,
    });
  }
};

