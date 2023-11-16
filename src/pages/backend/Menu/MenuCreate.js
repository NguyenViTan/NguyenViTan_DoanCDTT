
import { useEffect, useState } from "react";
import menuservice from "../../../services/MenuService";
import { Link, useNavigate } from "react-router-dom";



function MenuCreate() {
    const Navigate = useNavigate();
    const [menus, setMenu] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getAll().then(function (result) {
                setMenu(result.data.menus)
            });
        })();
    }, [])

    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [parent_id, setParentIs] = useState(0);
    const [sort_order, setSortOrder] = useState('');
    const [position, setPosition] = useState(0);
    const [table_id, setTable_id] = useState(0);
    const [type, setType] = useState('');
    const [created_by, setCreated_by] = useState(1);
    const [status, setStatus] = useState(2);



    async function menuStore(event) {
        event.preventDefault();
        const menu = new FormData();
        menu.append("name", name);
        menu.append("link", link);
        menu.append("table_id", table_id);
        menu.append("type", type);
        menu.append("created_by", created_by);
        menu.append("status", status);
        menu.append("parent_id", parent_id);
        menu.append("position", position);
        menu.append("sort_order", sort_order);



        await menuservice.create(menu).then(function (res) {
            alert(res.data.message)
            Navigate('../../admin/menu', { replace: true })
        })
    }



    return (
        <form onSubmit={menuStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm Menu
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/menu" className="btn btn-sm btn-info">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên danh menu</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="link">Link</label>
                                <textarea onChange={(e) => setLink(e.target.value)} name="link" value={link} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="table_id">table_id</label>
                                <textarea onChange={(e) => setTable_id(e.target.value)} name="table_id" value={table_id} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="position">position</label>
                                <textarea onChange={(e) => setPosition(e.target.value)} name="position" value={position} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="type">type</label>
                                <textarea onChange={(e) => setType(e.target.value)} name="type" value={type} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="sort_order">sort_order</label>
                                <textarea onChange={(e) => setSortOrder(e.target.value)} name="sort_order" value={sort_order} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="parent_id">parent_id</label>
                                <textarea onChange={(e) => setParentIs(e.target.value)} name="parent_id" value={parent_id} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="created_by">created_by</label>
                                <textarea onChange={(e) => setCreated_by(e.target.value)} name="created_by" value={created_by} className="form-control"></textarea>
                            </div> <div className="md-3">
                                <label htmlFor="status">status</label>
                                <textarea onChange={(e) => setStatus(e.target.value)} name="status" value={status} className="form-control"></textarea>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </form>
    );
}

export default MenuCreate;