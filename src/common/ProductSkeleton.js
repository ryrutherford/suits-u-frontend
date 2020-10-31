import React from "react";
import Skeleton from 'react-loading-skeleton';

const ProductSkeleton = ({numProducts}) => {
    let productSkeletons = [];
    for (let i = 0; i < numProducts; i++) {
        productSkeletons.push(
            <div className="product-card" key={i}>
                <Skeleton className="product-card__img" height="26rem" width="18rem"/>
                <Skeleton count={3} width="18rem"/>
            </div>
        );
    }
    return (
        <div className="recent-products">
            {productSkeletons}
        </div>
    );
}

export default ProductSkeleton;