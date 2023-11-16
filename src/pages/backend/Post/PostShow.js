import { Link, useNavigate, useParams } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaRegTrashAlt } from "react-icons/fa";
import postservice from "../../../services/PostService";
import { useEffect, useState } from "react";


function PostShow() {
    const { id } = useParams("id");
    const [post, setPost] = useState([]);
    const navigate = useNavigate();

    useEffect(function () {
        (async function () {
            await postservice.getById(id)
                .then(function (result) {
                    setPost(result.data.posts);
                });
        })();
    }, []);
    function postDelete(id) {
        postservice.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/post', { replace: true });
        });
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger">CHI TIẾT Bài Đăng</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/post"
                            className="btn btn-sm btn-success me-1"
                        >
                            Về danh sách
                        </Link>
                        <Link
                            to={"/admin/post/update/" + post.id}
                            className="btn btn-sm btn-primary me-1"
                        >
                            <FaEdit />Sửa
                        </Link>
                        <button onClick={() => postDelete(post.id)} className="btn btn-sm btn-danger">
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
                            <td>{post.topic_id}</td>
                        </tr>
                        <tr>
                            <th>Hình</th>
                            <td>{post.image}</td>
                        </tr>
                        <tr>
                            <th>Title</th>
                            <td>{post.title}</td>
                        </tr>
                        <tr>
                            <th>slug</th>
                            <td>{post.slug}</td>
                        </tr>
                        <tr>
                            <th>Detail</th>
                            <td>{post.detail}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PostShow;
