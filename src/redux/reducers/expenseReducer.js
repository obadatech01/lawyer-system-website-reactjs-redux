import {
  CREATE_EXPENSE,
  DELETE_EXPENSE,
  GET_ALL_EXPENSE,
  GET_ERROR,
  GET_ONE_EXPENSE,
  UPDATE_EXPENSE,
} from "../type";

const initial = {
  expenses: [],
  oneExpense: [],
  deleteExpense: [],
  updateExpense: [],
  loading: true,
};
const expenseReducer = (state = initial, action) => {
  switch (action.type) {
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
