import React from "react";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import "./leaderboard.scss";
const leaderboard = [
  { id: 1, userName: "sergey", common: 1, uncomm: 2, rare: 3, ultraRare: 2000 },
  { id: 2, userName: "sergey", common: 1, uncomm: 2, rare: 3, ultraRare: 2000 },
  { id: 3, userName: "sergey", common: 1, uncomm: 2, rare: 3, ultraRare: 2000 },
  { id: 4, userName: "sergey", common: 1, uncomm: 2, rare: 3, ultraRare: 2000 },
  { id: 5, userName: "sergey", common: 1, uncomm: 2, rare: 3, ultraRare: 2000 },
  { id: 6, userName: "sergey", common: 1, uncomm: 2, rare: 3, ultraRare: 2000 },
];
export default function Leaderboard() {
  const userId = 4;
  return (
    <div className="w-full">
      <div className="grid-cols-2 grid gap-10 ">
        <div className="w-full h-auto relative pb-6">
          <SectionHeaderBackNav pageName="leaderboard" />
          <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-darkTurf"></div>
        </div>
        <div className="flex items-center relative pb-6">
          <p className="text-[32px] text-white text-border  leading-none">
            Latest giveaway winners
          </p>
          <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-darkTurf"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 w-full pt-10 gap-5 ">
        <div className="bg-yellow rounded-xl h-20 grid-custom place-items-center">
          <p className="justify-self-start col-span-2">rank</p>
          <p className="">common</p>
          <p className="">uncommon</p>
          <p className="">rare</p>
          <p className="">ultra rare</p>
        </div>
        {leaderboard.map((user, i) => (
          <div className={`place ${userId === user.id ? "user" : "other"} grid-custom`}>
            <div className=" w-full h-full relative">
              {i < 3 && (
                <img className="abs-centering" src="assets/star.svg" alt="star" />
              )}
              <span className="abs-centering z-10 pt-1">{i + 1}.</span>
            </div>
            <p className="justify-self-start"> sergey</p>
            <p>4.15</p>
            <p>4.15</p>
            <p>4.15</p>
            <p>4.15</p>
          </div>
        ))}
      </div>
    </div>
  );
}
