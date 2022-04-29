// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import movies from "./movie";
import persons from "./person";

const rootReducer = combineReducers({
  movies,
  persons
});

export default rootReducer;
