import { Link } from "react-router-dom";
import { FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import sliderservice from "../../../services/SliderService";
import { useEffect, useState } from "react";
function SliderList() {
    const [sliders, setSlider] = useState([]);
    const [statusdel, setStatusDelete] = useState([]);

    useEffect(function () {
        (async function () {
            await sliderservice.getAll().then(function (result) {
                setSlider(result.data.sliders)
            });
        })();
    }, [statusdel])
    function sliderDelete(id) {
        sliderservice.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDelete(result.data.id);
        });
    }
    return (
        <div className="Card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Slider</strong>
                    </div>
                    <div className="col-md-6 text-end md-3">
                        <Link to="/admin/slider/create" className="btn btn-sm btn-outline-success">
                            <FaPlus />Thêm
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-striped table-bPosted table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: 50 }} className="text-center">#</th>
                                <th>Name</th>
                                <th>Link</th>
                                <th style={{ width: 130 }} className="text-center">Sort_order</th>
                                <th style={{ width: 130 }} className="text-center">Position</th>
                                <th style={{ width: 130 }} className="text-center">Ngày tạo</th>
                                <th style={{ width: 130 }} className="text-center">Chức năng</th>
                                <th style={{ width: 50 }} className="text-center">Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sliders.map(function (slider, index) {
                                return (
                                    <tr key={index}>
                                        <td className="text-center">
                                            <input type="checkbox" />
                                        </td>
                                        <td>{slider.name}</td>
                                        <td>{slider.link}</td>
                                        <td className="text-center">{slider.sort_order}</td>
                                        <td className="text-center">{slider.position}</td>
                                        <td className="text-center">{slider.created_at}</td>
                                        <td className="text-center">
                                            <Link className="btn btn-sm btn-success me-1" to={"/admin/slider/show/" + slider.id}>
                                                <FaEye />
                                            </Link>
                                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/slider/update/" + slider.id}>
                                                <FaEdit />
                                            </Link>
                                            <button onClick={() => sliderDelete(slider.id)} className="btn btn-sm btn-danger ">
                                                <FaTrash />
                                            </button>
                                        </td>
                                        <td className="text-center">{slider.id}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}

export default SliderList; 