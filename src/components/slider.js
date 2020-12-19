import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    var settings = {
      autoplay:false,
      arrows:true,
      autoplaySpeed:3000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow:true,
      className:"slider"
    };
    return (
      <Slider {...settings}>
        <div className="slider_img">
          <img src="../../assets/homebg.png" alt="pic1"></img>
        </div>
        <div className="slider_img">
          <img src="../../assets/vision.png" alt="pic2"></img>
        </div>
        <div className="slider_img">
          <img src="" alt="pic3"></img>
        </div>
        <div className="slider_img">
          <img src="" alt="pic4"></img>
        </div>
        <div className="slider_img">
          <img src="" alt="pic5"></img>
        </div>
        <div className="slider_img">
          <img src="" alt="pic6"></img>
        </div>
      </Slider>
    );
  }