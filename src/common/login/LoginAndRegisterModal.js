import React, { useState } from "react";
import Modal from "react-modal";
import { makeStyles } from "@material-ui/core/styles";
import "./LoginAndRegister.css";
import { Tabs, Tab, Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import LoginFom from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const LoginAndRegisterModal = (props) => {
  const dispatch = useDispatch();
  const openModal = useSelector((state) => state.login.openModal);

  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  const onRequestClose = () => {
    dispatch({ type: "OPEN_CLOSE_MODAL", payload: false });
    setSuccessMsg("");
  };

  return (
    <Modal
      className="custom-modal"
      isOpen={openModal}
      onRequestClose={onRequestClose}
      contentLabel=""
      ariaHideApp={false}
    >
      <div className={classes.root}>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        <Box p={3}>
          {tabIndex === 0 && <LoginFom {...props} />}
          {tabIndex === 1 && <RegistrationForm {...props} />}
        </Box>
      </div>
    </Modal>
  );
};

export default LoginAndRegisterModal;
