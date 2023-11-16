import { Link } from "react-router-dom";
import { FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import postservice from "../../../services/PostService";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
function PostList() {
    const [posts, setPost] = useState([]);
    const [statusdel, setStatusDelete] = useState([]);

    useEffect(function () {
        (async function () {
            await postservice.getAll().then(function (result) {
                setPost(result.data.posts)
            });
        })();
    }, [statusdel])
    function postDelete(id) {
        postservice.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDelete(result.data.id);
        });
    }
    return (
        <div className="Card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">POST</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/post/create">
                            <FaPlus />Thêm
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-striped table-bPosted table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: 50 }} className="text-center">#</th>
                                <th style={{ width: 130 }} className="text-center">Topic_id</th>
                                <th style={{ width: 80 }} className="text-center">Hình</th>
                                <th style={{ width: 130 }} className="text-center">Title</th>
                                <th style={{ width: 130 }} className="text-center">Slug</th>
                                <th style={{ width: 130 }} className="text-center">Detail</th>
                                <th style={{ width: 130 }} className="text-center">Ngày tạo</th>
                                <th style={{ width: 130 }} className="text-center">Chức năng</th>
                                <th style={{ width: 50 }} className="text-center">Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(function (post, index) {
                                return (
                                    <tr key={index}>
                                        <td className="text-center">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="text-center">{post.topic_id}</td>
                                        <td className="text-center">
                                            <img className="img-fluid" style={{ width: 65, height: 75 }} src={urlImage + "post/" + post.image} alt="hinh" />
                                        </td>
                                        <td className="text-center">{post.title}</td>
                                        <td className="text-center">{post.slug}</td>
                                        <td className="text-center">{post.detail}</td>

                                        <td className="text-center">{post.created_at}</td>
                                        <td className="text-center">
                                            <Link className="btn btn-sm btn-success me-1" to={"/admin/post/show/" + post.id}>
                                                <FaEye />
                                            </Link>
                                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/post/update/" + post.id}>
                                                <FaEdit />
                                            </Link>
                                            <button onClick={() => postDelete(post.id)} className="btn btn-sm btn-danger ">
                                                <FaTrash />
                                            </button>
                                        </td>
                                        <td className="text-center">{post.id}</td>
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

export default PostList; 