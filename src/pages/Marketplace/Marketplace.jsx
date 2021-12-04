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

import { slides, characters, backs, rarities, sortBy, slidesPerView } from "../../utils";

SwiperCore.use([Grid, Pagination, Navigation]);
export default function Marketplace() {
  const [currentSlidesPerView, setSlidesPerView] = useState({ inRow: 5, rows: 5 });
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

      <div className="w-full flex justify-between items-center gap-5 pt-8 px-4  relative">
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

        <Dropdown
          setStateFunc={setSlidesPerView}
          options={slidesPerView}
          value={
            slidesPerView[
              slidesPerView.findIndex(
                (el) =>
                  el.label === currentSlidesPerView.rows * currentSlidesPerView.inRow
              )
            ]
          }
          icon="sort"
          heading={"Show"}
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
          slidesPerGroup={currentSlidesPerView.inRow}
          slidesPerView={currentSlidesPerView.inRow}
          grid={{
            rows: currentSlidesPerView.rows,
            fill: "row",
          }}
          spaceBetween={20}
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
                <div className="nft-specs  flex justify-center gap-2 w-full font-extrabold">
                  <p className="text-white   text-xs uppercase">
                    {/* {slide.character} */}
                    Buy now
                  </p>
                  <p className="text-white  text-center font bold"> 1 ICP</p>
                  {/* <button className=" px-4 rounded-md border-white border-2 text-xs uppercase">
                    buy now
                  </button> */}
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
