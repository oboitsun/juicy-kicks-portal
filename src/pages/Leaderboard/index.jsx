import React, { useState } from "react";
import SectionHeaderBackNav from "../../components/SectionHeaderBackNav";
import "./leaderboard.scss";
const leaderboard = [
  { id: 1, userName: "Juicy Player 1 ", common: 1, uncomm: 2, rare: 3, ultraRare: 2000 },
  { id: 2, userName: "Juicy Player 2", common: 1, uncomm: 2, rare: 3, ultraRare: 2000 },
  { id: 3, userName: "Juicy Player 3", common: 1, uncomm: 2, rare: 3, ultraRare: 2000 },
  { id: 4, userName: "Juicy Player 4", common: 1, uncomm: 2, rare: 3, ultraRare: 2000 },
  { id: 5, userName: "Juicy Player 5", common: 1, uncomm: 2, rare: 3, ultraRare: 2000 },
  { id: 6, userName: "Juicy Player 6 ", common: 1, uncomm: 2, rare: 3, ultraRare: 2000 },
];
export default function Leaderboard() {
  const userId = 4;

  return (
    <div className="w-full flex flex-col">
      <SectionHeaderBackNav pageName="leaderboard" />

      <div className="grid grid-cols-1 w-full pt-10 gap-5 ">
        {leaderboard.map((user, i) => (
          <div className={`place ${userId === user.id ? "user" : "other"} grid-custom`}>
            <div className=" w-12 h-full relative justify-self-start">
              <img className="abs-centering" src="assets/star.svg" alt="star" />

              <span className="abs-centering text-xs z-10 pt-1">{i + 1}.</span>
            </div>
            <p className="justify-self-start my-auto"> sergey</p>

            <p className="my-auto">1700.00</p>
          </div>
        ))}
      </div>
      <button className="nav-button uppercase text-2xl font-bold self-center mt-10">
        Load more
      </button>
    </div>
  );
}
