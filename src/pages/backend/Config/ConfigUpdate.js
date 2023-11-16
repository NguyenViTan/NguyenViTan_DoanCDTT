
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import brandservice from "../../../services/BrandService";

function BrandUpdate() {

    const Navigate = useNavigate();
    const [name, setName] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [sort_order, setSort_Order] = useState(0);
    const [parent_id, setParent_Id] = useState(0);

    const [status, setStatus] = useState(1);
    const { id } = useParams("id")
    useEffect(function () {
        (async function () {
            await brandservice.getById(id)
                .then(function (result) {
                    const tmp = result.data.brand;
                    setName(tmp.name);
                    setMetakey(tmp.metakey);
                    setMetadesc(tmp.metadesc);
                    setSort_Order(tmp.sort_order);
                    setStatus(tmp.status);
                    setParent_Id(tmp.parent_id);
                }
                );
        })();
    }, [])
    const [brands, setBrands] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservice.getAll()
                .then(function (result) {
                    setBrands(result.data.brands);
                }
                );
        })();
    }, []);

    async function brandEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var brand = new FormData();
        brand.append("name", name);
        brand.append("sort_order", sort_order);
        brand.append("parent_id", parent_id);
        brand.append("metakey", metakey);
        brand.append("metadesc", metadesc);
        brand.append("status", status);
        brand.append("image", image.files[0]);
        if (image.files.length === 0) {
            brand.append("image", "");
        }
        else {
            brand.append("image", image.files[0]);
        }

        await brandservice.update( brand,id).then(function (res) {
            alert(res.data.message)
            Navigate('/admin/brand', { replace: true });
        });

    }

    return (
        <form onSubmit={brandEdit} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">CẬP NHẬT Brand</strong>

                        </div>
                        <div className="col-md-6 text-end" >
                            <Link to="/admin/brand" className="btn btn-sm btn-info me-3">
                                Quay lại
                            </Link>
                            <button className="btn btn-sm btn-success " type="submit">Lưu</button>

                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="name">Tên thương hiệu</label>
                                <input name="name" value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="metakey">Từ khóa</label>
                                <textarea name="metakey" value={metakey}
                                    onChange={(e) => setMetakey(e.target.value)}
                                    className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="metadesc">mô tả</label>
                                <textarea name="metadesc" value={metadesc}
                                    onChange={(e) => setMetadesc(e.target.value)} className="form-control"></textarea>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="parent_id">Parent</label>
                                <select name="parent_id" className="form-control"
                                    value={parent_id}
                                    onChange={(e) => setParent_Id(e.target.value)} >
                                    <option value="0">Danh muc cha</option>
                                    {brands.map(function (cat, index) {
                                        return (
                                            <option key={index} value={cat.id}>{cat.name}
                                            </option>
                                        );
                                    })}
                                </select>

                            </div>


                            <div className="mb-3">
                                <label htmlFor="sort_order">Sort Order</label>
                                <select name="sort_order" className="form-control"
                                    value={sort_order}
                                    onChange={(e) => setSort_Order(e.target.value)} >
                                    <option value="0">None</option>
                                    {brands.map(function (bra, index) {
                                        return (
                                            <option key={index} value={bra.sort_order + 1}
                                            > Sau: {bra.name}</option>
                                        );
                                    })}
                                </select>

                            </div>
                            <div className="md-3">
                                <label htmlFor="image" >Logo</label>
                                <input type="file" id="image" className="form-control">
                                </input>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="status">Status</label>
                                <select className="form-control" value={status}
                                    onChange={(e) => setStatus(e.target.value)} >
                                    <option value="1">Xuất bản</option>


                                    <option value="2"> chưa xuất bản </option>
                                </select>

                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </form>
    );
}

export default BrandUpdate; 
