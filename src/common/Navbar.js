import React from "react"

const Navbar = () => {
    return(
        <div className="nav">
            <div className="nav__box">
                <span>
                    Men
                </span>
                <span>
                    Women
                </span>
                <span>
                    Account
                </span>
            </div>
            <div className="nav__box nav__title">
                <span>Suits U Montreal</span>
            </div>
            <div className="nav__box">
                <span>
                    History
                </span>
                <span>
                    Team
                </span>
            </div>
        </div>
    );
}

export default Navbar