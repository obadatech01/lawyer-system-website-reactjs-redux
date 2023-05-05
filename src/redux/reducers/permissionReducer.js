import {
  CREATE_PERMISSION,
  DELETE_PERMISSION,
  GET_ALL_PERMISSION,
  GET_ERROR,
  GET_ONE_PERMISSION,
  UPDATE_PERMISSION,
} from "../type";

const initial = {
  permissions: [],
  onePermission: [],
  deletePermission: [],
  updatePermission: [],
  loading: true,
};
const permissionReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_PERMISSION:
      return {
        ...state,
        permissions: action.payload,
        loading: false,
      };
    case GET_ONE_PERMISSION:
      return {
        ...state,
        onePermission: action.payload,
        loading: false,
      };
    case CREATE_PERMISSION:
      return {
        ...state,
        permissions: action.payload,
        loading: false,
      };
    case UPDATE_PERMISSION:
      return {
        ...state,
        updatePermission: action.payload,
        loading: false,
      };
    case DELETE_PERMISSION:
      return {
        ...state,
        deletePermission: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        permissions: action.payload,
      };

    default:
      return state;
  }
};

export default permissionReducer;
