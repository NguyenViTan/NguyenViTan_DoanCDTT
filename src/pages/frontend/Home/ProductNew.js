import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productservice from "../../../services/ProductService";
import Product_Item from "../../../components/frontend/ProductNewItem";
import { urlImage } from "../../../config";

function New_Products({ productItems, addToCart }) {  
    
    const [ProductNew, setProductNew] = useState([]);
    useEffect(function(){
        (async function(){
            await productservice.getProductNew(0,4).then(function(result){
                setProductNew(result.data.products);
            })
        })();
    },[]);
        return (

 
    <div className="container my-3">
    <div className="product-category">
       
        <h3 className="text-center text-danger">MÈO MỚI NHẬP VỀ HOT </h3>

        <div className="row my-3">
            {
                ProductNew.map(function (pro, index) {
                    return <Product_Item product={pro} key={index} />;
                })}
        </div>
        <div className="text-center my-3">
            <Link  className="btn btn-success">Xem thêm</Link>
        </div>
    </div>
</div>);
}

export default New_Products;