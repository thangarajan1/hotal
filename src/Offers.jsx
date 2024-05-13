import React from 'react'
import Slider from "react-slick";


export default function Offers() {
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
      <div>
        <center>
          <img
            src="https://cdn.freshtohome.com/media/banner/a8680d3707dd161e.jpg"
            alt=""
            width={"100%"}
          />
        </center>
        <div className="mt-3">
          <img
            src="https://static.freshtohome.com/media/banner/b8b74303fe31a624.jpg"
            alt=""
            width={"100%"}
          />
        </div>
        <div className="mt-3">
          <img
            src="https://static.freshtohome.com/antibioticfree/certificate-banner-mobile-2021.jpg"
            alt=""
            width={"100%"}
          />
        </div>
        <div className="mt-3">
          <img
            src="https://static.freshtohome.com/media/banner/fth-video-visit-to-factory.jpg"
            alt=""
            width={"100%"}
          />
        </div>
        <div className="mt-3">
          <img
            src="https://static.freshtohome.com/images/mobile/why/in/why-fth-banner-02.jpg"
            alt=""
            width={"100%"}
          />
        </div>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img
              src="https://static.freshtohome.com/images/mobile/fine-art-of-freshness/fine-art-of-freshness-banner.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div>
            <img
              src="https://static.freshtohome.com/images/mobile/fine-art-of-freshness/good-fish-comes-in-small-boat-mbl.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div>
            <img
              src="https://static.freshtohome.com/images/mobile/fine-art-of-freshness/love-air-goat-banner.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div>
            <img
              src="https://static.freshtohome.com/media/banner/310bb28d016c61f4.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div>
            <img
              src="https://static.freshtohome.com/images/mobile/fine-art-of-freshness/fastest-prawn-peelers-banner.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </Slider>
      </div>
    </>
  );
}
