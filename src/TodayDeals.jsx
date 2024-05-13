import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Datas from "./Flashsale.json";
import { useCart } from "react-use-cart";


export default function TodayDeals() {
 const { addItem } = useCart();

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <h5 className="my-5">Today's Deals</h5>

      <div className="slider-container px-5">
        <Slider {...settings}>
          {Datas.map((item) => {
const name1 =
  item.name.length > 20 ? item.name.substring(0, 19) + "..." : item.name;

            return (
              <div key={item.id}>
                <div className="card">
                  <div className="card-body">
                    <div className="card-header">
                      <img src={item.img} alt="" className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <small>{item.kg}</small>
                      <p className="card-text">{name1}</p>
                      <div className="card-fo">
                        <div className="row">
                          <div className="col-md-6">
                            <p className="card-tittle">
                              <strike>Rs {item.dis}</strike>
                            </p>
                            <p className="card-text text-muted">
                              Rs {item.price}
                            </p>
                          </div>
                          <div className="col-md-6 d-flex align-items-center">
                            <button
                              onClick={() => addItem(item)}
                              className="btn border-success text-success w-100"
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
