import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate, useParams } from "react-router-dom";
import categoryservice from '../../../services/CategoryService';
import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';
function CategoryShow() {
    const navigate = useNavigate();
    const { id } = useParams("id");
    const [category, setCategory] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getById(id).then(function (result) {
                setCategory(result.data.category);
            });
        })();
    }, []);
    function categoryDelete(id) {
        categoryservice.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/category', { replace: true });
        });
    }

    return (
        <section className="card">
            <form onSubmit={CategoryShow} method="post"></form>
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger  ">CHI TIẾT THƯƠNG HIỆU</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/category" className="btn btn-sm btn-outline-success me-1">
                            Về Danh Sách
                        </Link>
                        <Link to={"/admin/category/update/" + category.id} className="btn btn-sm btn-outline-primary me-1 ">
                            <FaEdit /> Sửa
                        </Link>
                        <button onClick={() => categoryDelete(category.id)} className="btn btn-sm btn-outline-danger me-1">
                            <FaTrash /> Xóa
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <td className="text-danger" style={{ width: 300 }}><strong>Tên Trường</strong></td>
                            <td className="text-danger"><strong>Giá Trị</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ID</td>
                            <td>{category.id}  </td>
                        </tr>
                        <tr>
                            <td>Tên Thương Hiệu</td>
                            <td>{category.name}  </td>
                        </tr>
                        <tr>
                            <td>Slug</td>
                            <td>{category.slug}  </td>
                        </tr>
                        <tr>
                            <td>Hình</td>
                            <td><img style={{ width: 200 }} className="img-fluid" src={urlImage + 'category/' + category.image} alt={category.name} /></td>
                        </tr>
                        <tr>
                            <td>Sắp Xếp</td>
                            <td>{category.sort_order}  </td>
                        </tr>
                        <tr>
                            <td>Metakey</td>
                            <td>{category.metakey}  </td>
                        </tr>
                        <tr>
                            <td>Metadesc</td>
                            <td>{category.metadesc}  </td>
                        </tr>
                        <tr>
                            <td>Trạng Thái</td>
                            <td>{category.status}  </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </section>

    );
}
export default CategoryShow;