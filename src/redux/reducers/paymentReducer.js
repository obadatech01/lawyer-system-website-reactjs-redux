import {
  CREATE_PAYMENT,
  DELETE_PAYMENT,
  GET_ALL_PAYMENT,
  GET_ERROR,
  GET_ONE_PAYMENT,
  UPDATE_LIMIT_PAYMENT,
  UPDATE_PAGE_PAYMENT,
  UPDATE_PAYMENT,
  UPDATE_SEARCH_PAYMENT,
} from "../type";

const initial = {
  payments: [],
  onePayment: [],
  deletePayment: [],
  updatePayment: [],
  limit: 3,
  page: 1,
  search: '',
  loading: true,
};
const paymentReducer = (state = initial, action) => {
  switch (action.type) {
    case UPDATE_LIMIT_PAYMENT:
      return {
        ...state,
        limit: action.payload,
      };
    case UPDATE_PAGE_PAYMENT:
      return {
        ...state,
        page: action.payload,
      };
    case UPDATE_SEARCH_PAYMENT:
      return {
        ...state,
        search: action.payload,
      };
    case GET_ALL_PAYMENT:
      return {
        ...state,
        payments: action.payload,
        loading: false,
      };
    case GET_ONE_PAYMENT:
      return {
        ...state,
        onePayment: action.payload,
        loading: false,
      };
    case CREATE_PAYMENT:
      return {
        ...state,
        payments: action.payload,
        loading: false,
      };
    case UPDATE_PAYMENT:
      return {
        ...state,
        updatePayment: action.payload,
        loading: false,
      };
    case DELETE_PAYMENT:
      return {
        ...state,
        deletePayment: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        payments: action.payload,
      };

    default:
      return state;
  }
};

export default paymentReducer;
