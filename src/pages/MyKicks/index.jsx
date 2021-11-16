import { Swiper, SwiperSlide } from "swiper/react";
import Dropdown from "../../components/Dropdown";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./my-kicks.scss";
// import Swiper core and required modules
import SwiperCore, { Grid, Navigation, Pagination } from "swiper";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import Card from "./Card";
import { slides, characters, backs, rarities, sortBy } from "../../utils";
import { useState } from "react";

SwiperCore.use([Grid, Pagination, Navigation]);

export default function MyKicks({}) {
  const [char, setChar] = useState(null);
  const [back, setBack] = useState(null);
  const [sort, setSort] = useState(null);
  const [rarity, setRarity] = useState(null);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + (index + 1) + "</div>";
    },
  };
  const sortedFiltered = slides
    .filter((card) => card.character === char || (char === null && card))
    .filter((card) => card.background === back || (back === null && card))
    .filter((card) => card.rarity === rarity || (rarity === null && card));

  return (
    <div id="my-kicks-page" className="w-full h-full  relative ">
      <div className="pb-10">
        <SectionHeaderBackNav pageName={"My juicy kicks"} />
      </div>
      <div className="w-full flex justify-between items-center gap-8 py-8  relative">
        <Dropdown
          setStateFunc={setChar}
          options={characters}
          value={characters[characters.findIndex((el) => el.value === char)]}
          icon="character"
          heading={"Character"}
        />
        <Dropdown
          setStateFunc={setBack}
          options={backs}
          value={backs[backs.findIndex((el) => el.value === back)]}
          icon="background"
          heading={"Background"}
        />
        <Dropdown
          setStateFunc={setRarity}
          options={rarities}
          value={rarities[rarities.findIndex((el) => el.value === rarity)]}
          icon="rarity"
          heading={"Rarity"}
        />

        <Dropdown
          setStateFunc={setSort}
          options={sortBy}
          value={sortBy[sortBy.findIndex((el) => el.value === sort)]}
          icon="sort"
          heading={"Sort by"}
        />
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
          {sortedFiltered.map((slide, i) => (
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
