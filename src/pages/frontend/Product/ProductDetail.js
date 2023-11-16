import React, { useEffect, useState } from "react";

import productservice from "../../../services/ProductService";
import { useParams } from "react-router-dom";
import { urlImage } from "../../../config";
import ProductItem from "../../../components/frontend/productitem";

import accounting from "accounting";


function ProductDetail() {
    const [product, setProduct] = useState([]);
    const [product_other, setProducOther] = useState([]);
    const { slug } = useParams();
    useEffect(function () {
        (function () {
            productservice.getProductBySlug(slug).then(function (result) {
                if (result.data.success === true) {
                    setProduct(result.data.product);
                    setProducOther(result.data.product_other);
                }

            });
        })()
    }, [slug])
    return (

        <section className="maincontent">
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-6">
                        <img src={urlImage + "product/" + product.image} alt="hinh" className="img-fluid w-100" />

                    </div>
                    <div className="  col-md-6"><h4>{product.name}</h4>
                        <h4 className="text-danger">Giá:{accounting.formatNumber(product.price, 0, ".", ",")}</h4>
                        <div className="col-md-12 text-dark"> {product.detail}</div>
                 <a href="/cart">  <button  className="  bg-danger text-white fs-5" style={{width:100,height:40}}> Mua </button></a> 
                        
                    </div>
                    
                </div>
                <div className="row">
                    
                    <hr/>
                 
                    <h3 className="text-danger py-3">Mèo Anh Cùng Loại</h3>
                </div>
                <div className="row">
                    {product_other.map(function (product, index) {
                        return <ProductItem key={index} product={product} />
                    })}

                </div>
            </div>
            
        </section>
    );
}

export default ProductDetail;