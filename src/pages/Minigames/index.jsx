import React from "react";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import "./minigames.scss";
// import Pong from "../../components/Games/Pong";
import { Link, Route, Outlet } from "react-router-dom";
export default function Minigames() {
  return (
    <div className="w-full mini-games">
      <SectionHeaderBackNav pageName="Games" />

      <div className="flex flex-col w-full gap-10 pt-10">
        <Link to="/pong">
          <div className="w-full relative link-content">
            <img
              className="w-full "
              src="/assets/ping-pong-bg.png"
              alt="play ping pong"
            />
            <div className="absolute w-full h-full bottom-0 left-0 px-12 grid grid-cols-3 ">
              <div className="flex items-center justify-center">
                <div className="juicy-pong black-border flex">
                  Juicy P
                  <img className="w-auto" src="/assets/watermelon.svg" alt="watermelon" />
                  ng
                </div>
              </div>
              <div className="flex  self-end  relative mx-auto">
                <img className="char " src="/assets/pong-char1.png" alt="character" />
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
        </Link>
        <div className="w-full relative">
          <img className="w-full " src="/assets/chess-bg-soon.png" alt="play chess" />
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
            <p className="white-border text-[40px] uppercase font-extrabold">
              Coming soon: Chess play
            </p>
          </div>
        </div>
        <div className="w-full relative">
          <img className="w-full " src="/assets/memory-bg-soon.png" alt="play memory" />
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
