import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./carousel.css";
import { activateSignUp } from "../../store/modal";
import Stock1 from "./stock-image-1.jpg";
import Stock2 from "./stock-image-2.jpg";

const CAROUSEL_COUNT = 2;
const CAROUSEL_DELAY = 8000;

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  function modalIsOpenSignUp() {
    dispatch(activateSignUp());
  }
  useEffect(() => {
    const timer = setInterval(() => {setIndex((index + 1) % CAROUSEL_COUNT);
    }, CAROUSEL_DELAY);
    return () => clearInterval(timer);
  }, [index]);

  const transform = `translateX(${index * -50}%)`;

  return (
    <>
      <div className="carousel" style={{ transform }}>
        <div
          className="carousel-item"
          style={{
            backgroundImage: `url(${Stock2})`,
          }}
        >
          <div className="splash-carousel-center">
            <h2 className="splash-carousel-header">
              Discover more with Middle8 go+
            </h2>
            <p className="splash-carousel-header-p">
              Middle8 go+ lets you listen offline, ad-free, with over 150
              million tracks - and growing.
            </p>

            <button
              className="large-button-orange"
              onClick={() => modalIsOpenSignUp()}
            >
              Create account today
            </button>
          </div>
        </div>

        <div
          className="carousel-item"
          style={{
            backgroundImage: `url(${Stock1})`,
          }}
        ></div>
      </div>
      <div className="carousel-button-container">
        <CarouselButton activeIndex={index} index={0} onClick={setIndex} />
        <CarouselButton activeIndex={index} index={1} onClick={setIndex} />
      </div>
    </>
  );
};

const CarouselButton = ({ activeIndex, index, onClick }) => (
  <div
    className={
      "carousel-button " +
      (activeIndex === index ? "carousel-button-active" : "")
    }
    onClick={() => onClick(index)}
  />
);

export default Carousel;
