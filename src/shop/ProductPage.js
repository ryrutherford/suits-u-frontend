import React, {useState, useEffect} from "react";
import ProductCard from "../common/ProductCard";
import Query from "../queries/Query";
import GET_PRODUCTS from "../queries/GetProducts";
import GET_PRODUCT_COUNT from "../queries/GetProductCount";
import {withRouter, Redirect} from "react-router-dom";
import { useViewport } from "../common/ReactMediaQuery";
import axios from "axios";

const ProductPage = ({match, history}) => {

    const [categoryNames, setCategoryNames] = useState([]);
    const [sort, setSort] = useState("createdAt:desc");
    const [pageNumber, setPageNumber] = useState(1);
    const { width } = useViewport();
    const gender = match.params.gender;
    const category = match.params.category;
    const numProductsPerPage = 24;

    //console.log("pagenumber", pageNumber);

    useEffect(() => {
        //g is the gender
        const getCategories = async (g) => {
            await axios({
                method: 'GET',
                url: `${process.env.REACT_APP_BACKEND_URL}/products/categories/${g}`,
            })
            .then((response) => {
                //console.log("response",response);
                setCategoryNames(response.data);
            })
            .catch((error) => {
                //console.log("error", error);
            });
        }

        if(gender === "men"){
            getCategories("Men");
        }
        else if(gender === "women"){
            getCategories("Women");
        }
    }, [gender])

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
                <section className="product-page__categories">
                    {width >= 931 && <ul className="product-page__ul">
                        <li className="product-page__ul--title">
                            Categories
                        </li>
                        <li className={`product-page__ul--li-clickable ${category === undefined ? "product-page__ul--li-selected" : ""}`} onClick={() => {
                                        setPageNumber(1);
                                        history.replace(`/shop/${gender}`);
                                    }}>
                            <span>All</span>
                        </li>
                        {[(categoryNames.map((cat, i) => {
                                return(
                                    <li key={i} id={cat.name} className={`product-page__ul--li-clickable ${category === cat.name ? "product-page__ul--li-selected" : ""}`} onClick={() => {
                                        setPageNumber(1);
                                        history.replace(`/shop/${gender}/${cat.name}`);
                                    }}>
                                        <span>{cat.name}</span>
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
                                {[(categoryNames.map((cat, i) => {
                                    return(
                                        <option key={i} id={cat.name} value={`/shop/${gender}/${cat.name}`} className={`product-page__ul--li-clickable ${category === cat.name ? "product-page__ul--li-selected" : ""}`}>
                                            {cat.name}
                                        </option>
                                    );
                                }))]}
                            </select>
                        </div>}
                    </section>
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
                <Query query={GET_PRODUCTS} reservedBy="NONE" gender={gender} sort={sort} categoryName={category} limit={numProductsPerPage} start={(pageNumber - 1)*numProductsPerPage}>
                    {({data: {products}}) => { return (
                        products.length === 0 ? <span className={category ? `auth-error sold-out margin-auto` : `sold-out margin-auto`}>{category ? `There are no products available for ${gender} in the following category: ${category}` : `Sorry, everything is sold out! New items coming soon...`}</span> :
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
                <Query query={GET_PRODUCT_COUNT} reservedBy="NONE" gender={gender} categoryName={category}>
                    {({data: {productsCount}}) => {
                        return (
                            <div className="product-page__pagination">
                                {[...new Array(Math.ceil(productsCount/numProductsPerPage))].map((p, index) => {return (
                                        <span className={index + 1 === pageNumber ? "product-page__pagination--bold" : null} key={index + 1} onClick={(event) => {
                                            setPageNumber(parseInt(event.target.innerText));
                                            }}>{index + 1}</span>
                                    );})}
                            </div>
                            );}}
                </Query>
            </div>
        </section>
    )
}

export default withRouter(ProductPage);