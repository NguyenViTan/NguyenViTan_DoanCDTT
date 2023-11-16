import { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import menuservice from '../../services/MenuService';
function MenuItem(props) {
    const [menus, setMenus] = useState([]);
    const rowmenu = props.menu;
    useEffect(function () {
        (async function () {
            const result = await menuservice.getByParentId('mainmenu', rowmenu.id);
            setMenus(result.data.menus);
        })();
    }, []);
    if (menus == null) {
        return (
            <li className="nav-item">
                <Link className='nav-link text-white' to={rowmenu.link}>{rowmenu.name}</Link>
            </li>
        )
    }
    else {


        return (<li className="nav-item dropdown text-white">
            <Link className="nav-link dropdown-toggle text-white" to= {rowmenu.link} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {rowmenu.name}
            </Link>
            <ul className="dropdown-menu">
                {menus.map(function(menu1,index){
                 return <li key={index}><Link className="dropdown-item" to={menu1.link}>{menu1.name}</Link></li>
                }
                
               
                )}
              
            </ul>
        </li>);
    }
}

export default MenuItem;