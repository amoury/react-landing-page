import React from "react";
import Slider from "react-slick";

import slide_one from "../../resources/images/devfest_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  };


  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden",
        background: "red"
      }}
    >
      <Slider {...settings}>
        <div
          className="carrousel_image"
          style={{ height: `${window.innerHeight}px` }}
        >
          <div
            className="slide_image"
            style={{ backgroundImage: `url(${slide_one})`, height: "100%" }}
          />
        </div>

        <div
          className="carrousel_image"
          style={{ height: `${window.innerHeight}px` }}
        >
          <div
            className="slide_image"
            style={{ backgroundImage: `url(${slide_two})`, height: "100%" }}
          />
        </div>

        <div
          className="carrousel_image"
          style={{ height: `${window.innerHeight}px` }}
        >
          <div
            className="slide_image"
            style={{ backgroundImage: `url(${slide_three})`, height: "100%" }}
          />
        </div>
        
      </Slider>
    </div>
  );
};

export default Carousel;
