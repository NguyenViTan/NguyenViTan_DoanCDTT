
import { useEffect, useState } from "react";
import sliderservice from "../../../services/SliderService";
import { urlImage } from "../../../config";

function Slidershow() {
    const [SliderShows, setSliderShows] = useState([]);
    useEffect(function () {
        (async function () {
            const result=await sliderservice.getByPosition('slideshow');
            
                setSliderShows(result.data.sliders);
            
        })();
    }, []);
    // const Listslider = [
    //   {
    //     name: "Slider 01",
    //     image:
    //       "https://img5.thuthuatphanmem.vn/uploads/2021/12/27/hinh-nen-thu-cung-tuyet-dep_050543348.jpg",
    //   },
    //   {
    //     name: "Slider 02",
    //     image:
    //       "https://img5.thuthuatphanmem.vn/uploads/2021/12/27/anh-nen-cho-cung-dep-cho-may-tinh_050613547.jpg",
    //   },
    //   {
    //     name: "Slider 03",
    //     image:
    //       "https://img5.thuthuatphanmem.vn/uploads/2021/12/27/anh-nen-thu-cung-dang-yeu-full-hd-tuyet-dep-cho-may-tinh_050617775.jpg",
    //   },
    // ];
    return (
        <section className="myslider" >
            <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="carousel"
            >
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                     <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                    ></button>
                     <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="4"
                        aria-label="Slide 5"
                    ></button>
                </div>
                <div class="carousel-inner">
                    {SliderShows.map(function (slider, index) {
                        if (index === 0) {
                            return (
                                <div class="carousel-item active" key={index}>
                                    <img  src={urlImage + "slider/" + slider.image} class="d-block w-100" alt={slider.image} />
                                    
                                </div>
                            );
                        } else {
                            return (
                                <div class="carousel-item" key={index}>
                                    <img src={urlImage + "slider/" + slider.image} class="d-block w-100" alt={slider.image} />
                                    <div class="carousel-caption d-none d-md-block">
                                       
                                    </div>
                                </div>
                            );
                        }
                    })}
                    {/* <div class="carousel-item">
              <img src="" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>  
            </div> */}
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
 >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}

export default Slidershow;
