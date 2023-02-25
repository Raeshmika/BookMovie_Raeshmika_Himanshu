import "./Header.css";
import React from "react";
import { Provider } from "react-redux";
import logo from "../../assets/logo.svg";
import Login from "../login/Login";
import { store } from "../reducer/rootReducer";
import { useSelector } from "react-redux";
import Logout from "../login/Logout";
import Bookshow from "../bookshow/Bookshow";
import BookshowLink from "../bookshow/BookshowLink";

export const Header = () => {
  const loginDetails = useSelector((state) => state.loginReducer.logigDetails);
  const [showBookShowButton,setBookShowButton] = useState(true);
  const id  = "";
  return (
    <Provider store={store}>
      <div className="header-div">
        <img src={logo} className='app-logo' alt='logo'></img>
        <div className="login-container">{!loginDetails && <Login />}</div>
        <div className="login-coontainer">{loginDetails && <Logout />}</div>
        <div className="login-container">{ showBookShowButton && loginDetails ? <Bookshow /> : ""}</div>
        <div className="login-container">{ showBookShowButton && !loginDetails ? <BookshowLink {...props} id={id}/> : ""}</div>
      </div>
    </Provider>
  );
};

export default Header;
