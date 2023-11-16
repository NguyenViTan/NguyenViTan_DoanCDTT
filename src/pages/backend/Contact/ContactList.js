import { FaPlus, FaRegEye, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import contactservice from "../../../services/ContactService"
function ContactList() {
    const [contacts, setContacts] = useState([]);
    const [statusdel, setStatusDelete] = useState([]);
    useEffect(function () {
        (async function () {
            await contactservice.getAll()
                .then(function (result) {
                    setContacts(result.data.contacts);
                }
                );
        })();
    }, [statusdel]);
    function contactDelete(id) {
        contactservice.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDelete(result.data.id);
        });
    }
    return (

        <section className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">Liên hệ</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/contact/create" className="btn btn-sm btn-outline-success">
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
                            <th className="text-center">Id</th>
                            <th className="text-center">Tên Người dùng</th>
                            <th className="text-center">Email</th>
                            <th style={{ width: 140 }} className="text-center">Phone</th>
                            <th style={{ width: 140 }} className="text-center">Content</th>
                            <th style={{ width: 140 }} className="text-center">Chức năng</th>


                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(function (contact, index) {
                            return <tr key={index}>
                                <td className="text-center">
                                    <input type="checkbox" />
                                </td>
                                <td className="text-center">{contact.id}</td>

                                <td className="text-center">{contact.name}</td>
                                <td className="text-center">{contact.email}</td>
                                <td className="text-center">{contact.phone}</td>
                                <td className="text-center">{contact.content}</td>



                                <td className="text-center">
                                    <Link to={"/admin/contact/show/" + contact.id} className="btn btn-sm btn-outline-success me-1">
                                        <FaRegEye />
                                    </Link>
                                    <Link to={"/admin/contact/update/" + contact.id} className="btn btn-sm btn-outline-primary me-1 ">
                                        <FaEdit />
                                    </Link>
                                    <button onClick={() => contactDelete(contact.id)} className="btn btn-sm btn-outline-danger me-1">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </section>);
}
export default ContactList;