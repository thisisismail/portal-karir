import { combineReducers } from "redux";
import searchResultReducer from "./searchResultReducer.js";
import counterReducer from "./counterReducer.js";

const allReducers = combineReducers({
  searchResultReducer: searchResultReducer,
  counterReducer: counterReducer,
});

export default allReducers;
