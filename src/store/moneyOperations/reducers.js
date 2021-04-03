import { statuses } from "../../config";
import { combineReducers } from "redux";
import {
  GET_MONEY_OPERATIONS_REQUEST,
  GET_MONEY_OPERATIONS_SUCCESS,
  GET_MONEY_OPERATIONS_ERROR,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
} from "../actionTypes";

const moneyOperationsState = {
  moneyOperations: [],
  status: statuses.INITIAL,
  error: "",
};
const categoryState = {
  category: [],
  status: statuses.INITIAL,
  error: "",
};

export const moneyOperationsListReducer = (
  state = moneyOperationsState,
  action
) => {
  switch (action.type) {
    case GET_MONEY_OPERATIONS_REQUEST:
      return {
        ...state,
        moneyOperations: [],
        status: statuses.LOADING,
        error: "",
      };
    case GET_MONEY_OPERATIONS_SUCCESS:
      return {
        ...state,
        moneyOperations: action.payload,
        status: statuses.SUCCESS,
        error: "",
      };
    case GET_MONEY_OPERATIONS_ERROR:
      return {
        ...state,
        moneyOperations: [],
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

export const moneyOperationsReducer = combineReducers({
  moneyOperations: moneyOperationsListReducer,
  category: categoryReducer,
});
