import {
  CREATE_CASE,
  DELETE_CASE,
  GET_ALL_CASE,
  GET_ERROR,
  GET_ONE_CASE,
  UPDATE_CASE,
} from "../type";

const initial = {
  cases: [],
  oneCase: [],
  deleteCase: [],
  updateCase: [],
  loading: true,
};
const caseReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_CASE:
      return {
        ...state,
        cases: action.payload,
        loading: false,
      };
    case GET_ONE_CASE:
      return {
        ...state,
        oneCase: action.payload,
        loading: false,
      };
    case CREATE_CASE:
      return {
        ...state,
        cases: action.payload,
        loading: false,
      };
    case UPDATE_CASE:
      return {
        ...state,
        updateCase: action.payload,
        loading: false,
      };
    case DELETE_CASE:
      return {
        ...state,
        deleteCase: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        case: action.payload,
      };

    default:
      return state;
  }
};

export default caseReducer;
