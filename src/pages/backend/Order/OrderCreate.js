
import { useEffect, useState } from "react";
import orderservice from "../../../services/OrderService";
import { Link, useNavigate } from "react-router-dom";



function OrderCreate() {
    const Navigate = useNavigate();
    const [orders, setOrder] = useState([]);
    useEffect(function () {
        (async function () {
            await orderservice.getAll().then(function (result) {
                setOrder(result.data.orders)
            });
        })();
    }, [])

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [status, setStatus] = useState(2);
    const [user_id, setUser_id] = useState(1);




    async function orderStore(event) {
        event.preventDefault();
        const order = new FormData();
        order.append("name", name);
        order.append("phone", phone);
        order.append("email", email);
        order.append("address", address);
        order.append("note", note);
        order.append("status", status);
        order.append("user_id", user_id);




        await orderservice.create(order).then(function (res) {
            alert(res.data.message)
            Navigate('../../admin/order', { replace: true })
        })
    }



    return (
        <form onSubmit={orderStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm Order
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/order" className="btn btn-sm btn-info">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên danh order</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="phone">Phone</label>
                                <textarea onChange={(e) => setPhone(e.target.value)} name="phone" value={phone} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="email">Email</label>
                                <textarea onChange={(e) => setEmail(e.target.value)} name="email" value={email} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="address">Adress</label>
                                <textarea onChange={(e) => setAddress(e.target.value)} name="address" value={address} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="note">Note</label>
                                <textarea onChange={(e) => setNote(e.target.value)} name="note" value={note} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="user_id">user_id</label>
                                <textarea onChange={(e) => setUser_id(e.target.value)} name="user_id" value={user_id} className="form-control"></textarea>
                            </div>



                        </div> <div className="md-3">
                            <label htmlFor="status">status</label>
                            <textarea onChange={(e) => setStatus(e.target.value)} name="status" value={status} className="form-control"></textarea>
                        </div>

                    </div>

                </div>
            </div>


        </form>
    );
}

export default OrderCreate;