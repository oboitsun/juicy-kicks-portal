import React from "react";

function BattleBanner() {
  return (
    <div className="w-full relative link-content">
      <img
        className="w-full "
        src="/assets/minigames/battle-bg.png"
        alt="play Battle"
      />
      <div className="absolute w-full h-full bottom-0 left-0 px-12 grid grid-cols-3 ">
        <div className="flex items-center ml-10">
          <div className="game-name white-border flex">Battle</div>
        </div>
        <div className="battle-banner-chars flex  self-center  relative mx-auto ">
          <img
            className={`battle-char-base battle-char`}
            src="assets/minigames/battle3.png"
            alt="character"
          />
          <img
            className={`absolute w-full battle-char-5 battle-char`}
            src="assets/minigames/battle1.png"
            alt="character"
          />
          <img
            className={`absolute w-full battle-char-4 battle-char`}
            src="assets/minigames/battle2.png"
            alt="character"
          />
          <img
            className={`absolute w-full battle-char-3 battle-char`}
            src="assets/minigames/battle4.png"
            alt="character"
          />
          <img
            className={`absolute w-full battle-char-2 battle-char`}
            src="assets/minigames/battle5.png"
            alt="character"
          />
          <img
            className={`absolute w-full battle-char-1 battle-char`}
            src="assets/minigames/battle6.png"
            alt="character"
          />{" "}
        </div>
        <div className="flex items-center justify-center  w-full">
          {" "}
          <div className=" w-4/5 flex justify-center items-center bg-orange rounded-md py-5 px-5 text-white ">
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

export default BattleBanner;
