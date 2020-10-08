import React from "react";
import Slider from "react-slick";
import slide1 from "../../Resources/images/featured/slide1.jpg";
import slide2 from "../../Resources/images/featured/slide2.png";
import slide3 from "../../Resources/images/featured/slide4.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false
  };

  return (
    <div
      className="featured_container"
      style={{
        background: "gray",
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="featured_image"
            style={{
              background: `url(${slide1})`
            }}
          >
            <div className="featured_action">
              <div className="tag">
                <div className="title">SAMSUNG</div>
                <div className="low_title">Endless Section</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* end slide 1 container */}
          <div
            className="featured_image"
            style={{
              background: `url(${slide2})`,
              height: `${window.innerHeight}px`
            }}
          >
            <div className="featured_action">
              <div className="tag">
                <div className="title">DELL</div>
                <div className="low_title">Huge Discounts</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="featured_image"
            style={{
              background: `url(${slide3})`,
              height: `${window.innerHeight}px`
            }}
          >
            <div className="featured_action">
              <div className="tag">
                <div className="title">APPLE</div>
                <div className="low_title">Great Selection</div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
