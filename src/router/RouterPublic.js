
import Home from "../pages/frontend/Home/Home";
import Product from "../pages/frontend/Product/Product";
import Contact from "../pages/frontend/Contact/Contact";
import ProductDetail from "../pages/frontend/Product/ProductDetail";
import ProductBrand from "../pages/frontend/ProductBrand";
import ProductCategory from "../pages/frontend/ProductCategory";
import GioiThieu from "../layouts/LayoutSite/gioithieu";
import Post from "../components/frontend/postitem";
import Login from "../pages/frontend/Login/Login";
import Register from "../pages/Register/Register";
import Intro from "../pages/frontend/Introduct";
import Pocily from "../pages/frontend/Policy";
import AllPost from "../pages/frontend/AllPost";
import New_Detail from "../pages/frontend/Post/PostDetail";
import Cart from "../pages/frontend/Cart/Cart";
const RouterPublic = [
    { path: "/", component: Home },
    { path: "/san-pham", component: Product },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/thongtin", component: Intro },
    { path: "/chinhsach", component: Pocily },
    { path: "/tatcabaiviet", component: AllPost },
    { path: "/cart", component: Cart },
    {path:'/pages/tin-tuc',component:AllPost},
    {path:'/pages/tin-tuc/chi-tiet-bai-viet/:slug',component:New_Detail},






    { path: "/gioi-thieu", component: GioiThieu },
    

    { path: "/danh-muc-san-pham/:slug", component: ProductCategory },
    { path: "/thuong-hieu/:slug", component: ProductBrand },
    { path: "/chi-tiet-san-pham/:slug", component: ProductDetail },
    { path: "/lien-he", component: Contact },
    { path: "/bai-viet/:slug", component: Post },
    


];
export default RouterPublic;