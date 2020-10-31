import React from "react";
import MUSLogo from "../imgs/MUS_inverse.png"
import svgs from "../icomoon/sprite.svg"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <section>
            <footer className="footer">
                <div className="footer__flex">
                    <a href="https://www.facebook.com/suitsumontreal" className="link" target="_blank" rel="noopener noreferrer">
                        <svg className="footer__icon">
                            <use xlinkHref={`${svgs}#icon-facebook`}/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/suitsumontreal/" className="link" target="_blank" rel="noopener noreferrer">
                        <svg className="footer__icon">
                            <use xlinkHref={`${svgs}#icon-instagram`}/>
                        </svg>
                    </a>
                    <a href="https://www.mus.mcgill.ca/" className="link" target="_blank" rel="noopener noreferrer">
                        <img src={MUSLogo} alt="MUS Logo" className="footer__img"/>
                    </a>
                    <a href="https://www.linkedin.com/company/suits-u-montreal/?viewAsMember=true" className="link" target="_blank" rel="noopener noreferrer">
                        <svg className="footer__icon">
                            <use xlinkHref={`${svgs}#icon-linkedin`}/>
                        </svg>
                    </a>
                    <a href="mailto:contact@suitsumontreal.ca" className="link">
                        <svg className="footer__icon">
                            <use xlinkHref={`${svgs}#icon-mail`}/>
                        </svg>
                    </a>
                </div>
                <div className="footer__copy">
                    <Link to="/" className="link">Suits U Montreal</Link> &copy; {new Date().getFullYear()}
                </div>
            </footer>
        </section>
    );
}

export default Footer