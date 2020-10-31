import React from "react";

const ProductCard = ({product}) => {
    return (
        <div className="product-card">
            <img src={product.image[0].formats.medium.url} alt={product.shortDescription} className="product-card__img"/>
            <h6 className="product-card__brand">{product.brand}</h6>
            <p className="product-card__description">{product.shortDescription}</p>
            <p className="product-card__size">{product.size.size}</p>
            <p className="product-card__price">${product.price}</p>
        </div>
    );
}

export default ProductCard;