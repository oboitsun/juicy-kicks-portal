import React, { useState } from "react";
import Dropdown from "../../components/Dropdown";
import { Swiper, SwiperSlide } from "swiper/react";
import "./marketplace.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Grid, Navigation, Pagination } from "swiper";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import { slides } from "./db";

const characters = [
  {
    value: null,
    label: "All",
  },
  {
    value: "pear",
    label: "Pear",
  },
  {
    value: "cherry",
    label: "Cherry",
  },
  {
    value: "watermelon",
    label: "Watermelon",
  },
  {
    value: "fig",
    label: "Fig",
  },
  {
    value: "pineapple",
    label: "Pineapple",
  },
  {
    value: "blueberry",
    label: "Blueberry",
  },
];
const backs = [
  { value: null, label: "All" },
  { value: "red", label: "Red" },
  { value: "navy", label: "Navy" },
  { value: "blue", label: "Blue" },
  { value: "fig", label: "Fig" },
  { value: "yellow", label: "Yellow" },
  { value: "orange", label: "Orange" },
];
const rarities = [
  { value: null, label: "All" },
  { value: "common", label: "Common" },
  { value: "uncommon", label: "Uncommon" },
  { value: "rare", label: "Rare" },
  { value: "ultraRare", label: "Ultra Rare" },
];
const sortBy = [
  { value: null, label: "new first" },
  {
    value: "rarity",
    label: "rarity",
  },
];
SwiperCore.use([Grid, Pagination, Navigation]);
export default function Marketplace() {
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
    <div id="marketplace" className="w-full ">
      <SectionHeaderBackNav pageName="Marketplace" />

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
            rows: 2,
            fill: "row",
          }}
          spaceBetween={32}
          pagination={pagination}
          // loop={true}
          navigation={{
            nextEl: "#swiper-store-page-next",
            prevEl: "#swiper-store-page-prev",
          }}
        >
          {sortedFiltered.map((slide, i) => (
            <SwiperSlide key={i} className="">
              <div className="slide-inner-wrapper rounded-md overflow-hidden">
                <img className="w-full" src={slide.imgSrc} alt="slide" />
                <div className="nft-specs">
                  <p className="text-white font-extrabold text-xs uppercase">
                    {slide.character}
                  </p>
                  <button className=" px-4 rounded-md border-white border-2 text-xs uppercase">
                    buy now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div class="swiper-pagination flex"></div>
        </Swiper>{" "}
      </div>
    </div>
  );
}
