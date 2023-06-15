import {
  CREATE_EXPENSE,
  DELETE_EXPENSE,
  GET_ALL_EXPENSE,
  GET_ERROR,
  GET_ONE_EXPENSE,
  UPDATE_EXPENSE,
  UPDATE_LIMIT_EXPENSE,
  UPDATE_PAGE_EXPENSE,
  UPDATE_SEARCH_EXPENSE,
} from "../type";

const initial = {
  expenses: [],
  oneExpense: [],
  deleteExpense: [],
  updateExpense: [],
  limit: 3,
  page: 1,
  search: '',
  loading: true,
};
const expenseReducer = (state = initial, action) => {
  switch (action.type) {
    case UPDATE_LIMIT_EXPENSE:
      return {
        ...state,
        limit: action.payload,
      };
    case UPDATE_PAGE_EXPENSE:
      return {
        ...state,
        page: action.payload,
      };
    case UPDATE_SEARCH_EXPENSE:
      return {
        ...state,
        search: action.payload,
      };
    case GET_ALL_EXPENSE:
      return {
        ...state,
        expenses: action.payload,
        loading: false,
      };
    case GET_ONE_EXPENSE:
      return {
        ...state,
        oneExpense: action.payload,
        loading: false,
      };
    case CREATE_EXPENSE:
      return {
        ...state,
        expenses: action.payload,
        loading: false,
      };
    case UPDATE_EXPENSE:
      return {
        ...state,
        updateExpense: action.payload,
        loading: false,
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        deleteExpense: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        expenses: action.payload,
      };

    default:
      return state;
  }
};

export default expenseReducer;
