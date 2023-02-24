import {
  AUTH_LOGIN_TYPE,
  AUTH_LOGOUT_TYPE,
  AUTH_USER_DATA,
  EMPLOYEE_REPORTER_DATA,
} from "../reduxConstant";

import configureStore from "../store";
import { USER_CLONE } from "../../constants/api";

const persistantStore = configureStore();
let { store } = persistantStore;

export const loginUserAuthAction = (userData) => (dispatch, getState) => {
  return dispatch({
    type: AUTH_LOGIN_TYPE,
    payload: userData,
  });
};

export const logoutUserAuthAction = (userData) => (dispatch, getState) => {
  return dispatch({
    type: AUTH_LOGOUT_TYPE,
    payload: userData,
  });
};

export const reporteesAction = (data) => (dispatch, getState) => {
  return dispatch({
    type: EMPLOYEE_REPORTER_DATA,
    payload: data,
  });
};
