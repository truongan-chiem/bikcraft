import React from "react";

import Ranek from "../../asset/ranek";
import Caravan from "../../asset/caravan";
import Dogs from "../../asset/dogs";
import Handel from "../../asset/handel";
import Surfbot from "../../asset/surfbot";
import Wildbeast from "../../asset/wildbeast";
import Flexblog from "../../asset/flexblog";
import Lescone from "../../asset/lescone";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Partner.scss";
const Partner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,     
    slidesToScroll: 1,
    rows: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const items = [
    {
      item : <Ranek />
    },
    {
      item : <Surfbot />
    },
    {
      item : <Caravan />
    },
    {
      item : <Wildbeast />
    },
    {
      item : <Dogs />
    },
    {
      item : <Flexblog />
    },
    {
      item : <Handel />
    },
    {
      item : <Lescone />
    },
    {
      item : <Ranek />
    },
    {
      item : <Surfbot />
    },
    {
      item : <Caravan />
    },
    {
      item : <Wildbeast />
    },
    {
      item : <Dogs />
    },
    {
      item : <Flexblog />
    },
    {
      item : <Handel />
    },
    {
      item : <Lescone />
    },
  ]

  return (
    <div className="Partner">
      <h2>out partners.</h2>
      <Slider {...settings} className="Partner__slider">
        {items.map(item => <div className="Partner__slider__item"> {item.item }</div>)}
      </Slider>
      {/* </div> */}
    </div>
  );
};

export default Partner;
