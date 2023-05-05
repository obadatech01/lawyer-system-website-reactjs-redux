import {
  CREATE_CLIENT,
  DELETE_CLIENT,
  GET_ALL_CLIENT,
  GET_ERROR,
  GET_ONE_CLIENT,
  UPDATE_CLIENT,
} from "../type";

const initial = {
  clients: [],
  oneClient: [],
  deleteClient: [],
  updateClient: [],
  loading: true,
};
const clientReducer = (state = initial, action) => {
  switch (action.type) {
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
