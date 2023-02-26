import "./Header.css";
import React from "react";
import { Provider } from "react-redux";
import logo from "../../assets/logo.svg";
import Login from "../login/Login";
import { store } from "../reducer/rootReducer";
import { useSelector } from "react-redux";
import Logout from "../login/Logout";
import BookshowLink from "../bookshow/BookshowLink";
import { useState } from "react";

export const Header = (props) => {
  const loginDetails = useSelector((state) => state.login.loginDetails);
  const showBookShowButton = useSelector(
    (state) => state.common.showBookShowButton
  );
  return (
    <Provider store={store}>
      <div className="header-div">
        <img src={logo} className="app-logo" alt="logo"></img>
        <div className="login-container">
          {JSON.stringify(loginDetails) === "{}" && <Login />}
        </div>
        <div className="login-container">
          {JSON.stringify(loginDetails) !== "{}" && <Logout />}
        </div>
        <div className="login-container">
          {showBookShowButton && <BookshowLink {...props} />}
        </div>
      </div>
    </Provider>
  );
};

export default Header;
