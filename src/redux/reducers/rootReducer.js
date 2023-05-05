import { combineReducers } from 'redux';
import authReducer from './authReducer';
import caseReducer from './caseReducer';
import clientReducer from './clientReducer';
import documentReducer from './documentReducer';
import expenseReducer from './expenseReducer';
import paymentReducer from './paymentReducer';
import permissionReducer from './permissionReducer';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';


export default combineReducers ({
  authReducer: authReducer,
  allCase: caseReducer,
  allClient: clientReducer,
  allDocument: documentReducer,
  allExpense: expenseReducer,
  allPayment: paymentReducer,
  allPermission: permissionReducer,
  allSession: sessionReducer,
  allUser: userReducer,
})