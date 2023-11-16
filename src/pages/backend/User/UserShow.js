import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate, useParams } from "react-router-dom";
import userservice from '../../../services/UserService';
import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';
function UserShow() {
    const { id } = useParams("id");
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(function () {
        (async function () {
            await userservice.getById(id).then(function (result) {
                setUser(result.data.users);
            });
        })();
    }, []);
    function userDelete(id) {
        userservice.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/user', { replace: true });
        });
    }
    return (
        <section className="card">
            <form onSubmit={UserShow} ></form>
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger  ">CHI TIẾT User</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/user" className="btn btn-sm btn-outline-success me-1">
                            Về Danh Sách
                        </Link>
                        <Link to={"/admin/user/update/" + user.id} className="btn btn-sm btn-outline-primary me-1 ">
                            <FaEdit /> Sửa
                        </Link>
                        <button onClick={() => userDelete(user.id)} className="btn btn-sm btn-outline-danger me-1">
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
                            <td>Id</td>
                            <td>{user.id}  </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{user.name}  </td>
                        </tr>
                        <tr>
                            <td>phone</td>
                            <td>{user.phone}  </td>
                        </tr>

                        <tr>
                            <td>email</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>Hình</td>
                            <td><img style={{ width: 200 }} className="img-fluid" src={urlImage + 'user/' + user.image} alt={user.name} /></td>
                        </tr>
                        <tr>
                            <td>username</td>
                            <td>{user.username}  </td>
                        </tr>
                        <tr>
                            <td>address</td>
                            <td>{user.address}  </td>
                        </tr>
                        <tr>
                            <td>status</td>
                            <td>{user.status}  </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </section>

    );
}
export default UserShow;