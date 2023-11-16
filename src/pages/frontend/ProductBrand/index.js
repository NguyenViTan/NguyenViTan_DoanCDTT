import { useParams } from "react-router-dom";
import ListBrand from "../../../layouts/LayoutSite/ListBrand";
import ListCategory from "../../../layouts/LayoutSite/ListCategory";
import { useState } from "react";
import { useEffect } from "react";
import brandservice from "../../../services/BrandService";
import productservice from "../../../services/ProductService";
import ProductItem from "../../../components/frontend/productitem";
function ProductBrand() {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(8);
    const [title, setTitle] = useState();
    document.title = title;

    useEffect(function () {
        (async function () {
            try {
                const result_brand = await brandservice.getById(slug);
                const brandid = result_brand.data.brand.id;
                setTitle(result_brand.data.brand.name);
                const result = await productservice.getProductBrandId(limit, brandid);
                setProducts(result.data.products);

            } catch (error) {
                console.error(error);
            }
        })();
    }, [limit, slug])
    return (
        <section className="maincontent">
            <div className="container my-3">
                <div className="product-category">
                    <div className="row">

                        <div className="col-md-3">
                            <ListCategory />
                            <ListBrand />
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
    // );
}

export default ProductBrand;