// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import movies from "../reducers/movie/index";

const rootReducer = combineReducers({
  movies,
});

export default rootReducer;
