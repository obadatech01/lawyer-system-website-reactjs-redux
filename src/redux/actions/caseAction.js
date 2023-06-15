import { useDeleteDataToken } from "../../hooks/useDeleteData";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertDataToken } from "../../hooks/useInsertData";
import { useUpdateDataToken } from "../../hooks/useUpdateData";
import { CREATE_CASE, DELETE_CASE, GET_ALL_CASE, GET_ONE_CASE, UPDATE_CASE, UPDATE_LIMIT_CASE, UPDATE_PAGE_CASE, UPDATE_SEARCH_CASE } from "../type";
// import baseURL from '../../Api/baseURL';

export const updateLimitCases = (limit) => ({
  type: UPDATE_LIMIT_CASE,
  payload: limit,
});

export const updatePageCases = (page) => ({
  type: UPDATE_PAGE_CASE,
  payload: page,
});

export const updateSearchCases = (search) => ({
  type: UPDATE_SEARCH_CASE,
  payload: search,
});

// get all cases with limit
export const getAllCases = (limit, page, search) => async (dispatch) => {

  try {
    const res = await useGetDataToken(`/api/v1/cases?limit=${limit}&page=${page}&search=${search}`);
    dispatch({
      type: GET_ALL_CASE,
      payload: res
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: GET_ALL_CASE,
      payload: err.response,
    });
  }
};

// get all cases with limit
export const getAllCase = (limit) => async (dispatch) => {

  try {
    const res = await useGetDataToken(`/api/v1/cases?limit=${limit}`);
    dispatch({
      type: GET_ALL_CASE,
      payload: res
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: GET_ALL_CASE,
      payload: err.response,
    });
  }
};

// get all cases with pagination
export const getAllCasePage = (page) => async (dispatch) => {
  try {
    const res = await useGetDataToken(`/api/v1/cases?limit=3&page=${page}`);
    dispatch({
      type: GET_ALL_CASE,
      payload: res
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: GET_ALL_CASE,
      payload: err.response,
    });
  }
};

// create new case
export const createCase = (formData) => async (dispatch) => {
  try {
    const res = await useInsertDataToken(`/api/v1/cases`, formData);
    dispatch({
      type: CREATE_CASE,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: CREATE_CASE,
      payload: err.response,
    });
  }
};

// delete case with id
export const deleteCase = (id) => async (dispatch) => {
  try {
    const res = await useDeleteDataToken(`/api/v1/cases/${id}`);
    dispatch({
      type: DELETE_CASE,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: DELETE_CASE,
      payload: err.response,
    });
  }
};

// update case with id
export const updateCase = (id, data) => async (dispatch) => {
  try {
    const res = await useUpdateDataToken(`/api/v1/cases/${id}`, data);
    dispatch({
      type: UPDATE_CASE,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: UPDATE_CASE,
      payload: err.response,
    });
  }
};

// get one case by id
export const getOneCase = (id) => async (dispatch) => {
  try {
    const res = await useGetDataToken(`/api/v1/cases/${id}`);
    dispatch({
      type: GET_ONE_CASE,
      payload: res,
      loading: true
    });
  } catch (err) {
    dispatch({
      type: GET_ONE_CASE,
      payload: err.response,
    });
  }
};

