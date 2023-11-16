import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import categoryservice from '../../services/CategoryService';
function ListCategory() {
    const [categorys,setCategory]=useState([]);
    useEffect(function(){
        (async function(){
            try{
            const result=await categoryservice.getCategoryByParentId(0);
            setCategory(result.data.categorys);
            }catch(error){
                console.error(error);
            }

        })();
    },[])
    return ( 
        <div className="listcategory mb-5">
            <h3 className="bg-info p-3 m-0 text-center">Danh mục sản phẩm</h3>
             <ul>
                {categorys.map(function(cat,index){
                    return (<li key={index}>
            
                    <Link to={"/danh-muc-san-pham/"+cat.slug}>{cat.name}</Link>
                </li>);
                })}
             </ul>
        </div>
     );
}

export default ListCategory;