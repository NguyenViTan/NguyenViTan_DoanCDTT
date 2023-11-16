import { FaPlus, FaRegEye, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import categoryservice from "../../../services/CategoryService"
import { urlImage } from '../../../config';

function CategoryList() {
    const [categorys, setCategorys] = useState([]);
    const [statusdel, setStatusDelete] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getAll()
                .then(function (result) {
                    setCategorys(result.data.categorys);
                }
                );
        })();
    }, [statusdel]);
    function categoryDelete(id) {
        categoryservice.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDelete(result.data.id);
        });

    }
    return (

        <section className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">DANH SÁCH CATEGORY</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/category/create" className="btn btn-sm btn-outline-success">
                            <FaPlus />Thêm
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ width: 50 }} className="text-center">#</th>
                            <th style={{ width: 200 }} className="text-center">Hình</th>
                            <th className="text-center">Tên Thương hiệu</th>
                            <th className="text-center">Slug</th>
                            <th style={{ width: 130 }} className="text-center">Ngày tạo</th>
                            <th style={{ width: 140 }} className="text-center">Chức năng</th>
                            <th style={{ width: 30 }} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categorys.map(function (category, index) {
                            return <tr key={index}>
                                <td className="text-center">
                                    <input type="checkbox" />
                                </td>
                                <td className="text-center">
                                    <img className="img-fluid" src={urlImage + 'category/' + category.image} alt="hinh" />
                                </td>
                                <td className="text-center">{category.name}</td>
                                <td className="text-center">{category.slug}</td>
                                <td className="text-center">{category.created_at}</td>
                                <td className="text-center">
                                    <Link to={"/admin/category/show/" + category.id} className="btn btn-sm btn-outline-success me-1">
                                        <FaRegEye />
                                    </Link>
                                    <Link to={"/admin/category/update/" + category.id} className="btn btn-sm btn-outline-primary me-1 ">
                                        <FaEdit />
                                    </Link>
                                    <button onClick={() => categoryDelete(category.id)} className="btn btn-sm btn-outline-danger me-1">
                                        <FaTrash />
                                    </button>
                                </td>
                                <td>1</td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </section>);
}
export default CategoryList;