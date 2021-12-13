import React from "react";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import "./minigames.scss";
// import Pong from "../../components/Games/Pong";
import { Link, Route, Outlet } from "react-router-dom";
import JuicyPongBanner from "./JuicyPongBanner";
import BattleBanner from "./BattleBanner";
export default function Minigames() {
  return (
    <div className="w-full mini-games">
      <SectionHeaderBackNav pageName="Games" />

      <div className="flex flex-col w-full gap-10 pt-10">
        <Link to="/pong">
          <JuicyPongBanner />
        </Link>

        <BattleBanner />

        <div className="w-full relative">
          <img
            className="w-full "
            src="/assets/memory-bg-soon.png"
            alt="play memory"
          />
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
            <p className="black-border text-[40px] text-white uppercase font-extrabold">
              Coming soon: Memory game
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
