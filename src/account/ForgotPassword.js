import React, {useState} from "react";
import axios from "axios";

const ForgotPassword = ({setForgotPassword}) => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_BACKEND_URL}/auth/forgot-password`,
            'withCredentials': true,
            data: {
              email
            } 
        })
        .then((response) => {
            //setting the forgot password state to the empty string will show the login session again
            setForgotPassword('');
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
        <div className="authenticate__forgot-password--form">
            <form action="#" className="authenticate__form" onSubmit={handleSubmit}>
                <h2 className="authenticate__form-title">Forgot Password</h2>
                <div className="authenticate__form-group">
                    <label htmlFor="loginEmail" className="authenticate__form-label">Email Address</label>
                    <input type="email" className="authenticate__form-input" id="loginEmail" value={email} onChange={(event) => setEmail(event.target.value)} required/>
                </div>
                <span className="auth-error">{error}</span>
                <div className="authenticate__form-group">
                    <button className="button button--black">Submit</button>
                    <p className="product-full-page__info-disclaimer bag__summary-disclaimer">Note: Please Check Your Junk Mail For the Reset Password Email</p>
                </div>
            </form>
        </div>
    );
}

export default ForgotPassword