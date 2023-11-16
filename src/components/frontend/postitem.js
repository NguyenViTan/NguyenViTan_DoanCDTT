import { urlImage } from "../../config";
import a4 from "../../assets/images/meoo.jpg"
import a2 from "../../assets/images/meoo.jpg"

import a3 from "../../assets/images/meoo.jpg"



function Post(props) {
    return (
        <section className="contanerr">
        
            <div className="row   ">
           
                <img src={urlImage + "post/" + props.post.image} className="img-fluid" alt="bai viet" />
                    <h6>15/10/2023 -bởi:Ego Creative</h6>
                    <h2>{props.post.title}</h2>
                    <p>{props.post.detail}</p>
            </div>
               
                
         </section>

   

        
    );
}
export default Post;