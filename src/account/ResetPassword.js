import React, {useState} from "react";
import {useLocation, Redirect, withRouter} from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import qs from "qs";


const ResetPassword = ({history}) => {

    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    
    const location = useLocation();
    //code for strapi
    const code = qs.parse(location.search, { ignoreQueryPrefix: true }).code;

    //if the user is already authenticated or there was no code param theyre not allowed to access this route
    const cookies = new Cookies()
    if(cookies.get("userID") || !code){
        return <Redirect to="/"/>
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        axios({
                method: 'POST',
                url: `${process.env.REACT_APP_BACKEND_URL}/auth/reset-password`,
                'withCredentials': true,
                data: {
                  code,
                  password,
                  passwordConfirmation: passwordConfirm,
                } 
            })
            .then((response) => {
                history.push("/authenticate");
            })
            .catch((error) => {
                // Handle error.
                if(error.response){
                    setError(error.response.data.data[0].messages[0].message);
                }
                else {
                    //console.log(error);
                }
            });      
    }

    return (
        <section className="authenticate">
            <form action="#" className="authenticate__form" onSubmit={handleSubmit}>
                <h2 className="authenticate__form-title">Reset Password</h2>
                <div className="authenticate__form-group">
                    <label htmlFor="password" className="authenticate__form-label">Password</label>
                    <input type="password" className="authenticate__form-input" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete="new-password"/>
                </div>
                <div className="authenticate__form-group">
                    <label htmlFor="passwordConfirm" className="authenticate__form-label">Confirm Password</label>
                    <input type="password" className="authenticate__form-input" id="passwordConfirm" value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)} required autoComplete="off"/>
                </div>
                <span className="auth-error">{error}</span>
                <div className="authenticate__form-group">
                    <button className="button button--black">Submit</button>
                </div>
            </form>
        </section>
    );
}

export default withRouter(ResetPassword);