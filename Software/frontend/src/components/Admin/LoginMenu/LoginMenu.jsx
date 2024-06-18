import React, {useContext} from "react";

import {FaBars} from "react-icons/fa6";
import {useNavigate} from "react-router-dom";
import {GlobalContext} from "../../../context/AppContext.jsx";

const LoginMenu = () =>{
    const navigate = useNavigate()
    const { setIsLogIn} = useContext(GlobalContext)
    function logOut() {
        setIsLogIn(false);
        localStorage.removeItem('token');
        localStorage.removeItem('onNext');
        navigate("/")
    }
    return(
        <div className="login-menu">
            <button onClick={logOut}>Log out</button>
        </div>
    );
}

export default LoginMenu;