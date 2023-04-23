import { useInsertData, useInsertDataToken } from "../../hooks/useInsertData";
import { useInsUpdateData } from "../../hooks/useUpdateData";
import {
  FORGET_PASSWORD,
  GET_CURRENT_USER,
  // CREATE_NEW_USER,
  LOGIN_USER,
  RESET_PASSWORD,
  VERIFY_PASSWORD,
} from "../type";

// login  user 
export const loginUser = (data) => async (dispatch) => {
  try {
      const response = await useInsertData(`/api/v1/auth/login`, data);
      // console.log(response);
      dispatch({
        type: LOGIN_USER,
        payload: response,
        loading: true
      })

  } catch (e) {
    // console.log(e.response.data.errors);
      dispatch({
        type: LOGIN_USER,
        payload: e.response,
      })
  }
}

// get logged user (current user) 
export const getLoggedUser = () => async (dispatch) => {
  try {
      const response = await useInsertDataToken(`/api/v1/auth/getMe`);
      // console.log(response);
      dispatch({
          type: GET_CURRENT_USER,
          payload: response,
          loading: true
      })

  } catch (e) {
    // console.log(e.response.data.errors);
      dispatch({
          type: LOGIN_USER,
          payload: e.response,
      })
  }
}

// 1. forget password 
export const forgetPassword = (data) => async (dispatch) => {
  try {
      const response = await useInsertData(`/api/v1/auth/forgotPassword`, data);
      // console.log(response);
      dispatch({
          type: FORGET_PASSWORD,
          payload: response,
          loading: true
      })

  } catch (e) {
    console.log(e.response.data.errors);
      dispatch({
          type: LOGIN_USER,
          payload: e.response,
      })
  }
}

// 2. verify password 
export const verifyPassword = (data) => async (dispatch) => {
  try {
      const response = await useInsertData(`/api/v1/auth/verifyResetCode`, data);
      // console.log(response);
      dispatch({
          type: VERIFY_PASSWORD,
          payload: response,
          loading: true
      })

  } catch (e) {
    // console.log(e.response.data.errors);
      dispatch({
          type: LOGIN_USER,
          payload: e.response,
      })
  }
}

// 3. reset password 
export const resetPassword = (data) => async (dispatch) => {
  try {
      const response = await useInsUpdateData(`/api/v1/auth/resetPassword`, data);
      // console.log(response);
      dispatch({
          type: RESET_PASSWORD,
          payload: response,
          loading: true
      })

  } catch (e) {
    // console.log(e.response.data.errors);
      dispatch({
          type: LOGIN_USER,
          payload: e.response,
      })
  }
}