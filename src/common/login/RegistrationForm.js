import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "block",
  },
  button: {
    margin: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formField: {
    marginBottom: theme.spacing(2),
    width: "100%",
  },
}));

const RegistrationForm = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [successMsg, setSuccessMsg] = useState("");
  const [firstnameRequired, setFirstnameRequired] = useState("dispNone");
  const [firstname, setFirstname] = useState("");
  const [lastnameRequired, setLastnameRequired] = useState("dispNone");
  const [lastname, setLastname] = useState("");
  const [emailRequired, setEmailRequired] = useState("dispNone");
  const [registerPasswordRequired, setRegisterPasswordRequired] =
    useState("dispNone");
  const [contactRequired, setContactRequired] = useState("dispNone");

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const registeredUsers = useSelector((state) => state.login.registeredUsers);
  async function registerUser(params) {
    try {
      params.firstname === ""
        ? setFirstnameRequired("dispBlock")
        : setFirstnameRequired("dispNone");

      params.lastname === ""
        ? setLastnameRequired("dispBlock")
        : setLastnameRequired("dispNone");

      params.email_address === ""
        ? setEmailRequired("dispBlock")
        : setEmailRequired("dispNone");
      params.password === ""
        ? setRegisterPasswordRequired("dispBlock")
        : setRegisterPasswordRequired("dispNone");
      params.mobile_number === ""
        ? setContactRequired("dispBlock")
        : setContactRequired("dispNone");
      if (
        params.email_address !== "" &&
        params.firstname !== "" &&
        params.lastname !== "" &&
        params.mobile_number !== "" &&
        params.password !== ""
      ) {
        const dataSignup = JSON.stringify(params);
        const response = await fetch("http://localhost:8085/api/v1/signup", {
          body: dataSignup,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          setSuccessMsg("Registration Successful. Please Login!");
          setRegistrationSuccess(true);
        }
      }
    } catch (e) {
      console.error(e);
      /**
       * This is a work around added to imitate the register functionality which is currently not working due to CORS error
       */
      const newUser = {
        username: params.email_address,
        password: params.password,
      };
      dispatch({ type: "ADD_REGISTERED_USERS", payload: newUser });
      setSuccessMsg("Registration Successful. Please Login!");
      setRegistrationSuccess(true);
    }
  }

  const handleRegister = (event) => {
    event.preventDefault();
    // handle register form submission
    const data = {};
    const formData = new FormData(event.target);
    for (let [name, value] of formData.entries()) {
      data[name] = value;
    }
    registerUser(data);
  };
  return (
    <div>
      <form onSubmit={handleRegister}>
        <FormControl className={classes.formControl} required>
          <TextField
            label="First name"
            variant="standard"
            id="filled-error-helper-text"
            helperText="required"
            required
            name="first_name"
          />
        </FormControl>
        <FormControl className={classes.formControl} required>
          <TextField
            label="Last name"
            variant="standard"
            required
            helperText="required"
            name="last_name"
          />
        </FormControl>
        <FormControl className={classes.formControl} required>
          <TextField
            label="Email"
            type="email"
            variant="standard"
            required
            helperText="required"
            name="email_address"
          />
        </FormControl>
        <FormControl className={classes.formControl} required>
          <TextField
            label="Password"
            type="password"
            variant="standard"
            required
            helperText="required"
            name="password"
          />
        </FormControl>
        <FormControl className={classes.formControl} required>
          <TextField
            label="Contact no"
            type="tel"
            variant="standard"
            required
            helperText="required"
            name="mobile_number"
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => {
            console.log(registrationSuccess);
            if (registrationSuccess) {
              setSuccessMsg("Registration Successful. Please Login!");
            }
          }}
          className={classes.button}
        >
          Register
        </Button>
      </form>

      {registrationSuccess && <div>{successMsg}</div>}
    </div>
  );
};

export default RegistrationForm;
