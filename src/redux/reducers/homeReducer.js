import {
  GET_HOME,
  GET_ERROR,
} from "../type";

const initial = {
  home: [],
  loading: true,
};
const homeReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_HOME:
      return {
        ...state,
        home: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        cases: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
