import { combineReducers } from "redux";
import searchResultReducer from "./searchResultReducer.js";
import playVideoReducer from "./playVideoReducer.js";
import userDataReducer from "./userDataReducer.js";
import articleDataReducer from "./articleDataReducer.js";

const allReducers = combineReducers({
  searchResultReducer: searchResultReducer,
  playVideoReducer: playVideoReducer,
  userDataReducer: userDataReducer,
  articleDataReducer: articleDataReducer,
});

export default allReducers;
