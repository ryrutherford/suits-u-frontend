import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import OrderSummary from "./OrderSummary";

const Account = () => {
    const cookies = new Cookies()
    const userID = cookies.get("userID");

    const [orders, setOrders] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const getOrders = async () => {
            await axios({
                method: 'GET',
                url: `${process.env.REACT_APP_BACKEND_URL}/orders/find/${userID}`,
                'withCredentials': true,
            })
            .then((response) => {
                //console.log("response",response);
                setOrders(response.data);
            })
            .catch((error) => {
                //console.log("error", error);
                setError("Something went wrong. Please clear all cookies for this site and try again!");
                setOrders([]);
            });
        }

        if(userID){
            getOrders();
        }
    }, [userID, error]);

    if(!userID){
        return <Redirect to="/authenticate"/>
    }

    return (
        <section className="account">
            <h2 className="account__heading">Order History</h2>
            <span className="bag__summary-separator"></span>
            {error && <p className="product-card__size auth-error">{error}</p>}
            {orders.length !== 0 && 
                orders.map((order, index) => {
                    return(
                        <OrderSummary key={index} order={order} setError={setError}/>
                    );
                })
            }
            {orders.length === 0 && !error &&
                <p className="product-card__size">You don't have any orders yet!</p>
            }
        </section>
    );
}

export default Account;