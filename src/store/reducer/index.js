import { combineReducers } from "redux";
import searchResultReducer from "./searchResultReducer.js";
import playVideoReducer from "./playVideoReducer.js";

const allReducers = combineReducers({
  searchResultReducer: searchResultReducer,
  playVideoReducer: playVideoReducer,
});

export default allReducers;
