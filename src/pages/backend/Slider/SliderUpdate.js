import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import sliderservice from "../../../services/SliderService";

function SliderUpdate() {
    const navigate = useNavigate();

    //khai báo state
    const [name, setName] = useState('');
    const [sort_order, setSort_order] = useState(0);
    const [link, setLink] = useState('');
    const [position, setPosition] = useState('');
    const [created_by, setCreated_by] = useState(0);
    const [status, setStatus] = useState(1);
    //chi tiết mẫu tin có id
    const { id } = useParams("id");
    useEffect(function () {
        (async function () {
            await sliderservice.getById(id)
                .then(function (result) {
                    const tmp = result.data.sliders;
                    setName(tmp.name);
                    setSort_order(tmp.sort_order);
                    setLink(tmp.link);
                    setPosition(tmp.position);
                    setCreated_by(tmp.created_by);
                    setStatus(tmp.status);

                });
        })();
    }, []);
    //Lấy danh sách
    const [slider, setSliders] = useState([]);
    useEffect(function () {
        (async function () {
            await sliderservice.getAll()
                .then(function (result) {
                    setSliders(result.data.sliders);
                });
        })();
    }, []);

    async function sliderEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var slider = new FormData();
        slider.append("created_by", created_by);
        slider.append("link", link);
        slider.append("position", position);
        slider.append("sort_order", sort_order);
        slider.append("name", name);
        slider.append("status", status);
        slider.append("image", image.files[0]);
        if (image.files.length === 0) {
            slider.append("image", "");
        } else {
            slider.append("image", image.files[0]);
        }
        //update
        await sliderservice.update(slider, id)
            .then(function (res) {
                alert(res.data.message)
                navigate('/admin/slider', { replace: true });
            });
    }
    return (
        <form onSubmit={sliderEdit} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">Thêm slider</strong>
                        </div>
                        <div className="col-md-6 text-end" >
                            <button className="btn btn-sm btn-success me-3" type="submit">Lưu</button>
                            <Link to="/admin/slider" className="btn btn-sm btn-info ">
                                Quay lại
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <div className="mb-3">

                                </div>
                                <label htmlFor="name">Tên </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                                <div className="mb-3">
                                    <label htmlFor="link">link</label>
                                    <input
                                        type="text"
                                        name="link"
                                        value={link}
                                        onChange={(e) => setLink(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="position">position</label>
                                    <input
                                        type="text"
                                        name="position"
                                        value={position}
                                        onChange={(e) => setPosition(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="sort_order">sort_order</label>
                                    <input
                                        type="text"
                                        name="sort_order"
                                        value={sort_order}
                                        onChange={(e) => setSort_order(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image">Hình ảnh</label>
                                    <input type="file" id="image" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="created_by">created_by</label>
                                    <input
                                        type="text"
                                        name="created_by"
                                        value={created_by}
                                        onChange={(e) => setCreated_by(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">


                            <div className="mb-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select
                                    name="status"
                                    className="form-control"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default SliderUpdate;
