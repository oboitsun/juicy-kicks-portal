import React from "react";

function JuicyPongBanner() {
  return (
    <div className="w-full h-full relative link-content">
      <img
        className="w-full "
        src="/assets/ping-pong-bg.png"
        alt="play ping pong"
      />
      <div className="absolute w-full h-full top-0 left-0 place-content-center overflow-hidden px-12 grid grid-cols-3 ">
        <div className="flex items-center justify-center ">
          <div className="game-name juicy-pong black-border flex">
            Juicy P
            <img
              className="w-auto"
              src="/assets/watermelon.svg"
              alt="watermelon"
            />
            ng
          </div>
        </div>
        <div className="grid grid-cols-3 place-content-center place-items-center">
          <img className="char" src="/assets/pong-char1.png" alt="character" />
          <img className="char" src="/assets/pong-char2.png" alt="character" />
          <img className="char" src="/assets/pong-char3.png" alt="character" />
        </div>
        <div className="flex items-center justify-center  w-full">
          {" "}
          <div className=" w-4/5 flex justify-center items-center bg-lime rounded-md py-5 px-5 text-white ">
            <img
              className="h-full relative bottom-px"
              src="assets/play.svg"
              alt="play"
            />
            <span className="ml-2 text-base font-extrabold uppercase ">
              Let's go
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JuicyPongBanner;
