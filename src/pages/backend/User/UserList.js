import { Link } from "react-router-dom";
import { FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import userservice from "../../../services/UserService";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
function UserList() {
    const [users, setUser] = useState([]);
    const [statusdel, setStatusDelete] = useState([]);

    useEffect(function () {
        (async function () {
            await userservice.getAll().then(function (result) {
                setUser(result.data.users)
            });
        })();
    }, [statusdel])
    function userDelete(id) {
        userservice.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDelete(result.data.id);
        });
    }
    return (
        <div className="Card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6 my-3">
                        <strong className="text-primary ">QUẢN LÝ NGƯỜI DÙNG</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success my-3" to="/admin/user/create">
                            <FaPlus />Thêm
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-striped table-bPosted table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: 50 }} className="text-center">#</th>
                                <th style={{ width: 130 }} className="text-center">Image</th>
                                <th>Name</th>
                                <th style={{ width: 100 }} className="text-center">Phone</th>
                                <th style={{ width: 100 }} className="text-center">Email</th>
                                <th style={{ width: 100 }} className="text-center">Username</th>
                                <th style={{ width: 100 }} className="text-center">Password</th>
                                <th style={{ width: 130 }} className="text-center">Address</th>
                                <th style={{ width: 70 }} className="text-center">Roles</th>
                                <th style={{ width: 70 }} className="text-center">Status</th>

                                <th style={{ width: 130 }} className="text-center">Chức năng</th>
                                <th style={{ width: 50 }} className="text-center">Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(function (user, index) {
                                return (
                                    <tr key={index}>
                                        <td className="text-center">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="text-center">
                                            <img className="img-fluid" style={{ width: 65, height: 75 }} src={urlImage + 'user/' + user.image} alt="hinh" />
                                        </td>
                                        <td>{user.name}</td>
                                        <td className="text-center">{user.phone}</td>
                                        <td className="text-center">{user.email}</td>
                                        <td className="text-center">{user.username}</td>
                                        <td className="text-center">{user.password}</td>
                                        <td className="text-center">{user.address}</td>
                                        <td className="text-center">{user.roles}</td>
                                        <td className="text-center">{user.status}</td>

                                        <td className="text-center">
                                            <Link className="btn btn-sm btn-success me-1" to={"/admin/user/show/" + user.id}>
                                                <FaEye />
                                            </Link>
                                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/user/update/" + user.id}>
                                                <FaEdit />
                                            </Link>
                                            <button onClick={() => userDelete(user.id)}  className="btn btn-sm btn-danger ">
                                                <FaTrash />
                                            </button>
                                        </td>
                                        <td className="text-center">{user.id}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserList; 