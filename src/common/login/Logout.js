import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import LoginAndRegisterModal from "./LoginAndRegisterModal";

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "LOGOUT_USER", payload: {} })}
      >
        Logout
      </Button>
    </Fragment>
  );
};

export default Logout;
