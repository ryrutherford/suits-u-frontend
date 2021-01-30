import React from "react"
//import mccarthy from "../img/logo-mccarthy.png";
import imk from "../img/logo-imk.png";
import langlois from "../img/logo-langlois.png";
//import dentons from "../img/logo-dentons.png";
//import svgs from "../img/sprite.svg";

const Sponsorships = () => {
    return(
        <section className="sponsorships">
            <div className="team__title">
                <h2>Donors</h2>
            </div>
            <div className="container__carousel">
                <div className="carousel">
                    <a href="https://imk.ca/" className="link carousel__link" target="_blank" rel="noopener noreferrer"><img src={imk} alt="imk" className="carousel__image"/></a>
                    {/*<a href="https://www.mccarthy.ca/en/contact-us/montreal" className="link carousel__link" target="_blank" rel="noopener noreferrer"><img src={mccarthy} alt="mccarthy" className="carousel__image"/></a>
                    <a href="https://claret.ca/" className="link carousel__link" target="_blank" rel="noopener noreferrer">
                        <svg className="carousel__image">
                            <use xlinkHref={`${svgs}#logo-claret`}/>
                        </svg>
                    </a>*/}
                    <a href="https://langlois.ca/en/" className="link carousel__link" target="_blank" rel="noopener noreferrer"><img src={langlois} alt="imk" className="carousel__image"/></a>
                    {/*<a href="https://www.dentons.com/en/global-presence/canada/montreal" className="link carousel__link" target="_blank" rel="noopener noreferrer"><img src={dentons} alt="dentons" className="carousel__image"/></a>*/}
                </div>
            </div>
        </section>
    );
}

export default Sponsorships;