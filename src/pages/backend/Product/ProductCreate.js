//import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import productservice from "../../../services/ProductService";
import brandservice from "../../../services/BrandService";
import categoryservice from "../../../services/CategoryService";

function ProductCreate() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(function () {
        (async function () {
            await productservice.getAll().then(function (result) {
                setProducts(result.data.products);
            });
        })();
    }, []);
    //lấy dữ liệu danh mục
    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getAll().then(function (result) {
                setCategorys(result.data.categorys);
            });
        })();
    }, []);
    //lấy dữ liệu thương hiệu
    const [brands, setBrands] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservice.getAll().then(function (result) {
                setBrands(result.data.brands);
            });
        })();
    }, []);
    const [category_id, setCategoryId] = useState(0);
    const [brand_id, setBrandId] = useState(0);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);
    const [detail, setDetail] = useState("");
    const [price_sale, setPriceSale] = useState(0);
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [status, setStatus] = useState(1);

    async function productStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var product = new FormData();
        product.append("category_id", category_id);
        product.append("brand_id", brand_id);
        product.append("name", name);
        product.append("price", price);
        product.append("price_sale", price_sale);
        product.append("qty", qty);
        product.append("detail", detail);
        product.append("metakey", metakey);
        product.append("metadesc", metadesc);
        product.append("status", status);
        //xử lý ảnh
        if (image.files.length === 0) {
            product.append("image", "");
        } else {
            product.append("image", image.files[0]);
        }

        await productservice.create(product).then(function (res) {
            alert(res.data.message);
            navigate("/admin/product", { replace: true });
        });
    }
    return (
        <form onSubmit={productStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">Thêm sản phẩm</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/product" className="btn btn-sm btn-info">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="name">Tên sản phẩm</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="brand_id">Mã thương hiệu</label>
                                <select
                                    name="brand_id"
                                    className="form-control"
                                    value={brand_id}
                                    onChange={(e) => setBrandId(e.target.value)}
                                >
                                    <option value="0">None</option>
                                    {brands.map(function (bra, index) {
                                        return (
                                            <option key={index} value={bra.id}>
                                                {bra.id}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="sort_order">Mã danh mục</label>
                                <select
                                    name="category_id"
                                    className="form-control"
                                    value={category_id}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                >
                                    <option value="0">None</option>
                                    {categorys.map(function (cat, index) {
                                        return (
                                            <option key={index} value={cat.id}>
                                                {cat.id}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="metakey">Từ khóa</label>
                                <textarea
                                    name="metakey"
                                    value={metakey}
                                    onChange={(e) => setMetakey(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="metadesc">Mô tả</label>
                                <textarea
                                    name="metadesc"
                                    value={metadesc}
                                    onChange={(e) => setMetadesc(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="price">Gía</label>
                                <input
                                    name="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price_sale">Gía giảm</label>
                                <input
                                    name="price_sale"
                                    value={price_sale}
                                    onChange={(e) => setPriceSale(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="qty">Số lượng</label>
                                <input
                                    name="qty"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="detail">Chi tiết</label>
                                <textarea
                                    name="detail"
                                    value={detail}
                                    onChange={(e) => setDetail(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image">Hình ảnh</label>
                                <input type="file" id="image" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select
                                    name="status"
                                    className="form-control"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default ProductCreate;
