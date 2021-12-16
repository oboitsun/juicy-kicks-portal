import React from "react";
import "./Menu.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
const slides = [
  { imgSrc: "/assets/minigames/menu-chars/1.png" },
  { imgSrc: "/assets/minigames/menu-chars/2.png" },
  { imgSrc: "/assets/minigames/menu-chars/3.png" },
];
const M = "Menu";

export default function Menu({ setShowMenu }) {
  const menu_items = [
    {
      text: "start new game",
      icon: "assets/minigames/icons/4.svg",
      class: "new-game",
      onClick: () => {
        setShowMenu(false);
      },
    },
    {
      text: "settings",
      icon: "assets/minigames/icons/5.svg",
      class: "settings",
    },
    {
      text: "report",
      icon: "assets/minigames/icons/1.svg",
      class: "report",
    },
    {
      text: "help center",
      icon: "assets/minigames/icons/2.svg",
      class: "help-center",
    },
    {
      text: "leader board",
      icon: "assets/minigames/icons/3.svg",
      class: "leaderboard",
    },
    {
      text: "exit game",
      icon: "assets/minigames/icons/3.svg",
      class: "exit-game",
    },
  ];
  return (
    <div className="Menu gap-5">
      <div className={`${M}__menu flex flex-col `}>
        <p className="text-2xl font-extrabold uppercase pb-6">Juicy Pong</p>
        <div className="flex flex-col flex-grow justify-between h-full">
          {menu_items.map((item, i) => (
            <button
              onClick={item?.onClick}
              className={`${M}__menu-button ${item.class}`}
            >
              <img src={item.icon} alt={item.text} />
              <span>{item.text}</span>
            </button>
          ))}
        </div>
      </div>
      <div className={`${M}__slider-wrapper`}>
        <div className="absolute w-full h-full top-0 left-0 p-8">
          <p className="text-white black-border uppercase font-extrabold text-center pb-2.5">
            Choose character
          </p>
          <div className=" relative w-full h-full flex">
            <div
              id="swiper-menu-next"
              className="absolute top-1/2 right-0 z-10"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.3725 0 0 5.3725 0 12C0 18.6275 5.3725 24 12 24C18.627 24 24 18.6275 24 12C24 5.3725 18.627 0 12 0ZM15.5175 12.0085L14.9445 12.582L14.9405 12.578L9.5415 17.9775L9.5405 17.9765L9.5395 17.978L8.482 16.9215L13.4055 11.998L8.486 7.0785L9.0125 6.5525L9.01 6.55L9.5385 6.0215L9.541 6.024L9.5435 6.0215L15.2645 11.7425L15.2615 11.745L15.5175 12.001L15.5145 12.0045L15.5175 12.0085Z"
                  fill="black"
                />
              </svg>
            </div>
            <div id="swiper-menu-prev" className="absolute top-1/2 left-0 z-10">
              <svg
                className="rotate-180"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.3725 0 0 5.3725 0 12C0 18.6275 5.3725 24 12 24C18.627 24 24 18.6275 24 12C24 5.3725 18.627 0 12 0ZM15.5175 12.0085L14.9445 12.582L14.9405 12.578L9.5415 17.9775L9.5405 17.9765L9.5395 17.978L8.482 16.9215L13.4055 11.998L8.486 7.0785L9.0125 6.5525L9.01 6.55L9.5385 6.0215L9.541 6.024L9.5435 6.0215L15.2645 11.7425L15.2615 11.745L15.5175 12.001L15.5145 12.0045L15.5175 12.0085Z"
                  fill="black"
                />
              </svg>
            </div>
            <Swiper
              className=""
              // autoplay={{
              //   delay: 3500,

              //   disableOnInteraction: false,
              // }}
              modules={[Navigation, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              centeredSlides={true}
              navigation={{
                nextEl: "#swiper-menu-next",
                prevEl: "#swiper-menu-prev",
              }}
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i} className="">
                  <div className="w-full h-full flex flex-col items-center justify-center flex-grow">
                    <p className="text-center text-[40px] uppercase font-extrabold text-white">
                      Watermelon
                    </p>
                    <img className="h-full" src={slide.imgSrc} alt="char" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
