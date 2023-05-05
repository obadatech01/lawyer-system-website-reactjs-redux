import {
  CREATE_DOCUMENT,
  DELETE_DOCUMENT,
  GET_ALL_DOCUMENT,
  GET_ERROR,
  GET_ONE_DOCUMENT,
  UPDATE_DOCUMENT,
} from "../type";

const initial = {
  documents: [],
  oneDocument: [],
  deleteDocument: [],
  updateDocument: [],
  loading: true,
};
const documentReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_DOCUMENT:
      return {
        ...state,
        documents: action.payload,
        loading: false,
      };
    case GET_ONE_DOCUMENT:
      return {
        ...state,
        oneDocument: action.payload,
        loading: false,
      };
    case CREATE_DOCUMENT:
      return {
        ...state,
        documents: action.payload,
        loading: false,
      };
    case UPDATE_DOCUMENT:
      return {
        ...state,
        updateDocument: action.payload,
        loading: false,
      };
    case DELETE_DOCUMENT:
      return {
        ...state,
        deleteDocument: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        documents: action.payload,
      };

    default:
      return state;
  }
};

export default documentReducer;
