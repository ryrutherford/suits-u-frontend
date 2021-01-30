import React, {useState} from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import {withRouter} from "react-router-dom";

const Login = ({history, setForgotPassword}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        axios({
                method: 'POST',
                url: `${process.env.REACT_APP_BACKEND_URL}/auth/local`,
                'withCredentials': true,
                data: {
                  identifier: email,
                  password,
                } 
            })
            .then((response) => {
                const {id} = response.data.user;
                const cookies = new Cookies();
                cookies.set("userID", id, {path: '/', maxAge: 15*86400, domain: ".suitsumontreal.ca"}); //set cookie for 15 days
                history.push("/");
            })
            .catch((error) => {
                // Handle error.
                if(error.response){
                    try {
                        setError(error.response.data.data[0].messages[0].message);
                    }
                    catch(error){
                        setError("Something went wrong. Please clear all cookies for this site and try again.")
                    }
                }
                else {
                    //console.log(error);
                }
            });      
    }

    return (
        <form action="#" className="authenticate__form" onSubmit={handleSubmit}>
            <h2 className="authenticate__form-title">Login</h2>
            <div className="authenticate__form-group">
                <label htmlFor="loginEmail" className="authenticate__form-label">Email Address</label>
                <input type="email" className="authenticate__form-input" id="loginEmail" value={email} onChange={(event) => setEmail(event.target.value)} required autoComplete="username"/>
            </div>
            <div className="authenticate__form-group">
                <label htmlFor="loginPassword" className="authenticate__form-label">Password</label>
                <input type="password" className="authenticate__form-input" id="loginPassword" value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete="current-password"/>
            </div>
            <span className="authenticate__forgot-password" onClick={() => setForgotPassword('Forgot Password')}>Forgot Password?</span>
            <span className="auth-error">{error}</span>
            <div className="authenticate__form-group">
                <button className="button button--black">login</button>
            </div>
        </form>
    );
}

export default withRouter(Login);