// ** Redux, Thunk & Root Reducer Imports
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";

// ** Create store
const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export { store };
