import React from 'react'

export default function Offers() {
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

      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://static.freshtohome.com/images/mobile/fine-art-of-freshness/fine-art-of-freshness-banner.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.freshtohome.com/images/mobile/fine-art-of-freshness/good-fish-comes-in-small-boat-mbl.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.freshtohome.com/images/mobile/fine-art-of-freshness/love-air-goat-banner.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.freshtohome.com/media/banner/310bb28d016c61f4.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.freshtohome.com/images/mobile/fine-art-of-freshness/fastest-prawn-peelers-banner.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
