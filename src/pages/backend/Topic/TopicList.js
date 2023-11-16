import { Link } from "react-router-dom";
import { FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import topicservice from "../../../services/TopicService";
import { useEffect, useState } from "react";
function TopicList() {
    const [topics, setTopic] = useState([]);
    const [statusdel, setStatusDelete] = useState([]);

    useEffect(function () {
        (async function () {
            await topicservice.getAll().then(function (result) {
                setTopic(result.data.topics)
            });
        })();
    }, [statusdel])
    function topicDelete(id) {
        topicservice.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDelete(result.data.id);
        });
    }
    return (
        <div className="Card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">TOPIC</strong>
                    </div>
                    <div className="col-md-6 text-end md-3">
                        <Link to="/admin/topic/create" className="btn btn-sm btn-outline-success">
                            <FaPlus />Thêm
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-striped table-bPosted table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: 50 }} className="text-center">#</th>
                                <th>Name</th>
                                <th>Slug</th>
                                <th style={{ width: 130 }} className="text-center">Parent_id</th>
                                <th style={{ width: 130 }} className="text-center">Ngày tạo</th>
                                <th style={{ width: 130 }} className="text-center">Chức năng</th>
                                <th style={{ width: 50 }} className="text-center">Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topics.map(function (topic, index) {
                                return (
                                    <tr key={index}>
                                        <td className="text-center">
                                            <input type="checkbox" />
                                        </td>
                                        <td>{topic.name}</td>
                                        <td>{topic.slug}</td>
                                        <td className="text-center">{topic.parent_id}</td>
                                        <td className="text-center">{topic.created_at}</td>
                                        <td className="text-center">
                                            <Link className="btn btn-sm btn-success me-1" to={"/admin/topic/show/" + topic.id}>
                                                <FaEye />
                                            </Link>
                                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/topic/update/" + topic.id}>
                                                <FaEdit />
                                            </Link>
                                            <button onClick={() => topicDelete(topic.id)} className="btn btn-sm btn-danger ">
                                                <FaTrash />
                                            </button>
                                        </td>
                                        <td className="text-center">{topic.id}</td>
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

export default TopicList; 