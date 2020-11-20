import React, {useState} from "react";
import {Link} from "react-router-dom";

const ProductCard = ({product}) => {
    const [imageIndex, setImageIndex] = useState(0);
    const multipleImages = product.image.length > 1 ? true : false;
    const reduceSizes = (acc, cur) => ({size: acc.size + ", " + cur.size})
    const sizes = product.sizes.length > 1 ? product.sizes.reduce(reduceSizes).size : product.sizes[0].size;
    return (
            <div className="product-card">
                <Link to={`/product/${product.id}`} className="link">
                <img src={product.image[imageIndex].url} alt={product.shortDescription} className="product-card__img" onMouseOver={() => multipleImages ? setImageIndex(1-imageIndex) : null} onMouseOut={() => multipleImages ? setImageIndex(1-imageIndex) : null}/>
                <h6 className="product-card__brand">{product.brand}</h6>
                <p className="product-card__description">{product.shortDescription}</p>
                <p className="product-card__size">{sizes}</p>
                <p className="product-card__price"><span className="product-card__price-og">${product.originalPrice}</span>{" | "}<span className="product-card__price-cur">${product.price}</span></p>
                </Link>
            </div>
    );
}

export default ProductCard;