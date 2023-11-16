import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate, useParams } from "react-router-dom";
import sliderservice from '../../../services/SliderService';
import { useEffect, useState } from 'react';
import { urlImage } from '../../../config';
function SliderShow() {
    const { id } = useParams("id");
    const [slider, setSlider] = useState([]);
    const navigate = useNavigate();

    useEffect(function () {
        (async function () {
            await sliderservice.getById(id).then(function (result) {
                setSlider(result.data.sliders);
            });
        })();
    }, []);
    function sliderDelete(id) {
        sliderservice.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/slider', { replace: true });
        });
    }
    return (
        <section className="card">
            <form onSubmit={SliderShow} ></form>
            <div className="card-header">
                <div className="row">
                    <div className="col-md-6">
                        <strong className="text-danger  ">CHI TIẾT Slider</strong>
                    </div>
                    <div className="col-md-6 text-end">
                        <Link to="/admin/slider" className="btn btn-sm btn-outline-success me-1">
                            Về Danh Sách
                        </Link>
                        <Link to={"/admin/slider/update/" + slider.id} className="btn btn-sm btn-outline-primary me-1 ">
                            <FaEdit /> Sửa
                        </Link>
                        <button onClick={() => sliderDelete(slider.id)} className="btn btn-sm btn-outline-danger me-1">
                            <FaTrash /> Xóa
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <td className="text-danger" style={{ width: 300 }}><strong>Tên Trường</strong></td>
                            <td className="text-danger"><strong>Giá Trị</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Id</td>
                            <td>{slider.id}  </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{slider.name}  </td>
                        </tr>
                        <tr>
                            <td>Link</td>
                            <td>{slider.link}  </td>
                        </tr>

                        <tr>
                            <td>sort_order</td>
                            <td>{slider.sort_order}</td>
                        </tr>
                        <tr>
                            <td>position</td>
                            <td>{slider.position}  </td>
                        </tr>
                        <tr>
                            <td>created_by</td>
                            <td>{slider.created_by}  </td>
                        </tr>
                        <tr>
                            <td>status</td>
                            <td>{slider.status}  </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </section>

    );
}
export default SliderShow;