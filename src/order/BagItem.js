import React, {useState} from "react";
import {Link} from "react-router-dom";

const BagItem = ({product}) => {
    const [imageIndex, setImageIndex] = useState(0);
    const multipleImages = product.image.length > 1 ? true : false;
    const reduceSizes = (acc, cur) => ({size: acc.size + ", " + cur.size})
    const sizes = product.sizes.length > 1 ? product.sizes.reduce(reduceSizes).size : (product.sizes.length > 0 ? product.sizes[0].size : undefined);

    const removeFromBag = () => {
        let bag = JSON.parse(localStorage.getItem("bag"));
        let index = bag.indexOf(product.id);
        bag.splice(index, 1);
        localStorage.setItem("bag", JSON.stringify(bag));
        window.location.reload();
    }

    return(
        <>
            <div className="bag__product-img-box">
                <Link to={`/product/${product.id}`} className="link">
                    <img src={product.image[imageIndex].url} alt={product.shortDescription} className="bag__product-img" onMouseOver={() => multipleImages ? setImageIndex(1-imageIndex) : null} onMouseOut={() => multipleImages ? setImageIndex(1-imageIndex) : null}/>
                </Link>
            </div>
            <div className="bag__product-info">
                <h6 className="product-card__brand">{product.brand}</h6>
                <p className="product-card__description">{product.shortDescription}</p>
                {sizes && <p className="product-card__size">{sizes}</p>}
            </div>
            <div className="bag__product-price">
                <p className="product-card__price"><span className="product-card__price-cur">${product.price.toFixed(2)} CAD</span></p>
            </div>
            <div className="bag__product-remove">
                <p className="product-card__size" onClick={removeFromBag}>remove</p>
            </div>
        </>
    );
}

export default BagItem;