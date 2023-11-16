import { useEffect, useState } from "react";
import contactservice from "../../../services/ContactService";
import { Link, useNavigate } from "react-router-dom";


function ContactCreate() {
    const Navigate = new useNavigate();
    // const [contact, setContact] = useState([]);
    // useEffect(function () {
    //     (async function () {
    //         await contactservice.getAll().then(function (result) {
    //             setContact(result.data.contact)
    //         });
    //     })();
    // }, [])

    const [name, setName] = useState('');
    const [user_id, setUser_id] = useState(0);
    const [replay_id, setReplay_id] = useState(0);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [title, setTitle] = useState(0);
    const [content, setContent] = useState(0);
    const [status, setStatus] = useState(1);


    async function contactStore(event) {
        event.preventDefault();
        const contact = {
            name: name,
            email: email,
            phone: phone,
            title: title,
            content: content,
            status: status,
            replay_id: replay_id,
            user_id: user_id
        }

        await contactservice.create(contact).then(function (res) {
            alert(res.data.message)
            Navigate('/admin/contact', { replace: true })
        })
    }

    return (
        <form onSubmit={contactStore}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm Liên hệ
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/contact" className="btn btn-sm btn-info">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên liên hệ</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="email">Email</label>
                                <textarea onChange={(e) => setEmail(e.target.value)} name="email" value={email} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="email">Phone</label>
                                <textarea onChange={(e) => setPhone(e.target.value)} name="phone" value={phone} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="title">title</label>
                                <textarea onChange={(e) => setTitle(e.target.value)} name="title" value={title} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="content">Content</label>
                                <textarea onChange={(e) => setContent(e.target.value)} name="content" value={content} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="status">Status</label>
                                <textarea onChange={(e) => setStatus(e.target.value)} name="status" value={status} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="status">replay_id</label>
                                <textarea onChange={(e) => setReplay_id(e.target.value)} name="replay_id" value={replay_id} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="status">user_id</label>
                                <textarea onChange={(e) => setUser_id(e.target.value)} name="user_id" value={user_id} className="form-control"></textarea>
                            </div>




                        </div>

                    </div>
                </div>
            </div>

        </form>
    );
}

export default ContactCreate;
