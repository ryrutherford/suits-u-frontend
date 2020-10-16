import React from "react";
import Video from "./Video";
import ProductCard from "../common/ProductCard";
import Query from "../queries/Query";
import GET_PRODUCTS from "../queries/GetProducts";


const Home = () => {
    return(
        <section>
            <Video/>
            <div className="home__details">
                Look good. Feel good.
            </div>
            <Query query={GET_PRODUCTS} reservedBy="NONE" categoryName="Suits & Blazers">
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