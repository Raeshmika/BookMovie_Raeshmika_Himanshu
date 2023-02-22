import React, { Fragment } from "react";
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import LoginAndRegisterModal from "./LoginAndRegisterModal";




const Login = () => {
   
    const dispatch = useDispatch();
    const openModal = useSelector(state=>state.openModal)
   
    return (
        <Fragment>
        <Button variant="contained" 
              onClick={() => dispatch({"type":"OPEN_CLOSE_MODAL",payload:!openModal})}>Login
        </Button>
        <LoginAndRegisterModal/>
        </Fragment>
        
    )
}

export default Login;