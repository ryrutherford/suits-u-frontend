import React, {useState} from "react";
import ProductCard from "../common/ProductCard";
import Query from "../queries/Query";
import GET_PRODUCTS from "../queries/GetProducts";
import GET_CATEGORIES from "../queries/GetCategories";
import {withRouter, Redirect} from "react-router-dom";
import { useViewport } from "../common/ReactMediaQuery";
import axios from "axios";

const ProductPage = ({match, history}) => {

    const gender = match.params.gender;
    const category = match.params.category;
    //const [category, setCategory] = useState(undefined);
    const [sort, setSort] = useState("createdAt:desc");
    const { width } = useViewport();

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
                            {width >= 931 && <ul className="product-page__ul">
                                <li className="product-page__ul--title">
                                    Categories
                                </li>
                                <li className={`product-page__ul--li-clickable ${category === undefined ? "product-page__ul--li-selected" : ""}`} onClick={() => {
                                                history.replace(`/shop/${gender}`);
                                            }}>
                                    <span>All</span>
                                </li>
                                {[([...new Set(products.map((p) => p.category.name))].map((cat, i) => {
                                        return(
                                            <li key={i} id={cat} className={`product-page__ul--li-clickable ${category === cat ? "product-page__ul--li-selected" : ""}`} onClick={(event) => {
                                                //event.preventDefault();
                                                //setCategory(product.category.name);
                                                history.replace(`/shop/${gender}/${cat}`);
                                            }}>
                                                <span>{cat}</span>
                                            </li>
                                        );
                                    }))]}
                            </ul>}
                            {width < 931 &&
                                <div className="product-page__mobile">
                                    <ul className="product-page__ul">
                                        <li className="product-page__ul--title">
                                            Categories
                                        </li>
                                    </ul>
                                    <select onChange={(event) => {
                                        history.replace(event.target.value);
                                    }}>
                                        <option value={`/shop/${gender}`} className={`product-page__ul--li-clickable ${category === undefined ? "product-page__ul--li-selected" : ""}`}>
                                            All
                                        </option>
                                        {[([...new Set(products.map((p) => p.category.name))].map((cat, i) => {
                                            return(
                                                <option key={i} id={cat} value={`/shop/${gender}/${cat}`} className={`product-page__ul--li-clickable ${category === cat ? "product-page__ul--li-selected" : ""}`}>
                                                    {cat}
                                                </option>
                                            );
                                        }))]}
                                        </select>
                                    </div>}
                        </section>
                    );}}
                </Query>
                {width < 931 && <section className="product-page__filters">
                    <div className="product-page__mobile">
                        <ul className="product-page__ul">
                            <li className="product-page__ul--title">
                                Sort
                            </li>
                        </ul>
                        <select className="custom-select" onChange={(event) => {changeSorting(event, event.target.value)}}>
                            <option value="createdAt:desc" className={`product-page__ul--li-clickable ${sort === "createdAt:desc" ? "product-page__ul--li-selected" : ""}`}>
                                Newest Arrivals
                            </option>
                            <option value="price:asc" className={`product-page__ul--li-clickable ${sort === "price:asc" ? "product-page__ul--li-selected" : ""}`}>
                                Price: Low-High
                            </option>
                            <option value="price:desc" className={`product-page__ul--li-clickable ${sort === "price:desc" ? "product-page__ul--li-selected" : ""}`}>
                                Price: High-Low
                            </option>
                        </select>
                    </div>
                </section>
                }
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
                {width >= 931 && <section className="product-page__filters">
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
                </section>}
            </div>
        </section>
    )
}

export default withRouter(ProductPage);