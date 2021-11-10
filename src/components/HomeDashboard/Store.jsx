import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const slides = [
  { imgSrc: "/assets/cards/fig.png" },
  { imgSrc: "/assets/cards/pineapple.png" },
  { imgSrc: "/assets/cards/pear.png" },
];
export default function Store() {
  return (
    <div className="nav-grid-item">
      <div className="flex flex-col gap-5 justify-between h-full">
        <div className=" relative w-full h-full">
          <div id="swiper-store-next" className="swiper-store-nav-button next">
            <img src="assets/swiper-store-button.svg" alt="next slide" />
          </div>
          <div id="swiper-store-prev" className="swiper-store-nav-button prev">
            <img src="assets/swiper-store-button.svg" alt="next slide" />
          </div>
          <Swiper
            className=""
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            loop={true}
            navigation={{
              nextEl: "#swiper-store-next",
              prevEl: "#swiper-store-prev",
            }}
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i} className="">
                <div className="slide-inner-wrapper">
                  <img className="slide-inner-img" src={slide.imgSrc} alt="slide" />
                  <button className="slide-buy-btn">buy now</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className="nav-grid-item-button store">Store</button>
      </div>
    </div>
  );
}
