import { combineReducers } from 'redux';
import authReducer from './authReducer';
import caseReducer from './caseReducer';
import clientReducer from './clientReducer';
import documentReducer from './documentReducer';
import expenseReducer from './expenseReducer';
import paymentReducer from './paymentReducer';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';
import homeReducer from './homeReducer';


export default combineReducers ({
  authReducer: authReducer,
  allCase: caseReducer,
  allClient: clientReducer,
  allDocument: documentReducer,
  allExpense: expenseReducer,
  allPayment: paymentReducer,
  allSession: sessionReducer,
  allUser: userReducer,
  home: homeReducer,
})