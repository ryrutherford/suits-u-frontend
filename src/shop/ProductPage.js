import React, {useState} from "react";
import ProductCard from "../common/ProductCard";
import Query from "../queries/Query";
import GET_PRODUCTS from "../queries/GetProducts";
import GET_CATEGORIES from "../queries/GetCategories";

const ProductPage = ({match}) => {

    const gender = match.params.gender;
    const [category, setCategory] = useState(undefined);
    const [sort, setSort] = useState("createdAt:desc");

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
                                <li className="product-page__ul--title product-page__ul--li-clickable" onClick={(event) => {
                                                event.preventDefault();
                                                setCategory(undefined);
                                            }}>
                                    All Categories
                                </li>
                                {[...new Set(products.map((product, i) => {
                                        return(
                                            <li key={i} id={product.category.name} className="product-page__ul--li-clickable" onClick={(event) => {
                                                event.preventDefault();
                                                setCategory(product.category.name);
                                            }}>
                                                <span>{product.category.name}</span>
                                            </li>
                                        );
                                    }))]}
                            </ul>
                        </section>
                    );}}
                </Query>
                <Query query={GET_PRODUCTS} reservedBy="NONE" gender={gender} sort={sort} numProducts={8} categoryName={category}>
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
                        <li className="product-page__ul--li-clickable" onClick={(event) => changeSorting(event, "createdAt:desc")}>
                            Newest Arrivals
                        </li>
                        <li className="product-page__ul--li-clickable" onClick={(event) => changeSorting(event, "price:asc")}>
                            Price: Low-High
                        </li>
                        <li className="product-page__ul--li-clickable" onClick={(event) => changeSorting(event, "price:desc")}>
                            Price: High-Low
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    )
}

export default ProductPage;