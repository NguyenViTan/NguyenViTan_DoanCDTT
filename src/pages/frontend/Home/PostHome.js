// import Post from "../../../components/frontend/postitem";
// import postservice from "../../../services/PostService";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// function PostHome(props) {
//     const [posts, setPosts] = useState([]);
//     useEffect(function () {
//         (async function () {
//             const result = await postservice.getPostHome(5, props.topic.id);

//             setPosts(result.data.posts);

//         })();

//     }, []);
//     return (<div className="container my-3">
//         <div className="post-topic">
           
//             <h3 className="text-center text-danger">{props.topic.name} </h3>

//             <div className="row my-3">
//                 {
//                     posts.map(function (post, index) {
//                         return <Post post={post} key={index} />;
//                     })}
//             </div>
//             <div className="text-center my-3">
//                 <Link to={"danh-muc-san-pham/"+props.topic.slug} className="btn btn-success">Xem thêm</Link>
//             </div>
//         </div>
//     </div>);
// }

// export default PostHome;