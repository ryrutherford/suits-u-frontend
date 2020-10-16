import React from "react";

const ProductCard = ({product}) => {
    return (
        <div className="product-card">
            <img src={product.image[0].formats.medium.url} alt={product.description} className="product-card__img"/>
            <h6 className="product-card__brand">{product.brand}</h6>
            <p className="product-card__description">{product.description}</p>
            <p className="product-card__size">{product.size.size}</p>
        </div>
    );
}

export default ProductCard;