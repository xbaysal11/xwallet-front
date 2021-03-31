import { statuses } from "../../config";
import { combineReducers } from "redux";
import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
} from "../actionTypes";

const categoriesState = {
  categories: [],
  status: statuses.INITIAL,
  error: "",
};
const categoryState = {
  category: [],
  status: statuses.INITIAL,
  error: "",
};

export const categoriesListReducer = (state = categoriesState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        categories: [],
        status: statuses.LOADING,
        error: "",
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        status: statuses.SUCCESS,
        error: "",
      };
    case GET_CATEGORIES_ERROR:
      return {
        ...state,
        categories: [],
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

export const categoriesReducer = combineReducers({
  categories: categoriesListReducer,
  category: categoryReducer,
});
