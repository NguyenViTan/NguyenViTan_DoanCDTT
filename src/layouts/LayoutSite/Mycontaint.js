import React from "react";
import Logo from '../../assets/images/sirius.png';
import Logo1 from '../../assets/images/sirius2.jpg';
import Logo2 from '../../assets/images/vision.jpg';
import Logo3 from '../../assets/images/ab.jpg';
import Logo4 from '../../assets/images/w.jpg';
import Logo5 from '../../assets/images/f.jpg';





import { Link } from "react-router-dom";
function Mycontaint() {
    return (

        <div class="container my-3 text-center">
            <div class="row">
                <div class="col ">
                    <Link>
                        <img src={Logo} className="img-fluid" alt="logo" />
                    </Link>
                    <h6>Sirius Fi 2020</h6>
                </div>
                <div class="col ">
                    <Link>
                        <img src={Logo1} className="img-fluid" alt="logo" />
                    </Link>
                    <h6>Sirius Fi Xanh đen 2020</h6>
                </div>
                <div class="col ">
                    <Link>
                        <img src={Logo2} className="img-fluid" alt="logo" />
                    </Link>
                    <h6>Vison</h6>
                </div>
                <div class="col ">
                    <Link>
                        <img src={Logo3} className="img-fluid" alt="logo" />
                    </Link>
                    <h6>Air Blade 2022</h6>
                </div>
                <div class="col ">
                    <Link>
                        <img src={Logo4} className="img-fluid" alt="logo" />
                    </Link>
                    <h6>Winner X</h6>
                </div>
                <div class="col ">
                    <Link>
                        <img src={Logo5} className="img-fluid" alt="logo" />
                    </Link>
                    <h6>Future 2019</h6>
                </div>
            </div>

        </div>

    );
}

export default Mycontaint; 