import { useDeleteDataToken } from "../../hooks/useDeleteData";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertDataWithImageToken } from "../../hooks/useInsertData";
import { useUpdateDataWithImageToken } from "../../hooks/useUpdateData";
import { CREATE_DOCUMENT, DELETE_DOCUMENT, GET_ALL_DOCUMENT, GET_ONE_DOCUMENT, UPDATE_DOCUMENT } from "../type";
// import baseURL from '../../Api/baseURL';

// get all documents with limit
export const getAllDocument = (limit) => async (dispatch) => {

  try {
    const res = await useGetDataToken(`/api/v1/documents?limit=${limit}`);
    dispatch({
      type: GET_ALL_DOCUMENT,
      payload: res
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: GET_ALL_DOCUMENT,
      payload: err.response,
    });
  }
};

// get all documents with pagination
export const getAllDocumentPage = (page) => async (dispatch) => {

  try {
    const res = await useGetDataToken(`/api/v1/documents?limit=3&page=${page}`);
    dispatch({
      type: GET_ALL_DOCUMENT,
      payload: res
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: GET_ALL_DOCUMENT,
      payload: err.response,
    });
  }
};

// create new document
export const createDocument = (formData) => async (dispatch) => {
  try {
    const res = await useInsertDataWithImageToken(`/api/v1/documents`, formData);
    dispatch({
      type: CREATE_DOCUMENT,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: CREATE_DOCUMENT,
      payload: err.response,
    });
  }
};

// delete document with id
export const deleteDocument = (id) => async (dispatch) => {
  try {
    const res = await useDeleteDataToken(`/api/v1/documents/${id}`);
    dispatch({
      type: DELETE_DOCUMENT,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: DELETE_DOCUMENT,
      payload: err.response,
    });
  }
};

// update document with id
export const updateDocument = (id, data) => async (dispatch) => {
  try {
    const res = await useUpdateDataWithImageToken(`/api/v1/documents/${id}`, data);
    dispatch({
      type: UPDATE_DOCUMENT,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: UPDATE_DOCUMENT,
      payload: err.response,
    });
  }
};

// get one document by id
export const getOneDocument = (id) => async (dispatch) => {
  try {
    const res = await useGetDataToken(`/api/v1/documents/${id}`);
    dispatch({
      type: GET_ONE_DOCUMENT,
      payload: res,
      loading: true
    });
  } catch (err) {
    dispatch({
      type: GET_ONE_DOCUMENT,
      payload: err.response,
    });
  }
};

