import React,{useState} from "react"
import axios from "axios";
import Cookies from "universal-cookie";
import {withRouter, Link} from "react-router-dom";
import svgs from "../img/sprite.svg"

const Navbar = ({history}) => {

    const [menuOpen, setMenuOpen] = useState(false);
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
        <>
            <div className="nav__menu hidden-min" onClick={(event) => {
                event.preventDefault();
                setMenuOpen(!menuOpen);
            }}>
                <div className={menuOpen ? `nav__menu-bar-1 trans` : `nav__menu-bar-1`}></div>
                <div className={menuOpen ? `nav__menu-bar-2 trans` : `nav__menu-bar-2`}></div>
                <div className={menuOpen ? `nav__menu-bar-3 trans` : `nav__menu-bar-3`}></div>
            </div>
            {menuOpen && 
                <div className="nav__menu--popup hidden-min">
                    <ul className="product-page__ul">
                        <li className="nav__menu--li">
                            <span>
                                <Link to="/shop/men" className="link" onClick={() => setMenuOpen(false)}>Men</Link>
                            </span>
                        </li>
                        <li className="nav__menu--li">
                            <span>
                                <Link to="/shop/women" className="link" onClick={() => setMenuOpen(false)}>Women</Link>
                            </span>
                        </li>
                        <li className="nav__menu--li">
                            <span>
                                <Link to="/account" className="link" onClick={() => setMenuOpen(false)}>Account</Link>
                            </span>
                        </li>
                        {
                            bagHasItems &&
                            <li className="nav__menu--li">
                                <span className="nav__cart-box">
                                    <Link to="/bag" className="link" onClick={() => setMenuOpen(false)}>
                                        <svg className="nav__cart">
                                            <use xlinkHref={`${svgs}#shopping-bag`}/>
                                        </svg>
                                        <span className="nav__cart-number">{bag.length}</span>
                                    </Link>
                                </span>
                            </li>
                        }
                        {userID && 
                            <li className="nav__menu--li">
                                <span onClick={handleLogout}>
                                    Logout
                                </span>
                            </li>
                        }
                        <li className="nav__menu--li">
                            <span>
                                <Link to="/history" className="link" onClick={() => setMenuOpen(false)}>About</Link>
                            </span>
                        </li>
                        <li className="nav__menu--li">
                            <span>
                                <Link to="/team" className="link" onClick={() => setMenuOpen(false)}>Team</Link>
                            </span>
                        </li>
                    </ul>
                </div>
            }
            <div className="nav">
                <div className="nav__box hidden-max">
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
                            <Link to="/bag" className="link">
                                <svg className="nav__cart">
                                    <use xlinkHref={`${svgs}#shopping-bag`}/>
                                </svg>
                                <span className="nav__cart-number">{bag.length}</span>
                            </Link>
                        </span>
                    }
                </div>
                <div className="nav__box nav__title">
                    <span><Link to="/" className="link">Suits U Montreal</Link></span>
                </div>
                <div className="nav__box hidden-max">
                    {userID && 
                        <span onClick={handleLogout}>
                            Logout
                        </span>
                    }
                    <span>
                        <Link to="/history" className="link">About</Link>
                    </span>
                    <span>
                        <Link to="/team" className="link">Team</Link>
                    </span>
                </div>
            </div>
        </>
    );
}

export default withRouter(Navbar);