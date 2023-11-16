
import { useEffect, useState } from "react";
import userservice from "../../../services/UserService";
import { Link, useNavigate } from "react-router-dom";



function UserCreate() {
    const Navigate = useNavigate();
    const [users, setUser] = useState([]);
    useEffect(function () {
        (async function () {
            await userservice.getAll().then(function (result) {
                setUser(result.data.users)
            });
        })();
    }, [])

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPass] = useState('');
    const [address, setAddress] = useState('');
    const [roles, setRole] = useState('');
    const [status, setStatus] = useState('1');


    //const [status, setStatus] = useState('2');



    async function userStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        const user = new FormData();
        user.append("name", name);
        user.append("phone", phone);
        user.append("email", email);
        user.append("username", username);
        user.append("status", status);

        user.append("password", password);
        user.append("address", address);
        user.append("roles", roles);
       //user.append("status", status);

        if (image.files.length === 0) {
            alert("Hãy hập thông tin ảnh")

        } else {
            user.append("image", image.files[0]);
            await userservice.create(user).then(function (res) {
                alert(res.data.message)
                Navigate('../../admin/user', { replace: true })
            })
        }


    }
    return (
        <form onSubmit={userStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm User
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/user" className="btn btn-sm btn-info">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên danh mục</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="email">email</label>
                                <textarea onChange={(e) => setEmail(e.target.value)} name="email" value={email} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="username">username</label>
                                <textarea onChange={(e) => setUsername(e.target.value)} name="username" value={username} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="status">Status</label>
                                <textarea onChange={(e) => setStatus(e.target.value)} name="status" value={status} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="roles">roles</label>
                                <textarea onChange={(e) => setRole(e.target.value)} name="roles" value={roles} className="form-control"></textarea>
                            </div>


                            <div className="md-3">
                                <label htmlFor="phone">phone</label>
                                <textarea onChange={(e) => setPhone(e.target.value)} name="phone" value={phone} className="form-control"></textarea>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="md-3">
                                <div className="md-3">
                                    <label htmlFor="address">address</label>
                                    <textarea onChange={(e) => setAddress(e.target.value)} name="address" value={address} className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="md-3">
                                <div className="md-3">
                                    <label htmlFor="password">password</label>
                                    <textarea onChange={(e) => setPass(e.target.value)} name="password" value={password} className="form-control"></textarea>
                                </div>
                            </div>
                            <div className="md-3">
                                <label htmlFor="image">Hình đại diện</label>
                                <input type="file" id="image" className="form-control" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </form>
    );
}

export default UserCreate;