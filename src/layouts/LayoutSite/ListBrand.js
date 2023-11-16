import brandservice from '../../services/BrandService';
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function ListBrand() {
    const [brands,setBrands]=useState([]);
useEffect(function(){
    (async function(){
        try{
        const result=await brandservice.getAll();
        setBrands(result.data.brands);
        }catch (error){
            console.error(error);
        }

    })();
},[])
    return ( 
        <div className="listbrand mb-5">
            <h3 className="bg-info p-3 m-0 text-center">Danh mục thương hiệu</h3>
             <ul>
             {brands.map(function(br,index){
                    return (<li key={index}>
            
                    <Link to={"/thuong-hieu/"+br.slug}>{br.name}</Link>
                </li>);
                 })}
             </ul>
        </div>
     );
}

export default ListBrand;