import React, {useState} from "react";
import axios from "axios";

const Register = ({setCEM}) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    //TODO: change localhost so domain name
    const handleSubmit = async (event) => {
        event.preventDefault();
        axios({
                method: 'POST',
                url: `${process.env.REACT_APP_BACKEND_URL}/auth/local/register`,
                'withCredentials': true,
                data: {
                    username,
                    email,
                    password,
                } 
            })
            .then((response) => {
                setCEM("Account registration successful, please confirm your email before logging in");
            })
            .catch((error) => {
                // Handle error.
                if(error.response){
                    setError(error.response.data.data[0].messages[0].message);
                }
                else {
                    console.log(error);
                }
            });      
    }

    return (
        <form action="#" className="authenticate__form" onSubmit={handleSubmit}>
            <h2 className="authenticate__form-title">Register</h2>
            <div className="authenticate__form-group">
                <label htmlFor="username" className="authenticate__form-label">Username</label>
                <input type="text" className="authenticate__form-input" id="username" value={username} onChange={(event) => setUsername(event.target.value)} required/>
            </div>
            <div className="authenticate__form-group">
                <label htmlFor="regEmail" className="authenticate__form-label">Email Address</label>
                <input type="email" className="authenticate__form-input" id="regEmail" value={email} onChange={(event) => setEmail(event.target.value)} required/>
            </div>
            <div className="authenticate__form-group">
                <label htmlFor="regPassword" className="authenticate__form-label">Password</label>
                <input type="password" className="authenticate__form-input" id="regPassword" value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete="new-password"/>
            </div>
            <span className="auth-error">{error}</span>
            <div className="authenticate__form-group">
                <button className="button button--black">register</button>
            </div>
        </form>
    );
}

export default Register;