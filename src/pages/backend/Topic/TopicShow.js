import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import topicservices from "../../../services/TopicService";
import { FiRotateCcw, FiEdit, FiTrash2 } from "react-icons/fi";

function TopicShow() {
    const { id } = useParams("id");
    const [topic, setTopic] = useState([]);
    const navigate = useNavigate();

    useEffect(function () {
        (async function () {
            await topicservices.getById(id).then(function (result) {
                setTopic(result.data.topic);
            })

        })();

    }, []);
    function topicDelete(id) {
        topicservices.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/topic', { replace: true });
        });
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT TOPIC</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/topic/update/" + topic.id}><FiEdit />Sửa</Link>
                        <button onClick={() => topicDelete(topic.id)} className="btn btn-sm btn-danger me-1"><FiTrash2 />Xóa</button>
                        <Link to="/admin/topic" className="btn btn-sm btn-info"><FiRotateCcw />Quay lại</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-border ">
                    <thead>
                        <tr>
                            <th style={{ width: 200 }}>Tên trường</th>
                            <th>Giá trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{topic.id}</td>
                        </tr>
                        <tr>
                            <th>Tên topic</th>
                            <td>{topic.name}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{topic.slug}</td>
                        </tr>
                        <tr>
                            <th>Từ khóa</th>
                            <td>{topic.metakey}</td>
                        </tr>
                        <tr>
                            <th>Mô tả</th>
                            <td>{topic.metadesc}</td>
                        </tr>
                        <tr>
                            <th>Parent Id</th>
                            <td>{topic.parent_id}</td>
                        </tr>


                        <tr>
                            <th>Status</th>
                            <td>{topic.status}</td>
                        </tr>
                        <tr>
                            <th>Ngày thêm</th>
                            <td>{topic.created_at}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default TopicShow;