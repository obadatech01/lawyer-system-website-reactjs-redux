import {
  CREATE_DOCUMENT,
  DELETE_DOCUMENT,
  GET_ALL_DOCUMENT,
  GET_ERROR,
  GET_ONE_DOCUMENT,
  UPDATE_DOCUMENT,
  UPDATE_LIMIT_DOCUMENT,
  UPDATE_PAGE_DOCUMENT,
  UPDATE_SEARCH_DOCUMENT,
} from "../type";

const initial = {
  documents: [],
  oneDocument: [],
  deleteDocument: [],
  updateDocument: [],
  limit: 3,
  page: 1,
  search: '',
  loading: true,
};
const documentReducer = (state = initial, action) => {
  switch (action.type) {
    case UPDATE_LIMIT_DOCUMENT:
      return {
        ...state,
        limit: action.payload,
      };
    case UPDATE_PAGE_DOCUMENT:
      return {
        ...state,
        page: action.payload,
      };
    case UPDATE_SEARCH_DOCUMENT:
      return {
        ...state,
        search: action.payload,
      };
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
