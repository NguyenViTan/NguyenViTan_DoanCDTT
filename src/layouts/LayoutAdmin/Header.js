import { Link } from "react-router-dom";
function Header() {
    return (<section className="header bg-danger">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-danger">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/admin">Quản trị</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Danh mục
                                </Link>
                                <ul className="dropdown-menu text-white">
                                    <li><Link className="dropdown-item" to="/admin/product">Sản phẩm</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/category">Category</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/brand">Thương hiệu</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/contact">Contact</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/menu">Menu</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/order">Order</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/post">Post</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/slider">Slider</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/topic">Topic</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/user">Người dùng</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/config">Gioi thieu</Link></li>



                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" href="#">Link</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled text-white">Disabled</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 text-white" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    </section>);
}
export default Header;