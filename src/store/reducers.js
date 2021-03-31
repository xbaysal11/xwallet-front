import { combineReducers } from "redux";

import { authReducer } from "./auth/reducers";
import { categoriesReducer } from "./categories/reducers";

export default combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
});
