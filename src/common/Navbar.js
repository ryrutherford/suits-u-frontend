import React from "react"
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <div className="nav">
            <div className="nav__box">
                <span>
                    <Link to="/men" className="link">Men</Link>
                </span>
                <span>
                    <Link to="/women" className="link">Women</Link>
                </span>
                <span>
                    <Link to="/account" className="link">Account</Link>
                </span>
            </div>
            <div className="nav__box nav__title">
                <span><Link to="/" className="link">Suits U Montreal</Link></span>
            </div>
            <div className="nav__box">
                <span>
                    <Link to="/history" className="link">History</Link>
                </span>
                <span>
                    <Link to="/team" className="link">Team</Link>
                </span>
            </div>
        </div>
    );
}

export default Navbar