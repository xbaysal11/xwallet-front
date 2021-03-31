import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_LOGOUT_SUCCESS,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_ERROR,
} from "../actionTypes";
import { statuses } from "../../config";

const initialState = {
  user: [],
  error: "",
  status: statuses.INITIAL,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return {
        ...state,
        user: [],
        error: "",
        status: statuses.LOADING,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: "",
        status: statuses.SUCCESS,
      };
    case AUTH_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        status: statuses.ERROR,
        user: [],
      };
    case AUTH_REGISTER_REQUEST:
      return {
        ...state,
        user: [],
        error: "",
        status: statuses.LOADING,
      };
    case AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: "",
        status: statuses.SUCCESS,
      };
    case AUTH_REGISTER_ERROR:
      return {
        ...state,
        error: action.payload,
        status: statuses.ERROR,
        user: [],
      };

    case AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        user: [],
        status: statuses.INITIAL,
        error: "",
      };

    default:
      return state;
  }
};
