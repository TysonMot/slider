import "./../stylesheet/App.css";
import { useState } from "react";
import Slider from "react-slick";
import dog from "./../assets/pic.jpg";
import pic2 from './../assets/pic2.jpeg';

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [dog,pic2,dog,pic2,dog,pic2,dog,pic2,dog,pic2,dog];

const App = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
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
    ],
    centerMode: true,
    centerPadding: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
           <div className={'image-container'}>
             <img src={img} alt={img} />
           </div>
            <div className={'content'}>
              <h1>Get a device</h1>
              <p>start here</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
