import React from "react";
const powerups = [
  {
    icon: "assets/minigames/powerups/red-icon.svg",
    bg: "assets/minigames/powerups/red-bg.svg",
  },
  {
    icon: "assets/minigames/powerups/blue-icon.svg",
    bg: "assets/minigames/powerups/blue-bg.svg",
  },
  {
    icon: "assets/minigames/powerups/yellow-icon.svg",
    bg: "assets/minigames/powerups/yellow-bg.svg",
  },
  {
    icon: "assets/minigames/powerups/grey-icon.svg",
    bg: "assets/minigames/powerups/grey-bg.svg",
  },
  {
    icon: "assets/minigames/powerups/turq-icon.svg",
    bg: "assets/minigames/powerups/turq-bg.svg",
  },
  {
    icon: "assets/minigames/powerups/green-icon.svg",
    bg: "assets/minigames/powerups/green-bg.svg",
  },
  {
    icon: "assets/minigames/powerups/pink-icon.svg",
    bg: "assets/minigames/powerups/pink-bg.svg",
  },
];
function BattleBanner() {
  return (
    <div className="w-full relative link-content">
      <img
        className="w-full "
        src="/assets/minigames/battle-bg.png"
        alt="play Battle"
      />
      <div className="absolute w-full h-full bottom-0 left-0 px-12 place-content-center grid grid-cols-3 ">
        <div className="flex max-w-max flex-col justify-center  ml-10">
          <div className="game-name white-border flex leading-none">Battle</div>
          <div className="flex justify-between ">
            {powerups.map((power, i) => (
              <div className=" relative">
                <img src={power.bg} alt="power" />
                <img
                  className="absolute w-1/2 h-1/2 object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  src={power.icon}
                  alt="power-icon"
                />
              </div>
            ))}
          </div>
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
