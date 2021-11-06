import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

import "./home-slider.scss";
export default function HomeSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = [
    {
      name: "Green dino",
      age: "10 days",
      pic: "../../assets/dinos/1.png",
    },
    {
      name: "purple dino",
      age: "15 days",
      pic: "../../assets/dinos/3.png",
    },
    {
      name: "orange dino",
      age: "20 days",
      pic: "../../assets/dinos/4.png",
    },
    {
      name: "pink dino",
      age: "5 days",
      pic: "../../assets/dinos/5.png",
    },
  ];
  return (
    <div id="home-slider" className=" h-full overflow-hidden relative">
      <div id="home-slider-prev" className="slider-button prev">
        <img src="../../assets/arrow-next.svg" alt="prev" />
      </div>
      <div className="slider-button next">
        <img id="home-slider-next" src="../../assets/arrow-next.svg" alt="prev" />
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
        navigation={{
          nextEl: "#home-slider-next",
          prevEl: "#home-slider-prev",
        }}
      >
        <img
          className="slide-bg main-slider-bg"
          src="../../assets/slider1-bg.png"
          alt="bg"
        />
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="slide-wrapper">
              <div className="absolute top-10 flex flex-col items-center">
                <p className="text-border text-2xl text-white">{slide.name}</p>
                <div className="relative -top-1">
                  <img src="../../assets/age-pic.png" alt="age" />
                  <span className="top-1/2 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs w-full">
                    {slide.age}
                  </span>
                </div>
              </div>
              <img className="slide-pic" src={slide.pic} alt={slide.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col justify-between h-full">
              <div className="slide-wrapper thumbs h-full">
                <img className="slide-bg" src="../../assets/slider1-bg.png" alt="bg" />
                <img className="slide-pic" src={slide.pic} alt={slide.name} />
              </div>
              <div className=" flex flex-col items-center pt-1">
                <p className="text-border text-xs text-white">{slide.name}</p>
                <div className="relative -top-1">
                  <img src="../../assets/age-pic.png" alt="age" />
                  <span className="top-1/2 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[10px] w-full">
                    {slide.age}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
