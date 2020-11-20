import React from "react";
import ProductFullPage from "./ProductFullPage";
import Query from "../queries/Query";
import GET_SINGLE_PRODUCT from "../queries/GetSingleProduct";

const ProductFull = ({match}) => {
    const productID = match.params.id;
    return(
        <section className="product-full">
            <Query query={GET_SINGLE_PRODUCT} reservedBy="NONE" id={productID} numProducts={0}>
                {({data: {products}}) => { return (
                    <>
                        {products.map((product, i) => {
                            return (
                                <ProductFullPage product={product} key={i}/>
                            );
                        })}
                    </>
                );}}
            </Query>
        </section>
    );
}

export default ProductFull;