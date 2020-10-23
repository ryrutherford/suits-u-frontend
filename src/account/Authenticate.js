import React, {useState} from "react";
import Login from "./Login";
import Register from "./Register"
import ForgotPassword from "./ForgotPassword";
import Cookies from "universal-cookie";
import {Redirect} from "react-router-dom";

const Authenticate = () => {

    const [confirmEmailMessage, setCEM] = useState('');
    const [forgotPassword, setForgotPassword] = useState('');

    const cookies = new Cookies()
    if(cookies.get("userID")){
        return <Redirect to="/"/>
    }

    return (
        <section className="authenticate">
            {!confirmEmailMessage && !forgotPassword &&
                <>
                    <Login setForgotPassword={setForgotPassword}/>
                        <div className="vertical-line"></div>
                    <Register setCEM={setCEM}/>
                </>
            }
            {forgotPassword &&
                <ForgotPassword setForgotPassword={setForgotPassword}/>
            }
            {confirmEmailMessage &&
                <div className="popup">
                    <span className="confirm-email-message">{confirmEmailMessage}</span>
                    <button className="button button--black" onClick={() => setCEM('')}>OK</button>
                </div>
            }
        </section>
    );
}

export default Authenticate;