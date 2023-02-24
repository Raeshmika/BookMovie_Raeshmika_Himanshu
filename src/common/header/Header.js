import "./Header.css";
import React from "react";
import { Provider } from "react-redux";
import logo from "../../assets/logo.svg";
import Login from "../login/Login";
import { store } from "../reducer/rootReducer";
import { useSelector } from "react-redux";
import Logout from "../login/Logout";

export const Header = () => {
  const loginDetails = useSelector((state) => state.loginReducer.logigDetails);
  return (
    <Provider store={store}>
      <div className="header-div">
        <img src={logo} alt="Your SVG" className="logo-container" />
        <div className="login-container">{!loginDetails && <Login />}</div>
        <div className="login-coontainer">{loginDetails && <Logout />}</div>
      </div>
    </Provider>
  );
};

export default Header;
