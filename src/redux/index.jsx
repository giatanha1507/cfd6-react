import { combineReducers, createStore, applyMiddleware } from "redux";
import authReducer from "./reducer/authReducer";

let reducer = combineReducers({
  auth: authReducer,
});

const middleWare = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  } else {
    next(action);
  }
};

let store = createStore(reducer, applyMiddleware(middleWare));
export default store;
