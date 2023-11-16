
import { useEffect, useState } from "react";
import categoryservice from "../../../services/CategoryService";
import { Link, useNavigate } from "react-router-dom";
import { urlImage } from "../../../config";


function CategoryCreate() {
    const Navigate = useNavigate();
    const [categorys, setCategory] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getAll().then(function (result) {
                setCategory(result.data.categorys)
            });
        })();
    }, [])

    const [name, setName] = useState('');
    const [metadesc, setMetadesc] = useState('');
    const [metakey, setMetakey] = useState('');
    const [parent_id, setParentId] = useState(0);
    const [sort_order, setSortOrder] = useState(0);
    const [status, setStatus] = useState(1);
    const image = document.querySelector("#image");


    async function categoryStore(event) {
        event.preventDefault();
        const category = new FormData();
        category.append("name", name);
        category.append("metadesc", metadesc);
        category.append("metakey", metakey);
        category.append("parent_id", parent_id);
        category.append("sort_order", sort_order);
        category.append("status", status);

        if (image.files.length === 0) {
            alert("Hãy hập thông tin ảnh")

        } else {
            category.append("image", image.files[0]);
            await categoryservice.create(category).then(function (res) {
                alert(res.data.message)
                Navigate('../../admin/category', { replace: true })
            })
        }


    }

    return (
    
        <form onSubmit={categoryStore} method="post">
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">
                            THÊM DANH MỤC
                        </strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <button type="submit" className=" btn btn-sm btn-success me-2">
                            Lưu
                        </button>
                        <Link to="/admin/category" className="btn btn-sm btn-info">Về Danh Sách</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-9">
                        <div className="mb-3">
                            <label htmlFor="name">Tên Danh Mục</label>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name">Từ Khóa</label>
                            <textarea type="text" name="name" value={metakey} onChange={(e) => setMetakey(e.target.value)} className="form-control"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name">Mô Tả</label>
                            <textarea type="text" name="name" value={metadesc} onChange={(e) => setMetadesc(e.target.value)} className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="mb-3">
                            <label htmlFor="parent_id">Danh Mục Cha</label>
                           
                            <select onChange={(e) => setParentId(e.target.value)} value={parent_id} name="parent_id" className="form-control">
                                     <option value="0">Danh mục cha</option>
                                     {categorys.map(function (cat, index) {
                                         return (<option key={index} value={cat.id}>{cat.name}</option>
                                        );
                                    })}
                              </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="sort_order">Sắp Xếpl</label>
                            <select name="sort_order" value={sort_order} className="form-control" onChange={(e) => setSortOrder(e.target.value)}>
                                <option value="0">None</option>
                                {categorys.map(function (cat, index) {
                                    return (
                                        <option key={index} value={cat.sort_order + 1}>{cat.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image">Hình Đại Diện</label>
                            <input type="file" id="image" className="form-control" />
                         

                        </div>
                        <div className="mb-3">
                            <label htmlFor="sort">Trạng Thái</label>
                            <select name="sort" value={status} className="form-control" onChange={(e) => setStatus(e.target.value)}>
                                <option value="1">Xuất Bản</option>
                                <option value="2">Chưa Xuất Bản</option>

                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
        
    );
}

export default CategoryCreate;