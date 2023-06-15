import {
  CREATE_USER,
  DELETE_USER,
  GET_ALL_USER,
  GET_ERROR,
  GET_ONE_USER,
  UPDATE_LIMIT_USER,
  UPDATE_PAGE_USER,
  UPDATE_PASSWORD,
  UPDATE_PROFILE_ME,
  UPDATE_SEARCH_USER,
  UPDATE_USER,
} from "../type";

const initial = {
  users: [],
  oneUser: [],
  deleteUser: [],
  updateUser: [],
  updateProfileMe: [],
  updateUserPassword: [],
  updateMePassword: [],
  limit: 3,
  page: 1,
  search: '',
  loading: true,
};
const userReducer = (state = initial, action) => {
  switch (action.type) {
    case UPDATE_LIMIT_USER:
      return {
        ...state,
        limit: action.payload,
      };
    case UPDATE_PAGE_USER:
      return {
        ...state,
        page: action.payload,
      };
    case UPDATE_SEARCH_USER:
      return {
        ...state,
        search: action.payload,
      };
    case GET_ALL_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_ONE_USER:
      return {
        ...state,
        oneUser: action.payload,
        loading: false,
      };
    case CREATE_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        updateUser: action.payload,
        loading: false,
      };
    case UPDATE_PROFILE_ME:
      return {
        ...state,
        updateProfileMe: action.payload,
        loading: false,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        updateUserPassword: action.payload,
        loading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        deleteUser: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
