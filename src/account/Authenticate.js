import React from "react";

const Authenticate = () => {
    return (
        <section className="authenticate">
            <form action="#" className="authenticate__form">
                <h2 className="authenticate__form-title">Login</h2>
                <div className="authenticate__form-group">
                    <label for="loginEmail" className="authenticate__form-label">Email Address</label>
                    <input type="text" className="authenticate__form-input" id="loginEmail" required/>
                </div>
                <div className="authenticate__form-group">
                    <label for="loginPassword" className="authenticate__form-label">Password</label>
                    <input type="password" className="authenticate__form-input" id="loginPassword" required/>
                </div>
                <div className="authenticate__form-group">
                    <button className="button button--black">login</button>
                </div>
            </form>
            <div className="vertical-line"></div>
            <form action="#" className="authenticate__form">
                <h2 className="authenticate__form-title">Register</h2>
                <div className="authenticate__form-group">
                    <label for="fname" className="authenticate__form-label">First Name</label>
                    <input type="text" className="authenticate__form-input" id="fname" required/>
                </div>
                <div className="authenticate__form-group">
                    <label for="lname" className="authenticate__form-label">Last Name</label>
                    <input type="text" className="authenticate__form-input" id="lname" required/>
                </div>
                <div className="authenticate__form-group">
                    <label for="regEmail" className="authenticate__form-label">Email Address</label>
                    <input type="text" className="authenticate__form-input" id="regEmail" required/>
                </div>
                <div className="authenticate__form-group">
                    <label for="regPassword" className="authenticate__form-label">Password</label>
                    <input type="password" className="authenticate__form-input" id="regPassword" required/>
                </div>
                <div className="authenticate__form-group">
                    <button className="button button--black">register</button>
                </div>
            </form>
        </section>
    );
}

export default Authenticate;