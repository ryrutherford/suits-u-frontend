import React from "react";
import {Redirect} from "react-router-dom";
import Cookies from "universal-cookie";

const Account = () => {

    const cookies = new Cookies()
    if(!cookies.get("userID")){
        return <Redirect to="/authenticate"/>
    }
    else {
        console.log(cookies.get("userID"))
        return (
            <section className="account">
                Acc
            </section>
        );
    }
}

export default Account;