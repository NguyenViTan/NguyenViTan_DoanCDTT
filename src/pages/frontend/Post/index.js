import React, { useEffect, useState } from "react";
import a1 from "../../../assets/images/meoo.jpg"
import a2 from "../../../assets/images/h1.jpg"
import a3 from "../../../assets/images/h2.jpg"
import a4 from "../../../assets/images/h5.jpg"

import Post from "../../../components/frontend/postitem";

import postservice from "../../../services/PostService";


function Home() {

    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(1);
    useEffect(function () {
        (function () {
            postservice.getAll(limit, 1).then(function (result) {
                setPosts(result.data.posts);
            });
        })();
    }, [limit])
    return (<section className="maincontent">
        


        <div className="container mb-4">
           <h3 className="text-center my-3">Tin Tức mới nhất </h3>
           <div>
             <div className="row border  ">
                 <div className="col-md-6">
                 {
                        posts.map(function (post, index) {
                            return <Post post={post} key={index} />;
                        })}

                 </div>
                 <div className="col-md-6  ">
                     <div className="row border-top">
                         <div className="col-5">
                         <img  className="img-fluid w-100" src={a4} alt="sai"/>
                         </div>
                         <div className="col-7">
                         <h6>15/10/2023 -bởi:Ego Creative</h6>
                         <h5>Singapore khai trương du thuyền hạng sang cho mèo</h5>
                         <p>Công ty Singapore khai trương du thuyền hạng sang phục vụ những người nuôi mèo và con vật cưng của họ du ngoạn trên biển. </p>
                         </div>
                     </div>
                     <div className="row border-top">
                         <div className="col-5">
                         <img  className="img-fluid w-100" src={a2} alt="sai"/>
                         </div>
                         <div className="col-7">
                         <h6>15/10/2023 -bởi:Ego Creative</h6>
                         <h5>Một đêm mèo hoang có thể bắt hàng nghìn con chuột</h5>
                         <p>Đủ ăn, có chỗ ở, nhưng Conan không mấy quan tâm đến nhiệm vụ. Con mèo thích ngủ, phơi nắng trước quán cà phê gần đó, hay chơi với những quả bóng trên sàn khiến người qua đường thích thú. </p>
                         </div>
                     </div>
                     <div className="row border-top">
                         <div className="col-5">
                         <img  className="img-fluid w-100" src={a3} alt="sai"/>
                         </div>
                         <div className="col-7">
                         <h6>15/10/2023 -bởi:Ego Creative</h6>
                         <h5>Đội quân săn chuột ở thủ đô Mỹ</h5>
                         <p>Một đêm tháng 6 oi bức, hàng chục người dắt chó tới tụ điểm giải trí ở thủ đô Washington, bắt đầu chuyến săn chuột theo tuần. </p>
                         </div>
                     </div>
                 </div>
                
                
             </div>
             </div>
         </div>

      
    </section >
    )
};
export default Home;


