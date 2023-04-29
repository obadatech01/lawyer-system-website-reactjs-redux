import { combineReducers } from 'redux';
import clientReducer from './clientReducer';
import authReducer from './authReducer';
import caseReducer from './caseReducer';


export default combineReducers ({
  authReducer: authReducer,
  allClient: clientReducer,
  allCase: caseReducer,
})