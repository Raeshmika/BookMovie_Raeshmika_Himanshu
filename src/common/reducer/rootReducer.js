//import { configureStore } from '@reduxjs/toolkit'
import { createStore } from "redux";
import { combineReducers } from "redux";
import { loginReducer } from "../login/LoginAndRegisterReducer";

const rootReducer = combineReducers({
  login: loginReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
