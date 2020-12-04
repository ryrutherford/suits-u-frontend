import React from "react";
import {Redirect} from "react-router-dom";
import Query from "../queries/Query";
import GET_PRODUCTS from "../queries/GetProducts";
import BagSummary from "./BagSummary";

const ShoppingBag = () => {

    let bag = JSON.parse(localStorage.getItem("bag"))
    const bagHasItems =  bag && bag.length !== 0 ? true : false;

    if(bagHasItems === false){
        return <Redirect to="/"/>
    }

    return(
        <section className="bag">
            <Query query={GET_PRODUCTS} reservedBy="NONE" bag={bag}>
                {({data: {products}}) => { return (
                    <BagSummary products={products}/>
                );}}
            </Query>
        </section>
    );
}

export default ShoppingBag;