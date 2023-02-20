import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';


const Header = function () {
    //let accessToken = useState(false,setAccessToken);
    const [accessToken, setAccessToken] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [releasedMovieClicked, setReleasedMovieClicked] = useState(true)
    const [username,setUsername] = useState('admin@movieapp.com')
    const [password,setPassword] = useState('movieapp@123')
    const handleClose = () => {
        setAccessToken(false);
    };
    var loginFunction = ()=>{
        return (
            <span>
            <Button variant="contained" className='login' disabled={accessToken} onClick={()=>{
                setAccessToken(true)
                loginClickHandler()
            }}>Login</Button>
            </span>
        )
    }
    var modalFunction = ()=>{
        return (
            <div className='modal'>
                <Modal open={accessToken} onClose={handleClose}>
                    <div>Hi Himanshu Here</div>
                </Modal>
            </div>
        )
    }

    const loginClickHandler = () => {
        username === "" ? setUsername('admin@movieapp.com') : username;
        password === "" ? setPassword('movieapp@123') : password;

        if (username === "" || password === "") { return }

        let dataLogin = null
        setLoggedIn(true)
        if(loggedIn){/*close modal*/}
        let token = 'Basic ' + window.btoa(username + ":" + password);
        console.log(token)
        fetch("http://localhost:8085/api/v1/auth/login", {
        // Adding method type
        method: "POST",
        mode: 'no-cors',
        // Adding headers to the request
        headers: {
            'Accept': 'application/json;charset=UTF-8',
            'authorization': 'token'
        }
        })
       .then(response => response.json())
       .then(json => console.log(json))
       .catch(error => console.log('Authorization failed : ' + error.message));
    }

    var logoutFunction = ()=>{
        return (
            <span>
            <Button variant="contained" className='logout' disabled={!accessToken} onClick={()=>{
                setAccessToken(false)
            }}>Logout</Button>
            </span>
        )
    }

    return (
        <div className='pop-up-modal'>
        <div className="header" >
            <span>
            <img src={logo} className='logo'></img>
            </span>
            {!accessToken?loginFunction():logoutFunction()}
            <Button variant="contained" className='bookShow' color='primary' disabled={!releasedMovieClicked} onClick={()=>{
                setAccessToken(false)
            }}>Book Show</Button>
        </div>
          {modalFunction()}
        </div>
    )
}

export default Header;