import { useDeleteDataToken } from "../../hooks/useDeleteData";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertDataToken } from "../../hooks/useInsertData";
import { useUpdateDataToken } from "../../hooks/useUpdateData";
import { CREATE_EXPENSE, DELETE_EXPENSE, GET_ALL_EXPENSE, GET_ONE_EXPENSE, UPDATE_EXPENSE, UPDATE_LIMIT_EXPENSE, UPDATE_PAGE_EXPENSE, UPDATE_SEARCH_EXPENSE } from "../type";
// import baseURL from '../../Api/baseURL';

export const updateLimitExpenses = (limit) => ({
  type: UPDATE_LIMIT_EXPENSE,
  payload: limit,
});

export const updatePageExpenses = (page) => ({
  type: UPDATE_PAGE_EXPENSE,
  payload: page,
});

export const updateSearchExpenses = (search) => ({
  type: UPDATE_SEARCH_EXPENSE,
  payload: search,
});

// get all expenses with limit
export const getAllExpenses = (limit, page, search) => async (dispatch) => {

  try {
    const res = await useGetDataToken(`/api/v1/expenses?limit=${limit}&page=${page}&search=${search}`);
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

