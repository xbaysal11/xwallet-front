import { urls } from "../../config";
import { API } from "../../utils";
import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_LOGOUT_SUCCESS,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_ERROR,
} from "../actionTypes";

const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const login = (data) => async (dispatch) => {
  const dataJSON = JSON.stringify(data);
  dispatch(authLoginRequest());
  await API.post(urls.LOGIN, dataJSON)
    .then((res) => {
      console.log("LOGIN", res);
      let token = JSON.stringify(res.data.token);
      setToken(token);
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch(authLoginSuccess(res.data));
      return res.data;
    })
    .catch((e) => {
      console.log("LOGIN", e.message);
      let errorMessage = "Неверные данные";
      dispatch(authLoginFailure(errorMessage));
      return e;
    });
};

export const register = (data) => async (dispatch) => {
  const dataJSON = JSON.stringify(data);
  dispatch(authRegisterRequest());
  await API.post(urls.REGISTER, dataJSON)
    .then((res) => {
      console.log("REGISTER", res);
      // let token = JSON.stringify(res.data.token);
      // setToken(token);
      // localStorage.setItem("user", JSON.stringify(res.data));
      dispatch(authRegisterSuccess(res.data));
      return res.data;
    })
    .catch((e) => {
      console.log("REGISTER", e.body);
      let errorMessage = "Something get wrong!";
      dispatch(authRegisterFailure(errorMessage));
      return e;
    });
};

export const logout = () => async (dispatch) => {
  localStorage.clear();
  await dispatch(authLogoutSuccess([]));
};

export const authLoginRequest = () => {
  return {
    type: AUTH_LOGIN_REQUEST,
  };
};

export const authLoginSuccess = (data) => {
  return {
    type: AUTH_LOGIN_SUCCESS,
    payload: data,
  };
};
export const authLoginFailure = (error) => {
  return {
    type: AUTH_LOGIN_ERROR,
    payload: error,
  };
};

export const authRegisterRequest = () => {
  return {
    type: AUTH_REGISTER_REQUEST,
  };
};

export const authRegisterSuccess = (data) => {
  return {
    type: AUTH_REGISTER_SUCCESS,
    payload: data,
  };
};

export const authRegisterFailure = (error) => {
  return {
    type: AUTH_REGISTER_ERROR,
    payload: error,
  };
};

export const authLogoutSuccess = (data) => {
  return {
    type: AUTH_LOGOUT_SUCCESS,
    payload: data,
  };
};
