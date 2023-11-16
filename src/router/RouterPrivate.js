import Dashboard from '../pages/backend/Dashbroard/index';
import BrandList from "../pages/backend/Brand/BrandList";
import BrandCreate from "../pages/backend/Brand/BrandCreate";
import BrandUpdate from "../pages/backend/Brand/BrandUpdate";
import BrandShow from "../pages/backend/Brand/BrandShow";


import CategoryList from "../pages/backend/Category/CategoryList";
import CategoryCreate from "../pages/backend/Category/CategoryCreate";
import CategoryUpdate from "../pages/backend/Category/CategoryUpdate";
import CategoryShow from "../pages/backend/Category/CategoryShow";


import ProductCreate from '../pages/backend/Product/ProductCreate';
import ProductUpdate from '../pages/backend/Product/ProductUpdate';
import ProductShow from '../pages/backend/Product/ProductShow';
import ProductList from '../pages/backend/Product/ProductList';

// import ConfigCreate from '../pages/backend/Config/ConfigCreate';
// import ConfigUpdate from '../pages/backend/Config/ConfigUpdate';
// import ConfigShow from '../pages/backend/Config/ConfigShow';
// import BrandsList from '../pages/backend/Config/ BrandsList';

import SliderList from '../pages/backend/Slider/SliderList';
import SliderUpdate from '../pages/backend/Slider/SliderUpdate';
import SliderShow from '../pages/backend/Slider/SliderShow';
import SliderCreate from '../pages/backend/Slider/SliderCreate';

import MenuList from '../pages/backend/Menu/MenuList';
import MenuUpdate from '../pages/backend/Menu/MenuUpdate';
import MenuShow from '../pages/backend/Menu/MenuShow';
import MenuCreate from '../pages/backend/Menu/MenuCreate';



import PostList from '../pages/backend/Post/PostList';
import PostUpdate from '../pages/backend/Post/PostUpdate';
import PostShow from '../pages/backend/Post/PostShow';
import PostCreate from '../pages/backend/Post/PostCreate';

import ContactList from '../pages/backend/Contact/ContactList';
import ContactUpdate from '../pages/backend/Contact/ContactUpdate';
import ContactShow from '../pages/backend/Contact/ContactShow';
import ContactCreate from '../pages/backend/Contact/ContactCreate';

import OrderList from '../pages/backend/Order/OrderList';
import OrderUpdate from '../pages/backend/Order/OrderUpdate';
import OrderShow from '../pages/backend/Order/OrderShow';
import OrderCreate from '../pages/backend/Order/OrderCreate';



import TopicList from '../pages/backend/Topic/TopicList';
import TopicUpdate from '../pages/backend/Topic/TopicUpdate';
import TopicShow from '../pages/backend/Topic/TopicShow';
import TopicCreate from '../pages/backend/Topic/TopicCreate';


import UserList from '../pages/backend/User/UserList';
import UserUpdate from '../pages/backend/User/UserUpdate';
import UserShow from '../pages/backend/User/UserShow';
import UserCreate from '../pages/backend/User/UserCreate';



const RouterPrivate = [
    { path: '/admin', component: Dashboard },
    { path: '/admin/brand', component: BrandList },
    { path: '/admin/brand/create', component: BrandCreate },
    { path: '/admin/brand/update/:id', component: BrandUpdate },
    { path: '/admin/brand/show/:id', component: BrandShow },

    { path: '/admin/category', component: CategoryList },
    { path: '/admin/category/create', component: CategoryCreate },
    { path: '/admin/category/update/:id', component: CategoryUpdate },
    { path: '/admin/category/show/:id', component: CategoryShow },

    { path: '/admin/product', component: ProductList },
    { path: '/admin/product/create', component: ProductCreate },
    { path: '/admin/product/update/:id', component: ProductUpdate },
    { path: '/admin/product/show/:id', component: ProductShow },


    { path: '/admin/slider', component: SliderList },
    { path: '/admin/slider/create', component: SliderCreate },
    { path: '/admin/slider/update/:id', component: SliderUpdate },
    { path: '/admin/slider/show/:id', component: SliderShow },

    { path: '/admin/menu', component: MenuList },
    { path: '/admin/menu/create', component: MenuCreate },
    { path: '/admin/menu/update/:id', component: MenuUpdate },
    { path: '/admin/menu/show/:id', component: MenuShow },

    { path: '/admin/topic', component: TopicList },
    { path: '/admin/topic/create', component: TopicCreate },
    { path: '/admin/topic/update/:id', component: TopicUpdate },
    { path: '/admin/topic/show/:id', component: TopicShow },

    { path: '/admin/user', component: UserList },
    { path: '/admin/user/create', component: UserCreate },
    { path: '/admin/user/update/:id', component: UserUpdate },
    { path: '/admin/user/show/:id', component: UserShow },


    { path: '/admin/post', component: PostList },
    { path: '/admin/post/create', component: PostCreate },
    { path: '/admin/post/update/:id', component: PostUpdate },
    { path: '/admin/post/show/:id', component: PostShow },

    { path: '/admin/order', component: OrderList },
    { path: '/admin/order/create', component: OrderCreate },
    { path: '/admin/order/update/:id', component: OrderUpdate },
    { path: '/admin/order/show/:id', component: OrderShow },


    { path: '/admin/contact', component: ContactList },
    { path: '/admin/contact/create', component: ContactCreate },
    { path: '/admin/contact/update/:id', component: ContactUpdate },
    { path: '/admin/contact/show/:id', component: ContactShow },

    // { path: '/admin/config/create', component: ConfigCreate },
    // { path: '/admin/config/show/:id', component: ConfigShow },
    // { path: '/admin/config/update/:id', component: ConfigUpdate},
    // { path: '/admin/config', component: BrandsList },




];

export default RouterPrivate;