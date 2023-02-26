import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const BookshowLink = (props) => {
  const loginDetails = useSelector((state) => state.login.loginDetails);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    if (JSON.stringify(loginDetails) === "{}") {
      dispatch({ type: "OPEN_CLOSE_MODAL", payload: true });
    } else {
      console.log(props);
      history.push(`/bookshow/${props.id}`);
    }
  };

  return (
    <Fragment>
      <Button
        variant="contained"
        color="primary"
        className="bookshow-button"
        onClick={handleClick}
      >
        BOOK SHOW
      </Button>
    </Fragment>
  );
};

export default BookshowLink;
