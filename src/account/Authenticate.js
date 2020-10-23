import React from "react";
import Login from "./Login";
import Register from "./Register"
import Cookies from "universal-cookie";
import {Redirect} from "react-router-dom";

const Authenticate = () => {

    const cookies = new Cookies()
    if(cookies.get("userID")){
        return <Redirect to="/"/>
    }

    return (
        <section className="authenticate">
            <Login/>
            <div className="vertical-line"></div>
            <Register/>
        </section>
    );
}

export default Authenticate;