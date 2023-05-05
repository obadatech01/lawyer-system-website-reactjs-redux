import { useDeleteDataToken } from "../../hooks/useDeleteData";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertDataToken } from "../../hooks/useInsertData";
import { useUpdateDataToken } from "../../hooks/useUpdateData";
import { CREATE_EXPENSE, DELETE_EXPENSE, GET_ALL_EXPENSE, GET_ONE_EXPENSE, UPDATE_EXPENSE } from "../type";
// import baseURL from '../../Api/baseURL';

// get all expenses with limit
export const getAllExpense = (limit) => async (dispatch) => {

  try {
    const res = await useGetDataToken(`/api/v1/expenses?limit=${limit}`);
    dispatch({
      type: GET_ALL_EXPENSE,
      payload: res
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: GET_ALL_EXPENSE,
      payload: err.response,
    });
  }
};

// get all expenses with pagination
export const getAllExpensePage = (page) => async (dispatch) => {

  try {
    const res = await useGetDataToken(`/api/v1/expenses?limit=3&page=${page}`);
    dispatch({
      type: GET_ALL_EXPENSE,
      payload: res
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: GET_ALL_EXPENSE,
      payload: err.response,
    });
  }
};

// create new expense
export const createExpense = (formData) => async (dispatch) => {
  try {
    const res = await useInsertDataToken(`/api/v1/expenses`, formData);
    dispatch({
      type: CREATE_EXPENSE,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: CREATE_EXPENSE,
      payload: err.response,
    });
  }
};

// delete expense with id
export const deleteExpense = (id) => async (dispatch) => {
  try {
    const res = await useDeleteDataToken(`/api/v1/expenses/${id}`);
    dispatch({
      type: DELETE_EXPENSE,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: DELETE_EXPENSE,
      payload: err.response,
    });
  }
};

// update expense with id
export const updateExpense = (id, data) => async (dispatch) => {
  try {
    const res = await useUpdateDataToken(`/api/v1/expenses/${id}`, data);
    dispatch({
      type: UPDATE_EXPENSE,
      payload: res,
      loading: true
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: UPDATE_EXPENSE,
      payload: err.response,
    });
  }
};

// get one expense by id
export const getOneExpense = (id) => async (dispatch) => {
  try {
    const res = await useGetDataToken(`/api/v1/expenses/${id}`);
    dispatch({
      type: GET_ONE_EXPENSE,
      payload: res,
      loading: true
    });
  } catch (err) {
    dispatch({
      type: GET_ONE_EXPENSE,
      payload: err.response,
    });
  }
};

