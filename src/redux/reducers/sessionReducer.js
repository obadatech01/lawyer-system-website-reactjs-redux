import {
  CREATE_SESSION,
  DELETE_SESSION,
  GET_ALL_SESSION,
  GET_ERROR,
  GET_ONE_SESSION,
  UPDATE_SESSION,
} from "../type";

const initial = {
  sessions: [],
  oneSession: [],
  deleteSession: [],
  updateSession: [],
  loading: true,
};
const sessionReducer = (state = initial, action) => {
  switch (action.type) {
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
