import React, {useState} from "react";

const ProductFullPage = ({product}) => {
    const [imageIndex, setImageIndex] = useState(0);
    const multipleImages = product.image.length > 1 ? true : false;

    let bag = JSON.parse(localStorage.getItem("bag"));
    const itemInBag = bag && bag.includes(product.id) ? true : false

    const addToBag = () => {
        if(bag === null){
            bag = []
            bag.push(product.id)
            localStorage.setItem("bag", JSON.stringify(bag));
        }
        else {
            bag.push(product.id)
            localStorage.setItem("bag", JSON.stringify(bag));
        }
        window.location.reload();
    }

    const removeFromBag = () => {
        let index = bag.indexOf(product.id);
        bag.splice(index, 1);
        localStorage.setItem("bag", JSON.stringify(bag));
        window.location.reload();
    }

    const reduceSizes = (acc, cur) => ({size: acc.size + ", " + cur.size})
    const sizes = product.sizes.length > 1 ? product.sizes.reduce(reduceSizes).size : product.sizes[0].size;
    return (
            <div className="product-full-page">
                <div className="product-full-page__info">
                    {product.measurements && <>
                        <h6 className="product-card__brand">Measurements</h6>
                        <p className="product-card__description white-space">{product.measurements}</p>
                        </>}
                    {product.longDescription && <>
                        <h6 className="product-card__brand">Description</h6>
                        <p className="product-card__description white-space">{product.longDescription}</p>
                        </>}
                    {product.condition && <>
                        <h6 className="product-card__brand">Condition</h6>
                        <p className="product-card__description white-space">{product.condition}</p>
                        </>}
                </div>
                <div className="product-full-page__pics">
                    <img src={product.image[imageIndex].url} alt={product.shortDescription} className="product-full-page__pics-img" onMouseOver={() => multipleImages ? setImageIndex(1-imageIndex) : null} onMouseOut={() => multipleImages ? setImageIndex(1-imageIndex) : null}/>
                </div>
                <div className="product-full-page__info">
                    <div className="product-full-page__info-row">
                        <h6 className="product-card__brand">{product.brand}</h6>
                        <p className="product-card__brand"><span className="product-card__brand product-card__price-og">${product.originalPrice}</span>{" | "}<span className="product-card__brand">${product.price}</span></p>
                    </div>
                    <p className="product-card__description">{product.shortDescription}</p>
                    <p className="product-card__size">{sizes}</p>
                    <button className="button button--add button--black" onClick={itemInBag ? removeFromBag : addToBag}>{itemInBag ? "Remove from bag" : "Add to bag"}</button>
                    <p className="product-full-page__info-disclaimer">All orders must be picked up in person in Montreal</p>
                </div>
            </div>
    );
}

export default ProductFullPage;