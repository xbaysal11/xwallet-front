import { combineReducers } from "redux";

import { authReducer } from "./auth/reducers";
import { categoriesReducer } from "./categories/reducers";
import { moneyOperationsReducer } from "./moneyOperations/reducers";
import { walletsReducer } from "./wallets/reducers";

export default combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  moneyOperations: moneyOperationsReducer,
  wallets: walletsReducer,
});
