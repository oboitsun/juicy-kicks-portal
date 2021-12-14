import React from "react";
import "./juicy-trump-cards.scss";
export default function JuicyTrumpBanner() {
  return (
    <div className="w-full relative link-content juicy-trump-cards link-content">
      <div className="w-full h-full absolute top-0 left-0">
        <img
          className="jt-card card-1"
          src="assets/minigames/cards/8.png"
          alt="card"
        />
        <img
          className="jt-card card-2"
          src="assets/minigames/cards/9.png"
          alt="card"
        />
        <img
          className="jt-card card-3"
          src="assets/minigames/cards/5.png"
          alt="card"
        />
        <img
          className="jt-card card-4"
          src="assets/minigames/cards/7.png"
          alt="card"
        />
        <img
          className="jt-card card-5"
          src="assets/minigames/cards/4.png"
          alt="card"
        />
        <img
          className="jt-card card-6"
          src="assets/minigames/cards/3.png"
          alt="card"
        />
      </div>
      <img
        className=""
        src="assets/minigames/juicy-trump-banner.png"
        alt="juicy trump banner"
      />
      <div className="absolute w-full h-full top-0 left-0 px-12 grid grid-cols-[max-content,1fr,33%] ">
        <div className="flex items-center  relative z-10">
          <div className="game-name juicy-trump text-white green-border flex">
            Juicy <br />
            Trump
          </div>
        </div>
        <div className="flex w-full h-full relative">
          <img
            className="jt-card card-7"
            src="assets/minigames/cards/1.png"
            alt="card"
          />
          <img
            className="jt-card card-8"
            src="assets/minigames/cards/2.png"
            alt="card"
          />
        </div>
        <div className="flex items-center justify-center  w-full">
          {" "}
          <div className=" w-4/5 flex justify-center items-center bg-white  rounded-md py-5 px-5 text-[#5C8567] ">
            <svg
              className="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM6.4 11.6V4.4L11.2 8L6.4 11.6Z"
                fill="current"
              />
            </svg>
            <span className="ml-2 text-base font-extrabold uppercase ">
              Let's go
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
