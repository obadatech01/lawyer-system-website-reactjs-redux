import {
  CREATE_SESSION,
  DELETE_SESSION,
  GET_ALL_SESSION,
  GET_ERROR,
  GET_ONE_SESSION,
  UPDATE_LIMIT_SESSION,
  UPDATE_PAGE_SESSION,
  UPDATE_SEARCH_SESSION,
  UPDATE_SESSION,
} from "../type";

const initial = {
  sessions: [],
  oneSession: [],
  deleteSession: [],
  updateSession: [],
  limit: 3,
  page: 1,
  search: '',
  loading: true,
};
const sessionReducer = (state = initial, action) => {
  switch (action.type) {
    case UPDATE_LIMIT_SESSION:
      return {
        ...state,
        limit: action.payload,
      };
    case UPDATE_PAGE_SESSION:
      return {
        ...state,
        page: action.payload,
      };
    case UPDATE_SEARCH_SESSION:
      return {
        ...state,
        search: action.payload,
      };
    case GET_ALL_SESSION:
      return {
        ...state,
        sessions: action.payload,
        loading: false,
      };
    case GET_ONE_SESSION:
      return {
        ...state,
        oneSession: action.payload,
        loading: false,
      };
    case CREATE_SESSION:
      return {
        ...state,
        sessions: action.payload,
        loading: false,
      };
    case UPDATE_SESSION:
      return {
        ...state,
        updateSession: action.payload,
        loading: false,
      };
    case DELETE_SESSION:
      return {
        ...state,
        deleteSession: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        sessions: action.payload,
      };

    default:
      return state;
  }
};

export default sessionReducer;
