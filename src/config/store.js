import { combineReducers } from "redux";
import { createStore } from "redux";
import { accountReducers } from "../redux/reducers/account";
import { bonusReducers } from "../redux/reducers/bonus";

import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";

import { apiReducers } from "../redux/apiReducers/apiReducers";

// ab yaha reducers chahyen
const store = createStore(
  combineReducers({
    account: accountReducers,
    bonus: bonusReducers,

    apiReducers,
  }),

  applyMiddleware(logger, thunk)
);

export default store;
