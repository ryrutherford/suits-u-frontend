import React, {useState} from "react";
import {Link, withRouter} from "react-router-dom";
import BagItem from "./BagItem";
import Cookies from "universal-cookie";
import axios from "axios";

const BagSummary = ({history, products}) => {
    
    const [beforeOrder, setBeforeOrder] = useState(false);
    const [error, setError] = useState("");
    
    let bag = JSON.parse(localStorage.getItem("bag"));
    const cookies = new Cookies()

    const loggedIn = cookies.get("userID");

    const placeOrder = (event) => {
        event.preventDefault();
        axios({
                method: 'POST',
                url: `${process.env.REACT_APP_BACKEND_URL}/orders`,
                'withCredentials': true,
                data: {
                  products: bag,
                  userID: loggedIn,
                } 
            })
            .then((response) => {
                localStorage.setItem("bag", JSON.stringify([]));
                history.push("/account");
            })
            .catch((error) => {
                setError("Something went wrong. Please clear all cookies for this site and try again!");
                setBeforeOrder(false);
            });
    }

    //if there are no products then all items in the bag are no longer available
    if(products.length === 0){
        localStorage.setItem("bag", JSON.stringify([]));
        return(
            <div className="popup">
                <span className="confirm-email-message">The items you had in your bag or no longer available. Sorry!</span>
                <Link to="/" className="link"><button className="button button--black">OK</button></Link>
            </div>
        );
    }

    //if there are more items in the bag then in products --> some of the products are no longer available
    let productsUnavailable = "";
    if(bag.length !== products.length){
        productsUnavailable = "Some items in your bag are no longer available. Sorry!";
        let productIDs = products.map((product) => product.id);
        bag.forEach((id, index) => {
            if(productIDs.includes(id) === false){
                bag.splice(index, 1);
            }
        });
        localStorage.setItem("bag", JSON.stringify(bag));
    }

    const sumPrices = (acc, cur) => ({price: acc.price + cur.price})
    const total = products.reduce(sumPrices).price
    return(
        <section className="bag__summary">
            {beforeOrder && 
                <>
                    <div className="bag__summary-heading">
                        <h2>Order Agreement</h2>
                        <span className="bag__summary-separator"></span>
                    </div>
                    <div className="bag__summary-rules">
                        <span>{"\u21A0"}</span><span> All orders must be picked up in person in Montreal (Plateau area). We do not deliver!</span>
                    </div>
                    <div className="bag__summary-rules">
                        <span>{"\u21A0"}</span><span> Upon picking up your order you must show proof that you are a student (e.g. student ID, timetable).</span>
                    </div>
                    <div className="bag__summary-rules">
                        <span>{"\u21A0"}</span><span> If you are unable to make your pickup appointment to get your order please cancel the Calendly booking 48 hours in advance and book a new appointment that works for you.</span>
                    </div>
                    <div className="bag__summary-rules">
                        <span>{"\u21A0"}</span><span> We only accept payment through Interac e-Transfer. We do not accept credit, debit or cash!</span>
                    </div>
                    <div className="bag__summary-rules">
                        <span>{"\u21A0"}</span><span> We do not accept returns.</span>
                    </div>
                    <div className="bag__summary-rules">
                        <span>{"\u21A0"}</span><span> We cannot guarantee that you will be able to try items on.</span>
                    </div>
                    <div className="bag__summary-rules">
                        <span>{"\u21A0"}</span><span> You must wear a mask at all times during the pickup.</span>
                    </div>
                    <div className="bag__summary-choice">
                        <button className="button button--black" onClick={() => setBeforeOrder(false)}>Decline</button>
                        <button className="button button--black" onClick={placeOrder}>Accept</button>
                    </div>
                </>
            }
            {!beforeOrder && 
                <>
                    <div className="bag__summary-heading">
                        <h2>Shopping Bag</h2>
                        {productsUnavailable !== "" && <p className="auth-error">{productsUnavailable}</p>}
                        {error !== "" && <p className="auth-error">{error}</p>}
                        <span className="bag__summary-separator"></span>
                    </div>
                    {
                        products && products.map((product, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <BagItem product={product}/>
                                    <span className="bag__summary-separator"></span>
                                </React.Fragment>
                            );
                        })
                    }
                    <p className="bag__summary-total bag__summary-total--1">Order Total</p>
                    <p className="bag__summary-total bag__summary-total--2">${total.toFixed(2)} CAD</p>
                    <button className={loggedIn ? "button button--black bag__summary-button" : "unclickable bag__summary-button"} onClick={loggedIn ? () => setBeforeOrder(true) : null}>Place Order</button>
                    {!loggedIn && <p className="product-full-page__info-disclaimer bag__summary-disclaimer">You must be logged in to place an order. Login or register <Link to="/account" className="link"><b>here</b></Link></p>}
                </>
            }
        </section>
    );
}

export default withRouter(BagSummary);