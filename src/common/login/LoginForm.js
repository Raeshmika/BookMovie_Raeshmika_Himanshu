import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, FormControl } from "@material-ui/core";
import { useHistory } from "react-router-dom";

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

const LoginFom = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const registeredUsers = useSelector((state) => state.login.registeredUsers);

  const loginUSer = (data) => {
    fetch("http://localhost:8085/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        authorization: `${data["username"]}:${data["password"]}`,
      },
    })
      .then((res) => {
        dispatch({ type: "SET_LOGIN_DATA", paylod: res.json() });
        history.push("/");
      })
      .catch((err) => {
        console.log(`Error Occured! ${err.message}`);
        /**
         * This is a work around added to imitate the login functionality which is currently not working due to CORS error
         */
        registeredUsers.map((user) => {
          if (
            user.username === data["username"] &&
            user.password === data["password"]
          ) {
            dispatch({ type: "SET_LOGIN_DATA", payload: user });
            history.push("/");
          }
        });
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // handle login form submission;
    const data = {};
    const formData = new FormData(event.target);
    for (let [name, value] of formData.entries()) {
      data[name] = value;
    }
    console.log(data);
    loginUSer(data);
  };

  return (
    <form onSubmit={handleLogin}>
      <FormControl className={classes.formControl}>
        <TextField
          label="Username"
          variant="standard"
          required
          name="username"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          label="Password"
          type="password"
          variant="standard"
          required
          name="password"
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginFom;
