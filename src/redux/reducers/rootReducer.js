// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import movies from "../reducers/movie";

const rootReducer = combineReducers({
  movies,
});

export default rootReducer;
