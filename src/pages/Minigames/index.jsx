import React from "react";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import "./minigames.scss";
// import Pong from "../../components/Games/Pong";
import { Link, Route, Outlet } from "react-router-dom";
import JuicyPongBanner from "./JuicyPongBanner";
import BattleBanner from "./BattleBanner";
import JuicyTrumpBanner from "./JuicyTrumpBanner";
export default function Minigames() {
  return (
    <div className="w-full mini-games">
      <SectionHeaderBackNav pageName="Games" />

      <div className="flex flex-col w-full gap-10 pt-10">
        <Link to="/pong">
          <JuicyPongBanner />
        </Link>

        <BattleBanner />

        <JuicyTrumpBanner />
      </div>
    </div>
  );
}
