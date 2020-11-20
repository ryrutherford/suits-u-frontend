import React from "react"
import axios from "axios";
import Cookies from "universal-cookie";
import {withRouter, Link} from "react-router-dom";
import svgs from "../icomoon/sprite.svg"

const Navbar = ({history}) => {

    const cookies = new Cookies()
    const userID = cookies.get("userID");
    let bag = JSON.parse(localStorage.getItem("bag"))
    const bagHasItems =  bag && bag.length !== 0 ? true : false;

    const handleLogout = async (event) => {
        event.preventDefault();
        axios({
                method: 'POST',
                url: `${process.env.REACT_APP_BACKEND_URL}/logout`,
                'withCredentials': true,
            })
            .then((response) => {
                history.push("/");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return(
        <div className="nav">
            <div className="nav__box">
                <span>
                    <Link to="/shop/men" className="link">Men</Link>
                </span>
                <span>
                    <Link to="/shop/women" className="link">Women</Link>
                </span>
                <span>
                    <Link to="/account" className="link">Account</Link>
                </span>
                {
                    bagHasItems &&
                    <span className="nav__cart-box">
                        <svg className="nav__cart">
                            <use xlinkHref={`${svgs}#shopping-bag`}/>
                        </svg>
                        <span className="nav__cart-number">{bag.length}</span>
                    </span>
                }
            </div>
            <div className="nav__box nav__title">
                <span><Link to="/" className="link">Suits U Montreal</Link></span>
            </div>
            <div className="nav__box">
                {userID && 
                    <span onClick={handleLogout}>
                        Logout
                    </span>
                }
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

export default withRouter(Navbar);