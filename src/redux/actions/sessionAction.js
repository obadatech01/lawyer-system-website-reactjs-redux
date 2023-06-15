import { useDeleteDataToken } from "../../hooks/useDeleteData";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertDataToken } from "../../hooks/useInsertData";
import { useUpdateDataToken } from "../../hooks/useUpdateData";
import { CREATE_SESSION, DELETE_SESSION, GET_ALL_SESSION, GET_ONE_SESSION, UPDATE_LIMIT_SESSION, UPDATE_PAGE_SESSION, UPDATE_SEARCH_SESSION, UPDATE_SESSION } from "../type";
// import baseURL from '../../Api/baseURL';

export const updateLimitSessions = (limit) => ({
  type: UPDATE_LIMIT_SESSION,
  payload: limit,
});

export const updatePageSessions = (page) => ({
  type: UPDATE_PAGE_SESSION,
  payload: page,
});

export const updateSearchSessions = (search) => ({
  type: UPDATE_SEARCH_SESSION,
  payload: search,
});

// get all sessions with limit
export const getAllSessions = (limit, page, search) => async (dispatch) => {

  try {
    const res = await useGetDataToken(`/api/v1/sessions?limit=${limit}&page=${page}&search=${search}`);
    dispatch({
      type: GET_ALL_SESSION,
      payload: res
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: GET_ALL_SESSION,
      payload: err.response,
    });
  }
};

// create new session
export const createSession = (formData) => async (dispatch) => {
  try {
    const res = await useInsertDataToken(`/api/v1/sessions`, formData);
    dispatch({
      type: CREATE_SESSION,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: CREATE_SESSION,
      payload: err.response,
    });
  }
};

// delete session with id
export const deleteSession = (id) => async (dispatch) => {
  try {
    const res = await useDeleteDataToken(`/api/v1/sessions/${id}`);
    dispatch({
      type: DELETE_SESSION,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: DELETE_SESSION,
      payload: err.response,
    });
  }
};

// update session with id
export const updateSession = (id, data) => async (dispatch) => {
  try {
    const res = await useUpdateDataToken(`/api/v1/sessions/${id}`, data);
    dispatch({
      type: UPDATE_SESSION,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: UPDATE_SESSION,
      payload: err.response,
    });
  }
};

// get one session by id
export const getOneSession = (id) => async (dispatch) => {
  try {
    const res = await useGetDataToken(`/api/v1/sessions/${id}`);
    dispatch({
      type: GET_ONE_SESSION,
      payload: res,
      loading: true
    });
  } catch (err) {
    dispatch({
      type: GET_ONE_SESSION,
      payload: err.response,
    });
  }
};

