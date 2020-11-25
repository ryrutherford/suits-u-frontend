import React, {useState} from "react";
import axios from "axios";

const OrderSummary = ({order, setResponse, setError, beforeCancel, setCancel}) => {

    const [expand, setExpand] = useState(0);
    const cancelOrder = (event, id) => {
        event.preventDefault();
        axios({
                method: 'DELETE',
                url: `${process.env.REACT_APP_BACKEND_URL}/orders/${id}`,
                'withCredentials': true,
                data: {
                    id
                }
            })
            .then((response) => {
                setResponse(`Order #${id} cancelled succesfully`);
                setCancel(false);
            })
            .catch((error) => {
                setError("Something went wrong. Please clear all cookies for this site and try again!");
                setCancel(false);
            });
    }

    return(
        <div className="order-summary">
            {beforeCancel &&
                <div className="popup">
                    <span className="confirm-email-message">Are you sure you want to cancel this order?</span>
                    <span className="product-card__size"> If yes, please cancel your pick up slot on Calendly as well.</span>
                    <div className="order-summary-choice">
                        <button className="button button--black" onClick={() => setCancel(false)}>Back</button>
                        <button className="button button--black" onClick={(event) => cancelOrder(event, order.id)}>Continue</button>
                    </div>
                </div>
            }
            {!beforeCancel &&
            <div className="order-summary__heading">
                <div className="order-summary__heading--col">
                    <p className="product-card__brand">Order #{order.id}</p>
                    <p className="bag__summary-total">Order Total: ${order.price.toFixed(2)}</p>
                    <p className="product-card__size clickable" onClick={() => setExpand(1-expand)}>{expand === 0 ? "See more" : "See less"}</p>
                </div>
                <div className="order-summary__heading--col order-summary__heading--col-right">
                    <p className="order-summary__heading--date">{new Date(Date.parse(order.createdAt)).toLocaleString()}</p>
                    <a href="https://calendly.com/ry-rutherford99/suits-u-pickup?month=2020-11" className="product-card__size link" target="_blank" rel="noopener noreferrer">Sign up for pickup slot</a>
                    {/*<p className="product-card__brand clickable" onClick={() => {
                        setExpand(0);
                        setCancel(true);
                        }}>Cancel Order</p>*/}
                </div>
            </div>
            }
            {expand === 1 && 
                order.products.map((product, i) => {
                    return(
                        <React.Fragment key={i}>
                            <div className="order-summary__products">
                                <div className="bag__product-img-box">
                                    <img src={product.image[0].url} alt={product.shortDescription} className="bag__product-img"/>
                                </div>
                                <div className="bag__product-info">
                                    <h6 className="product-card__brand">{product.brand}</h6>
                                    <p className="product-card__description">{product.shortDescription}</p>
                                </div>
                                <div className="bag__product-price">
                                    <p className="product-card__price"><span className="product-card__price-cur">${product.price.toFixed(2)} CAD</span></p>
                                </div>
                            </div>
                        </React.Fragment>
                );})
            }
            {!beforeCancel && <span className="bag__summary-separator"></span>}
        </div>
    );
}

export default OrderSummary;