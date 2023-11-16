
import { useEffect, useState } from "react";
import configservice from "../../../services/ConfigService";
import { Link, useNavigate } from "react-router-dom";



function ConfigCreate() {
    const Navigate = useNavigate();
    const [configs, setConfig] = useState([]);
    useEffect(function () {
        (async function () {
            await configservice.getAll().then(function (result) {
                setConfig(result.data.configs)
            });
        })();
    }, [])

    const [author, setAuthor] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [zalo, setZalo] = useState('');
    const [facebook, setFacebook] = useState('');
    const [address, setAddress] = useState('');
    const [metadesc, setMetadesc] = useState(0);
    const [metakey, setMetakey] = useState(0);
    const [status, setStatus] = useState(1);
 
   

    async function configStore(event) {
        event.preventDefault();
        const config = new FormData();
       config.append("name", author);
       config.append("email", email);
       config.append("phone", phone);
       config.append("zalo", zalo);
       config.append("facebook", facebook);
       config.append("address", address);



    }
    return (
        <form onSubmit={configStore} method="post">
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm Config
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/brand" className="btn btn-sm btn-info">Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">xyz</label>
                                <input onChange={(e) => setAuthor(e.target.value)} type="text" name="name" value={author} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="metakey">Email</label>
                                <textarea onChange={(e) => setEmail(e.target.value)} name="metakey" value={email} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="metakey">Phone</label>
                                <textarea onChange={(e) => setPhone(e.target.value)} name="metakey" value={phone} className="form-control"></textarea>
                            </div>
                           
                            <div className="md-3">
                                <label htmlFor="metakey">Face</label>
                                <textarea onChange={(e) => setFacebook(e.target.value)} name="metakey" value={facebook} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="metakey">zalo</label>
                                <textarea onChange={(e) => setZalo(e.target.value)} name="metakey" value={zalo} className="form-control"></textarea>
                            </div>

                            <div className="md-3">
                                <label htmlFor="metadesc">Mô tả</label>
                                <textarea onChange={(e) => setMetadesc(e.target.value)} name="metadesc" value={metadesc} className="form-control"></textarea>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>

        </form>
    );
}

export default ConfigCreate;