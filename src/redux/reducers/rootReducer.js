import { combineReducers } from 'redux';
import clientReducer from './clientReducer';
import authReducer from './authReducer';


export default combineReducers ({
  allClient: clientReducer,
  authReducer: authReducer
})