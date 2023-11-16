import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import postservice from "../../../services/PostService";
import { urlImage } from "../../../config";

function News() {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(6);
    useEffect(function () {
        (async function () {
            await postservice.getPost_All().then(function (result) {
                setPosts(result.data.posts)
            })
        })();
    }, []);
    return (
        <section>
            <div className="container mb-3">
                <div className="title mt-4 mb-4 text-center">
                    <h3 id="h3-pro" className="text-center">Tất cả bài viết</h3>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="row">
                            {posts.map(function (post, index) {
                                return (
                                    <div className="col-md-4 mb-3" key={index}>
                                        <div className="post-item border">
                                            <div className="post-image">
                                                <Link to={`/pages/tin-tuc/chi-tiet-bai-viet/${post.id}`} className="link-chi-tiet"><img style={{ height: "300px", width: "100%" }} src={urlImage + 'Post/' + post.image} className="img-fluid" alt="tin tuc" /></Link>
                                            </div>
                                            <div className="post-name p-2">
                                                <Link style={{ textDecoration: 'none' }} to={`/pages/tin-tuc/chi-tiet-bai-viet/${post.id}`}><h2 className="text-center fs-5 text-danger">{post.title}</h2></Link>
                                            </div>
                                            <div className="PostDetail">
                                                <div className="row ps-2 fs-6">
                                                    <p id="text-post">{post.detail}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                );
                            })}



                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-12 text-center mt-4">
                        <button className="btn btn-success" onClick={() => setLimit(limit + 3)}>Xem thêm</button>
                    </div>
                </div>
            </div>





        </section>
    );
}

export default News;