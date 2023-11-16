



import { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import menuservice from '../../services/MenuService';
import MenuItem from './MenuItem';


function Menu() {
    const [menus, setMenus] = useState([]);
    useEffect(function () {
        (async function () {
            const result = await menuservice.getByParentId('mainmenu', 0);
           
            setMenus(result.data.menus);
        })();
    }, []);
    // console.log(menus);
    return (
        <section class="mymainmenu bg-danger" >
            <div class="container ">
                <div class="row">
                    <div class="cod-md-3 text-white "></div>
                    <div class="cod-md-9">
                        <nav class="navbar navbar-expand-lg bg-danger">
                            <div class="container-fluid">
                                <Link className='nav-bar text-white d-md-none d-sm-block '>Navbar</Link>
                              <button className="navbar-toggler text-white" 
                              type="button" 
                              data-bs-toggle="collapse" 
                              data-bs-target="#navbarSupportedContent"
                              aria-controls='navbarSupportedContent'
                              aria-expanded="false"
                              aria-label='Toggle-navigation'
                              > 
                              <span className='navbar-toggler-icon'></span>
                              </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                                        {menus.map(function (menu, index) {
                                            return <MenuItem key={index} menu={menu} />
                                        })}

                                    </ul>
                                  
                                </div>
                              
                            </div>
                            
                        </nav>
                       
                    </div>

                </div>
            </div>
        </section>

    );
}

export default Menu;