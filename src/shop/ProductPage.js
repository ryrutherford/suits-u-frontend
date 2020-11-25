import React, {useState} from "react";
import ProductCard from "../common/ProductCard";
import Query from "../queries/Query";
import GET_PRODUCTS from "../queries/GetProducts";
import GET_CATEGORIES from "../queries/GetCategories";
import {withRouter, Redirect} from "react-router-dom";

const ProductPage = ({match, history}) => {

    const gender = match.params.gender;
    const category = match.params.category;
    //const [category, setCategory] = useState(undefined);
    const [sort, setSort] = useState("createdAt:desc");

    if(gender !== "men" && gender !== "women"){
        return <Redirect to="/"/>;
    }

    const changeSorting = (event, sortingMethod) => {
        event.preventDefault();
        setSort(sortingMethod);
    }

    return(
        <section>
            <div className="product-page">
                <Query query={GET_CATEGORIES} reservedBy="NONE" gender={gender} numProducts={0}>
                    {({data: {products}}) => { return (
                        <section className="product-page__categories">
                            <ul className="product-page__ul">
                                <li className="product-page__ul--title">
                                    Categories
                                </li>
                                <li className={`product-page__ul--li-clickable ${category === undefined ? "product-page__ul--li-selected" : ""}`} onClick={(event) => {
                                                //event.preventDefault();
                                                history.replace(`/shop/${gender}`);
                                            }}>
                                    <span>All</span>
                                </li>
                                {[...new Set(products.map((product, i) => {
                                        return(
                                            <li key={i} id={product.category.name} className={`product-page__ul--li-clickable ${category === product.category.name ? "product-page__ul--li-selected" : ""}`} onClick={(event) => {
                                                //event.preventDefault();
                                                //setCategory(product.category.name);
                                                history.replace(`/shop/${gender}/${product.category.name}`);
                                            }}>
                                                <span>{product.category.name}</span>
                                            </li>
                                        );
                                    }))]}
                            </ul>
                        </section>
                    );}}
                </Query>
                <Query query={GET_PRODUCTS} reservedBy="NONE" gender={gender} sort={sort} numProducts={0} categoryName={category}>
                    {({data: {products}}) => { return (
                        <section className="product-page__products">
                            {products.map((product, i) => {
                                return (
                                    <ProductCard product={product} key={i}/>
                                );
                            })}
                        </section>
                    );}}
                </Query>
                <section className="product-page__filters">
                    <ul className="product-page__ul">
                        <li className="product-page__ul--title">
                            Sort
                        </li>
                        <li className={`product-page__ul--li-clickable ${sort === "createdAt:desc" ? "product-page__ul--li-selected" : ""}`} onClick={(event) => changeSorting(event, "createdAt:desc")}>
                            <span>Newest Arrivals</span>
                        </li>
                        <li className={`product-page__ul--li-clickable ${sort === "price:asc" ? "product-page__ul--li-selected" : ""}`} onClick={(event) => changeSorting(event, "price:asc")}>
                            <span>Price: Low-High</span>
                        </li>
                        <li className={`product-page__ul--li-clickable ${sort === "price:desc" ? "product-page__ul--li-selected" : ""}`} onClick={(event) => changeSorting(event, "price:desc")}>
                            <span>Price: High-Low</span>
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    )
}

export default withRouter(ProductPage);