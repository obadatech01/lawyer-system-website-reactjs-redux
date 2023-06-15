import { useDeleteDataToken } from "../../hooks/useDeleteData";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertDataToken } from "../../hooks/useInsertData";
import { useUpdateDataToken } from "../../hooks/useUpdateData";
import { CREATE_PAYMENT, DELETE_PAYMENT, GET_ALL_PAYMENT, GET_ONE_PAYMENT, UPDATE_LIMIT_PAYMENT, UPDATE_PAGE_PAYMENT, UPDATE_PAYMENT, UPDATE_SEARCH_PAYMENT } from "../type";
// import baseURL from '../../Api/baseURL';

export const updateLimitPayments = (limit) => ({
  type: UPDATE_LIMIT_PAYMENT,
  payload: limit,
});

export const updatePagePayments = (page) => ({
  type: UPDATE_PAGE_PAYMENT,
  payload: page,
});

export const updateSearchPayments = (search) => ({
  type: UPDATE_SEARCH_PAYMENT,
  payload: search,
});

// get all payments with limit
export const getAllPayments = (limit, page, search) => async (dispatch) => {

  try {
    const res = await useGetDataToken(`/api/v1/payments?limit=${limit}&page=${page}&search=${search}`);
    dispatch({
      type: GET_ALL_PAYMENT,
      payload: res
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: GET_ALL_PAYMENT,
      payload: err.response,
    });
  }
};

// create new payment
export const createPayment = (formData) => async (dispatch) => {
  try {
    const res = await useInsertDataToken(`/api/v1/payments`, formData);
    dispatch({
      type: CREATE_PAYMENT,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: CREATE_PAYMENT,
      payload: err.response,
    });
  }
};

// delete payment with id
export const deletePayment = (id) => async (dispatch) => {
  try {
    const res = await useDeleteDataToken(`/api/v1/payments/${id}`);
    dispatch({
      type: DELETE_PAYMENT,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: DELETE_PAYMENT,
      payload: err.response,
    });
  }
};

// update payment with id
export const updatePayment = (id, data) => async (dispatch) => {
  try {
    const res = await useUpdateDataToken(`/api/v1/payments/${id}`, data);
    dispatch({
      type: UPDATE_PAYMENT,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: UPDATE_PAYMENT,
      payload: err.response,
    });
  }
};

// get one payment by id
export const getOnePayment = (id) => async (dispatch) => {
  try {
    const res = await useGetDataToken(`/api/v1/payments/${id}`);
    dispatch({
      type: GET_ONE_PAYMENT,
      payload: res,
      loading: true
    });
  } catch (err) {
    dispatch({
      type: GET_ONE_PAYMENT,
      payload: err.response,
    });
  }
};

