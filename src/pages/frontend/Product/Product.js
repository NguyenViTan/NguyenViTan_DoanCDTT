import React, { useEffect, useState } from "react";


import ProductItem from "../../../components/frontend/productitem";

import productservice from "../../../services/ProductService";


function Home() {

    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(8);
    useEffect(function () {
        (function () {
            productservice.getProductAll(limit, 1).then(function (result) {
                setProducts(result.data.products);
            });
        })();
    }, [limit])
    return (<section className="maincontent">
        <div className="container my-3">
            <div className="product-category">
                <h3 className="text-center text-danger">TẤT CẢ SẢN PHẨM </h3>
                <div className="row my-3">
                    {
                        products.map(function (product, index) {
                            return <ProductItem product={product} key={index} />;
                        })}

                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <button className="btn btn-success" onClick={() => setLimit(limit + 8)}>Xem thêm </button>
                </div>
            </div>
            
        </div>
    </section >
    )
};
export default Home;


