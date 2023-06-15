import {
  CREATE_CLIENT,
  DELETE_CLIENT,
  GET_ALL_CLIENT,
  GET_ERROR,
  GET_ONE_CLIENT,
  UPDATE_CLIENT,
  UPDATE_LIMIT_CLIENT,
  UPDATE_PAGE_CLIENT,
  UPDATE_SEARCH_CLIENT
} from "../type";

const initial = {
  clients: [],
  oneClient: [],
  deleteClient: [],
  updateClient: [],
  limit: 3,
  page: 1,
  search: '',
  loading: true,
};
const clientReducer = (state = initial, action) => {
  switch (action.type) {
    case UPDATE_LIMIT_CLIENT:
      return {
        ...state,
        limit: action.payload,
      };
    case UPDATE_PAGE_CLIENT:
      return {
        ...state,
        page: action.payload,
      };
    case UPDATE_SEARCH_CLIENT:
      return {
        ...state,
        search: action.payload,
      };
    case GET_ALL_CLIENT:
      return {
        ...state,
        clients: action.payload,
        loading: false,
      };
    case GET_ONE_CLIENT:
      return {
        ...state,
        oneClient: action.payload,
        loading: false,
      };
    case CREATE_CLIENT:
      return {
        ...state,
        clients: action.payload,
        loading: false,
      };
    case UPDATE_CLIENT:
      return {
        ...state,
        updateClient: action.payload,
        loading: false,
      };
    case DELETE_CLIENT:
      return {
        ...state,
        deleteClient: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        clients: action.payload,
      };

    default:
      return state;
  }
};

export default clientReducer;
