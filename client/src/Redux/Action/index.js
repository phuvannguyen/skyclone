import {SET_ACTIVE_USER_ID, 
    SET_VALUE_TYPE,
    SEND_MESSAGE, SET_MESSAGE, CLEAR_MESSAGE,REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./constants/action-type"    

import AuthService from "../../service/auth.service"

export const setActiveUserId = id => ({
    type:SET_ACTIVE_USER_ID,
    payload: id
})

export const setValueType = value => ({
    type:SET_VALUE_TYPE,
    payload: value
})

export const sendMesage = (message, userId) => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId

    }
})

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
})

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

export const register = (username, email, password) => (dispatch) => {
    return AuthService.register(username, email, password).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: REGISTER_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    );
  };
  export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: LOGIN_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    );
  };
  export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
      type: LOGOUT,
    });
  };