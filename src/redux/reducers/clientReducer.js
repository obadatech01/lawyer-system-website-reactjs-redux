import { GET_ALL_CLIENT, GET_ERROR } from "../type";

const initial = {
  client: [],
  loading: true
};
const clientReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_CLIENT:
      return {
        ...state,
        client: action.payload,
        loading: false
      }
    case GET_ERROR:
      return {
        loading: true,
        client: action.payload
      }
  
    default:
      return state;
  }
};

export default clientReducer;