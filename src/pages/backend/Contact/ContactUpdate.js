import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import contactservice from "../../../services/ContactService";

function ContactUpdate() {
    const navigate = useNavigate();

    //khai báo state
    const [replay_id, setReplayId] = useState(0);
    const [user_id, setUserId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState(1);
    //chi tiết mẫu tin có id
    const { id } = useParams("id");
    useEffect(function () {
        (async function () {
            await contactservice.getById(id)
                .then(function (result) {
                    const tmp = result.data.contacts;
                    setName(tmp.name);
                    setReplayId(tmp.replay_id);
                    setUserId(tmp.user_id);
                    setEmail(tmp.email);
                    setPhone(tmp.phone);
                    setStatus(tmp.status);
                    setTitle(tmp.title);
                    setContent(tmp.content);
                });
        })();
    }, []);
    //Lấy danh sách
    const [contacts, setContacts] = useState([]);
    useEffect(function () {
        (async function () {
            await contactservice.getAll()
                .then(function (result) {
                    setContacts(result.data.contacts);
                });
        })();
    }, []);

    async function contactEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var contact = new FormData();
        contact.append("replay_id", replay_id);
        contact.append("user_id", user_id);
        contact.append("name", name);
        contact.append("email", email);
        contact.append("phone", phone);
        contact.append("title", title);
        contact.append("content", content);
        contact.append("status", status);

        //update
        await contactservice.update(contact, id)
            .then(function (res) {
                alert(res.data.message)
                navigate('/admin/contact', { replace: true });
            });
    }
    return (
        <form onSubmit={contactEdit} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">Thêm liên hệ</strong>
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
                                <label htmlFor="name">Tên khách hàng</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                                <div className="mb-3">
                                    <label htmlFor="replay_id">Mã replay</label>
                                    <input
                                        type="text"
                                        name="replay_id"
                                        value={replay_id}
                                        onChange={(e) => setReplayId(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="user_id">Mã user</label>
                                    <input
                                        type="text"
                                        name="user_id"
                                        value={user_id}
                                        onChange={(e) => setUserId(e.target.value)}
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
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="title">Tiêu đề</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="content">Nội dung</label>
                                <textarea
                                    name="content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
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

export default ContactUpdate;
