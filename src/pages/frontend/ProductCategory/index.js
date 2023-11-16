import { useParams } from "react-router-dom";
import ProductItem from "../../../components/frontend/productitem";
import categoryservice from "../../../services/CategoryService";
import productservice from "../../../services/ProductService";
import React, { useEffect, useState } from "react";
import ListCategory from "../../../layouts/LayoutSite/ListCategory";
import ListBrand from "../../../layouts/LayoutSite/ListBrand";

function ProductCategory() {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState([8]);
    const [title, setTitle] = useState();
    document.title=title;


    const { slug } = useParams();

    useEffect(function () {
        (async function () {
            try {
                const infocategory = await categoryservice.getBySlug(slug);
                setTitle(infocategory.data.category.name);
                const catid = infocategory.data.category.id;
                const infoproduct = await productservice.getProductCategoryId(limit, catid);
                setProducts(infoproduct.data.products);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [limit]);

    return (
    <section className="maincontent">
        <div className="container my-3">
            <div className="product-category">
                <div className="row">
                    <div className="col-md-3">
                        <ListCategory/>
                       <ListBrand/>
                    </div>
                    <div className="col-md-9">
                    <h3 className="text-center text-danger">
                    {
                        title
                    }
                </h3>
                <div className="row my-3">
                    {products.map(function (product, index) {
                        return <ProductItem product={product} key={index} />
                    })}
                </div>
                <div className="row">
                    <div className="coi-12 text-center my-4">
                        <button className="btn btn-success" onClick={() => setLimit(limit + 8)}>Xem them</button>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default ProductCategory;