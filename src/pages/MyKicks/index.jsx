import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./my-kicks.scss";
// import Swiper core and required modules
import SwiperCore, { Grid, Navigation, Pagination } from "swiper";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import Card from "./Card";
const slides = [
  { imgSrc: "/assets/cards/fig.png" },
  { imgSrc: "/assets/cards/pineapple.png" },
  { imgSrc: "/assets/cards/pear.png" },
  { imgSrc: "/assets/cards/fig.png" },
  { imgSrc: "/assets/cards/pineapple.png" },
  { imgSrc: "/assets/cards/pear.png" },
  { imgSrc: "/assets/cards/fig.png" },
  { imgSrc: "/assets/cards/pineapple.png" },
  { imgSrc: "/assets/cards/pear.png" },
  { imgSrc: "/assets/cards/fig.png" },
  { imgSrc: "/assets/cards/pineapple.png" },
  { imgSrc: "/assets/cards/pear.png" },
  { imgSrc: "/assets/cards/fig.png" },
  { imgSrc: "/assets/cards/pineapple.png" },
  { imgSrc: "/assets/cards/pear.png" },
  { imgSrc: "/assets/cards/fig.png" },
  { imgSrc: "/assets/cards/pineapple.png" },
  { imgSrc: "/assets/cards/pear.png" },
  { imgSrc: "/assets/cards/fig.png" },
  { imgSrc: "/assets/cards/pineapple.png" },
  { imgSrc: "/assets/cards/pear.png" },
  { imgSrc: "/assets/cards/fig.png" },
  { imgSrc: "/assets/cards/pineapple.png" },
  { imgSrc: "/assets/cards/pear.png" },
];
SwiperCore.use([Grid, Pagination, Navigation]);
export default function MyKicks({}) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + (index + 1) + "</div>";
    },
  };
  return (
    <div id="my-kicks-page" className="w-full h-full  relative ">
      <div className="pb-10">
        <SectionHeaderBackNav pageName={"My juicy kicks"} />
      </div>
      <div className="relative">
        <div id="swiper-store-page-next" className="swiper-store-nav-button next">
          <img src="assets/slider-arrow-big.svg" alt="next slide" />
        </div>
        <div id="swiper-store-page-prev" className="swiper-store-nav-button prev">
          <img src="assets/slider-arrow-big.svg" alt="next slide" />
        </div>
        <Swiper
          className=""
          slidesPerView={4}
          grid={{
            rows: 3,
            fill: "row",
          }}
          spaceBetween={0}
          pagination={pagination}
          // loop={true}
          navigation={{
            nextEl: "#swiper-store-page-next",
            prevEl: "#swiper-store-page-prev",
          }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i} className="">
              <Card slide={slide} />
            </SwiperSlide>
          ))}
          <div class="swiper-pagination flex"></div>
        </Swiper>{" "}
      </div>
    </div>
  );
}
