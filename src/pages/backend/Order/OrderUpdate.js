import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import orderservice from "../../../services/OrderService";
import userservice from "../../../services/UserService";

function OrderUpdate() {
    const navigate = useNavigate();

    //khai báo state
    const [user_id, setUserId] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [note, setNote] = useState("");
    const [status, setStatus] = useState(1);
    //chi tiết mẫu tin có id
    const { id } = useParams("id");

    useEffect(function () {
        (async function () {
            await orderservice.getById(id).then(function (result) {
                const tmp = result.data.orders;
                setName(tmp.name);
                setUserId(tmp.user_id);
                setPhone(tmp.phone);
                setEmail(tmp.email);
                setAddress(tmp.address);
                setNote(tmp.note);
                setStatus(tmp.status);
            });
        })();
    }, []);

    //lấy dữ liệu user
    const [users, setUsers] = useState([]);
    useEffect(function () {
        (async function () {
            await userservice.getAll().then(function (result) {
                setUsers(result.data.users);
            });
        })();
    }, []);

    async function orderEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var order = new FormData();
        order.append("user_id", user_id);
        order.append("name", name);
        order.append("phone", phone);
        order.append("email", email);
        order.append("address", address);
        order.append("note", note);
        order.append("status", status);

        //update
        await orderservice.update(order, id).then(function (res) {
            alert(res.data.message);
            navigate("/admin/order", { replace: true });
        });
    }
    return (
        <form onSubmit={orderEdit} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">Thêm đơn hàng</strong>
                        </div>
                        <div className="col-md-6 text-end" >
                            <button className="btn btn-sm btn-success me-3" type="submit">Lưu</button>
                            <Link to="/admin/contact" className="btn btn-sm btn-info ">
                                Quay lại
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label htmlFor="user_id">Mã user</label>
                                <select
                                    name="user_id"
                                    className="form-control"
                                    value={user_id}
                                    onChange={(e) => setUserId(e.target.value)}
                                >
                                    <option value="0">0</option>
                                    {users.map(function (user, index) {
                                        return (
                                            <option key={index} value={user.id}>
                                                {user.id}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Tên khách hàng</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />

                                <div className="mb-3">
                                    <label htmlFor="phone">Điện thoại</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="address">Địa chỉ</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="note">Ghi chú</label>
                                <textarea
                                    name="note"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    className="form-control"
                                />
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

export default OrderUpdate;
