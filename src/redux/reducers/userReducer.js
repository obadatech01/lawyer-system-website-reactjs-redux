import {
  CREATE_USER,
  DELETE_USER,
  GET_ALL_USER,
  GET_ERROR,
  GET_ONE_USER,
  UPDATE_USER,
} from "../type";

const initial = {
  users: [],
  oneUser: [],
  deleteUser: [],
  updateUser: [],
  loading: true,
};
const userReducer = (state = initial, action) => {
  switch (action.type) {
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
