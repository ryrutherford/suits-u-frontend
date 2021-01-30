import React, {useState} from "react";


const OrderSummary = ({order}) => {

    const [expand, setExpand] = useState(0);

    return(
        <div className="order-summary">
            <div className="order-summary__heading">
                <div className="order-summary__heading--col">
                    <p className="product-card__brand">Order #{order.id}</p>
                    <p className="bag__summary-total">Order Total: ${order.price.toFixed(2)}</p>
                    <p className="product-card__size clickable" onClick={() => setExpand(1-expand)}>{expand === 0 ? "See more" : "See less"}</p>
                </div>
                <div className="order-summary__heading--col order-summary__heading--col-right">
                    <p className="order-summary__heading--date">{new Date(Date.parse(order.createdAt)).toLocaleString()}</p>
                    <a href="https://calendly.com/samantha-sagredo/suitsu-montreal-pick-up" className="product-card__size link" target="_blank" rel="noopener noreferrer">Sign up for pickup slot</a>
                </div>
            </div>
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
                            {i !== order.products.length - 1 && <span className="bag__summary-separator"></span>}
                        </React.Fragment>
                );})
            }
            <span className="bag__summary-separator"></span>
        </div>
    );
}

export default OrderSummary;