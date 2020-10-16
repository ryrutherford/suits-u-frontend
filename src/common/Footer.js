import React from "react";
import MUSLogo from "../imgs/MUS_Red.png"
import svgs from "../icomoon/sprite.svg"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <section>
            <footer className="footer">
                <div className="footer__flex">
                    <svg className="footer__icon">
                        <use xlinkHref={`${svgs}#icon-facebook`}/>
                    </svg>
                    <svg className="footer__icon">
                        <use xlinkHref={`${svgs}#icon-instagram`}/>
                    </svg>
                    <img src={MUSLogo} alt="MUS Logo" className="footer__img"/>
                    <svg className="footer__icon">
                        <use xlinkHref={`${svgs}#icon-linkedin`}/>
                    </svg>
                    <svg className="footer__icon">
                        <use xlinkHref={`${svgs}#icon-mail`}/>
                    </svg>
                </div>
                <div className="footer__copy">
                    <Link to="/" className="link">Suits U Montreal</Link> &copy; 2020
                </div>
            </footer>
        </section>
    );
}

export default Footer