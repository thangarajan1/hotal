import React from "react";
import Flashsale from "./Flashsale.jsx";
import SnackOn from "./snackOn.jsx";
import Arrivals from "./Arrivals.jsx";
import TodayDeals from "./TodayDeals.jsx";
import Category from "./Category.jsx";
import Offers from "./Offers.jsx";
import Slider from "react-slick";

export default function Home() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="my-5">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img
                src="https://cdn.freshtohome.com/media/banner/aee267ccf68b9dd3.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div>
              <img
                src="https://cdn.freshtohome.com/media/banner/92bc39530bd484b5.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div>
              <img
                src="https://cdn.freshtohome.com/media/banner/3462bc6977573b0c.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </Slider>
        </div>

        <p className="text-center time my-5 mx-5">
          Order before 10 AM for 12:30pm - 02:30pm delivery
        </p>

        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img
                src="https://cdn.freshtohome.com/media/banner/eb13f1d38997a835.gif"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div>
              <img
                src="https://cdn.freshtohome.com/media/banner/6a6ec33f954f0fda.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </Slider>
        </div>

        <Flashsale />
        <SnackOn />
        <Arrivals />
        <TodayDeals />
        <Category />
        <Offers />
      </div>
    </>
  );
}
