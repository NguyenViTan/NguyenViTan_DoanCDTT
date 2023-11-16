import { FaPlus, FaRegEye, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import productservice from "../../../services/ProductService"
import { urlImage } from '../../../config';
function ProductList() {
    const [products, setProducts] = useState([]);
    const [statusdel, setStatusDelete] = useState([]);
    useEffect(function () {
        (async function () {
            await productservice.getAll()
                .then(function (result) {
                    setProducts(result.data.products);
                }
                );
        })();
    }, [statusdel]);
    function productDelete(id) {
        productservice.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDelete(result.data.id);
        });
    }
    return (

        <section className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">Sản phẩm</strong>
                    </div>
                    <div className="col-md-6 text-end md-3">
                        <Link to="/admin/product/create" className="btn btn-sm btn-outline-success">
                            <FaPlus />Thêm
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ width: 30 }} className="text-center">#</th>
                            <th style={{ width: 200 }} className="text-center">Hình</th>
                            <th>Tên sản phẩm</th>
                            <th style={{ width: 100 }}>Slug</th>
                            <th style={{ width: 100 }} className="text-center">Category_id</th>
                            <th style={{ width: 100 }} className="text-center">Brand_id</th>
                            <th style={{ width: 100 }} className="text-center">Price</th>
                            <th style={{ width: 100 }} className="text-center">Price_sale</th>
                            <th style={{ width: 50 }} className="text-center">Qty</th>
                            {/* <th style={{ width: 100 }} className="text-center">Ngày tạo</th> */}
                            <th style={{ width: 150 }} className="text-center">Chức năng</th>
                            <th style={{ width: 30 }} className="text-center">Id</th>



                        </tr>
                    </thead>
                    <tbody>
                        {products.map(function (product, index) {
                            return <tr key={index}>
                                <td className="text-center">
                                    <input type="checkbox" />
                                </td>
                                <td className="text-center">
                                    <img className="img-fluid" src={urlImage + 'product/' + product.image} alt="hinh1" />
                                </td>
                                <td>{product.name}</td>
                                <td>{product.slug}</td>
                                <td>{product.category_id}</td>
                                <td>{product.brand_id}</td>
                                <td>{product.price}</td>
                                <td>{product.price_sale}</td>
                                <td>{product.qty}</td>



                                <td className="text-center ">
                                    <Link to={"/admin/product/show/" + product.id} className="btn btn-sm btn-outline-success me-1 ">
                                        <FaRegEye />
                                    </Link>
                                    <Link to={"/admin/product/update/" + product.id} className="btn btn-sm btn-outline-primary me-1 ">
                                        <FaEdit />
                                    </Link>
                                    <button onClick={() => productDelete(product.id)} className="btn btn-sm btn-outline-danger me-1">
                                        <FaTrash />
                                    </button>
                                </td>
                                <td>{product.id}</td>
                            </tr>
                        })}



                    </tbody>
                </table>
            </div>
        </section>);
}
export default ProductList;