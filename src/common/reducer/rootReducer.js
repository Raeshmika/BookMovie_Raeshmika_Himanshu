//import { configureStore } from '@reduxjs/toolkit'
import { createStore } from "redux";
import { combineReducers } from "redux";
import { loginReducer } from "../login/LoginAndRegisterStore";
import { homeReducer } from "../../screens/home/HomeReducer";
import { commonReducer } from "./CommonReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  home: homeReducer,
  common: commonReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
