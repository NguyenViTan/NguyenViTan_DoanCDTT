import { Link, useNavigate, useParams } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import orderservice from "../../../services/OrderService";
import { useEffect, useState } from "react";


function OrderShow() {
    const { id } = useParams("id");
    const [order, setOrder] = useState([]);
    const navigate = useNavigate();

    useEffect(function () {
        (async function () {
            await orderservice.getById(id)
                .then(function (result) {
                    setOrder(result.data.orders);
                });
        })();
    }, []);
    function orderDelete(id) {
        orderservice.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/order', { replace: true });
        });
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">CHI TIẾT HÓA ĐƠN</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/order"
                            className="btn btn-sm btn-success me-1"
                        >
                            Về danh sách
                        </Link>
                        <Link
                            to={"/admin/order/update/" + order.id}
                            className="btn btn-sm btn-primary me-1"
                        >
                            <FaEdit />Sửa
                        </Link>
                        <button onClick={() => orderDelete(order.id)} className="btn btn-sm btn-danger">
                            <FaRegTrashAlt />Xóa
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className=" table table-bordered">
                    <thead>
                        <tr>
                            <th style={{ width: 300 }}>Tên trường</th>
                            <th>Gía trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <td>{order.id}</td>
                        </tr>
                        <tr>
                            <th>Mã khách hàng</th>
                            <td>{order.user_id}</td>
                        </tr>
                        <tr>
                            <th>Tên khách hàng</th>
                            <td>{order.name}</td>
                        </tr>
                        <tr>
                            <th>email</th>
                            <td>{order.email}</td>
                        </tr>
                        <tr>
                            <th>Điện thoại</th>
                            <td>{order.phone}</td>
                        </tr>
                        <tr>
                            <th>Địa chỉ</th>
                            <td>{order.address}</td>
                        </tr>
                        <tr>
                            <th>Ghi chú</th>
                            <td>{order.note}</td>
                        </tr>
                        <tr>
                            <th>Ngày tạo</th>
                            <td>{order.created_at}</td>
                        </tr>
                        <tr>
                            <th>Trạng thái</th>
                            <td>{order.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrderShow;
