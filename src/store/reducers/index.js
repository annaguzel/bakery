import { combineReducers } from "redux";

// Reducers
import userReducer from "./user";
import errorReducer from "./errors";
import bakeryReducer from "./bakery";

export default combineReducers({
  user: userReducer,
  errors: errorReducer,
  bakery: bakeryReducer,
});
