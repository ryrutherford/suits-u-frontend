import React from "react";
import HomeMedia from "./HomeMedia";
import ProductCard from "../common/ProductCard";
import Query from "../queries/Query";
import GET_PRODUCTS from "../queries/GetProducts";


const Home = () => {

    return(
        <section>
            <HomeMedia/>
            <div className="home__details">
                Look good. Feel good.
            </div>
            <Query query={GET_PRODUCTS} reservedBy="NONE" limit={4}>
                {({data: {products}}) => { return (
                    <section className="recent-products">
                            {products.map((product, i) => {
                                return (
                                    <ProductCard product={product} key={i}/>
                                );
                            })}
                    </section>
                );}}
            </Query>
        </section>
    );
}

export default Home