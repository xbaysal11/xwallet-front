import { statuses } from "../../config";
import { combineReducers } from "redux";
import {
  GET_WALLETS_REQUEST,
  GET_WALLETS_SUCCESS,
  GET_WALLETS_ERROR,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
} from "../actionTypes";

const walletsState = {
  wallets: [],
  status: statuses.INITIAL,
  error: "",
};
const categoryState = {
  category: [],
  status: statuses.INITIAL,
  error: "",
};

export const walletsListReducer = (state = walletsState, action) => {
  switch (action.type) {
    case GET_WALLETS_REQUEST:
      return {
        ...state,
        wallets: [],
        status: statuses.LOADING,
        error: "",
      };
    case GET_WALLETS_SUCCESS:
      return {
        ...state,
        wallets: action.payload,
        status: statuses.SUCCESS,
        error: "",
      };
    case GET_WALLETS_ERROR:
      return {
        ...state,
        wallets: [],
        error: action.payload,
        status: statuses.ERROR,
      };

    default:
      return state;
  }
};

export const categoryReducer = (state = categoryState, action) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return {
        ...state,
        category: [],
        status: statuses.LOADING,
        error: "",
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
        status: statuses.SUCCESS,
        error: "",
      };
    case GET_CATEGORY_ERROR:
      return {
        ...state,
        category: [],
        error: action.payload,
        status: statuses.ERROR,
      };

    default:
      return state;
  }
};

export const walletsReducer = combineReducers({
  wallets: walletsListReducer,
  category: categoryReducer,
});
